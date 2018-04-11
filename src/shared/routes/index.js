import Navbar from '../app/Navbar';
import Home from '../app/Home';
import User from '../app/User';

export default {
	routes: [
		{
			path: '/',
			component: Home,
			exact: true,
		},
		{
			path: '/user',
			component: User,
			exact: true,
		},
	],
	redirects: [
		{
			from: '/people',
			to: '/user',
			status: 301,
		},
	],
};
