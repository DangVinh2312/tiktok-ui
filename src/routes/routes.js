import config from '~/config';

// layouts
import { HeaderOnly } from '~/layouts';

// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// public routes
const publicRoutes = [
    {
        path: config.routes.root,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.search,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
