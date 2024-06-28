// src/router/router.ts
export interface RouteConfig {
  path: string;
  componentPath: string;
  children?: RouteConfig[];
  layout?: boolean;
}

const routesConfig: RouteConfig[] = [
  {
    path: "/",
    componentPath: "../pages/Home",
  },
  {
    path: "/user",
    componentPath: "../pages/Users",
  },
  {
    path: "/login",
    componentPath: "../pages/Login",
    layout: false,
  },
  // 添加其他路由配置
];

export default routesConfig;
