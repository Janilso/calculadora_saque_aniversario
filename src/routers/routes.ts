import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ROUTES_NAME from './routesName';

const routes = [
    {
        path: ROUTES_NAME.INICIO,
        caseSensitive: true,
        component: Home,
    },
    {
        path: ROUTES_NAME.NOT_FOUND,
        caseSensitive: true,
        component: NotFound,
    },
];

export default routes;
