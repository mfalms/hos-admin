import React, { memo, useMemo, Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import App from "../App";
import routesConfig from "./router";

const loadComponent = (componentPath: string) => {
  return lazy(() => import(/* @vite-ignore */ `${componentPath}`));
};

const getRouterList = (): RouteObject[] => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <App />,
      children: [],
    },
  ];

  routesConfig.forEach((item) => {
    const routeElement = (
      <Suspense fallback={<div>Loading...</div>}>
        {React.createElement(loadComponent(item.componentPath))}
      </Suspense>
    );

    if (item.layout === false) {
      routes.push({ path: item.path, element: routeElement });
    } else {
      if (routes[0].children) {
        routes[0].children.push({ path: item.path, element: routeElement });
      }
    }
  });

  return routes;
};

const Router = memo(() => {
  const routes = useMemo(() => getRouterList(), []);

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
});

export default Router;
