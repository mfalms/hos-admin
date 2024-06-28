import { HeartOutlined, LogoutOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuDataItem } from '@ant-design/pro-components';
import { ProLayout } from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const IconMap = {
  smile: <SmileOutlined />,
  heart: <HeartOutlined />,
};

const defaultMenus = [
  {
    path: '/',
    name: '首页',
    icon: 'SmileFilled',
  },
  {
    path: '/user',
    name: '用户',
    icon: 'ChromeFilled',
  },
  {
    name: '列表页',
    icon: 'TabletFilled',
    path: '/list',
    component: './ListTableList',
    routes: [
      {
        path: '/list/sub-page2',
        name: 'a',
        icon: 'CrownFilled',
        component: './Welcome',
      },
      {
        path: '/list/sub-page3',
        name: 'b',
        icon: 'CrownFilled',
        component: './Welcome',
      },
    ],
  },
];

const loopMenuItem = (menus: any[]): MenuDataItem[] => {
  return menus.map(({ icon, routes, ...item }) => ({
    ...item,
    icon: icon && IconMap[icon as 'smile'],
    children: routes && loopMenuItem(routes),
  }));
};
export default () => {
  const [pathname, setPathname] = useState('/');
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login', { replace: true });
  };
  return (
    <ProLayout
      title="管理系统"
      // logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      style={{
        minHeight: 500,
      }}
      fixSiderbar
      location={{
        pathname,
      }}
      menu={{ request: async () => loopMenuItem(defaultMenus) }}
      onMenuHeaderClick={() => {
        console.log('onMenuHeaderClick');
      }}
      avatarProps={{
        title: 'admin',
        src: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        render: (_props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick: logout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      menuItemRender={(item, dom) => (
        <a
          onClick={() => {
            setPathname(item.path || '/welcome');
            navigate(item.path || '/welcome');
          }}
        >
          {dom}
        </a>
      )}
    >
      {/* <PageContainer content="欢迎使用"> */}
      <Outlet />
      {/* </PageContainer> */}
      {/* <SettingDrawer /> */}
    </ProLayout>
  );
};
