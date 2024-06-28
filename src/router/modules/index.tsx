import {
  AppstoreOutlined,
  DatabaseOutlined,
  HomeOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { lazy } from "react";
import type { RouteList } from "@/router/route";
import { FormattedMessage } from "@/locales";
import Layout from "@/layout";
import Authority from "@/layout/Authority";

const Home = lazy(() => import("@/views/Home"));

export const defaultRoute: RouteList[] = [
  {
    path: "/home",
    id: "Home",
    element: <Home />,
    handle: {
      label: "首页",
      icon: <HomeOutlined />,
    },
  },
];

const Login = lazy(() => import("@/views/Login"));

export const whiteList: RouteList[] = [
  {
    path: "*",
    element: <ErrorPage403 />,
  },
  {
    path: "/refresh/*",
    element: <Refresh />,
    handle: { label: "", hideSidebar: true, whiteList: true },
  },
];

export const baseRouter: RouteList[] = [
  {
    path: "/",
    element: (
      <Authority>
        <Layout />
      </Authority>
    ),
    errorElement: <ErrorElement pageType="Layout" />,
    children: [...whiteList],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
