import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Redirect from './Redirect';
import Navbar from './Navbar';
import routeOptions from '../routes';

class App extends Component {
	render() {
		const routes = routeOptions.routes.map(({ path, component, exact }, i) => (
			<Route key={Math.random() + 'ROUTE_'} exact={exact} path={path} component={component} />
		));
		const redirects = routeOptions.redirects.map(({ from, to, status }, i) => (
			<Redirect key={Math.random() + 'REDIRECT_'} from={from} to={to} status={status} />
		));
		return (
			<div>
				<Navbar />
				<Switch>
					{routes}
					{redirects}
				</Switch>
			</div>
		);
	}
}
export default App;
