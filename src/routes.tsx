import React from 'react';
export interface Route {
    path: string;
    name: string;
    component: any;
    exact?: boolean;
}

const Home = React.lazy(() => import('./pages/Home'))


const routes: Route[] = [
    {
        name: "Home",
        component: Home,
        path: ""
    }
]

export { routes };