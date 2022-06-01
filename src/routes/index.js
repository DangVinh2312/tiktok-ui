import routesConfig from '~/config/routes'

// layouts
import { HeaderOnly } from '~/components/Layout';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// public routes
const publicRoutes = [
    {
        path: routesConfig.root,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.search,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
