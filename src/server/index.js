import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';

import App from '../shared/app/app.jsx';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../shared/app/redux/reducers/combine';

import { StaticRouter as Router, matchPath } from 'react-router';

import thunk from '../shared/app/redux/middleware/thunk';
import routeBank from '../shared/routes';

const app = express();

app.use('/dist', express.static('./dist'));

app.get('*', async (req, res) => {
	try {
		// create a new redux store for each request
		const store = createStore(reducers, {}, applyMiddleware(thunk));

		let foundPath = null;

		// match the request url to router paths and render component
		let { path, component } =
			routeBank.routes.find(({ path, exact }) => {
				foundPath = matchPath(req.url, {
					path,
					exact,
					strict: false,
				});
				return foundPath;
			}) || {};

		// return empty shell if component is invalid
		if (!component) {
			component = {};
		}

		// return empty promise for no fetchData function
		if (!component.fetchData) {
			component.fetchData = () => new Promise(resolve => resolve());
		}

		await component.fetchData({ store, params: foundPath ? foundPath.params : {} });
		// retrieve the store state
		let preloadedState = store.getState();
		// context used by router
		let context = {};

		const html = ReactDOM.renderToString(
			<Provider store={store}>
				<Router context={context} location={req.url}>
					<App />
				</Router>
			</Provider>
		);

		// render helmet data
		const helmetData = helmet.renderStatic();

		// check context for url to redirect to
		if (context.url) {
			res.redirect(context.status, `http://${req.header.host + context.url}`);
		} else if (foundPath && foundPath.path === '/404')
			// send customer 404 page
			res.status(404).send(renderFullPage, preloadedState, helmetData);
		else {
			res.send(renderFullPage(html, preloadedState, helmetData));
		}
	} catch (error) {
		res.status(400).send(renderFullPage('An error occured', {}, {}));
	}
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on localhost:${port}`));

function renderFullPage(html, preloadedState, helmet) {
	return `
    <!doctype html>
    <html>
      <head>
        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/dist/assets/app.bundle.js"></script>
      </body>
    </html>
    `;
}
