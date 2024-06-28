import {
  ChromeFilled,
  CrownFilled,
  SmileFilled,
  TabletFilled,
} from "@ant-design/icons";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "欢迎",
        icon: <SmileFilled />,
        component: "@/pages/Home",
      },
      {
        path: "/user",
        name: "用户",
        icon: <ChromeFilled />,
        component: "@/pages/User",
      },
      {
        name: "列表页",
        icon: <TabletFilled />,
        path: "/list",
        component: "./ListTableList",
        routes: [
          {
            path: "/list/sub-page2",
            name: "a",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
          {
            path: "/list/sub-page3",
            name: "b",
            icon: <CrownFilled />,
            component: "./Welcome",
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
  // appList: [
  //   {
  //     icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  //     title: "Ant Design",
  //     desc: "杭州市较知名的 UI 设计语言",
  //     url: "https://ant.design",
  //   },
  // ],
};
