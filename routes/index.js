import RootComp from '../components/RootComp';
import CompA from '../components/CompA';
import CompB from '../components/CompB';
import CompC from '../components/CompC';

var routes = {
	path: '/',
	// indexRoute: { component: CompA },
	component: RootComp,
	childRoutes: [
		{
			path: 'a',
			component: CompA
		},
		{
			path: 'b',
			component: CompB
		},
		{
			path: 'c',
			component: CompC
		}
	]
};

export default routes;