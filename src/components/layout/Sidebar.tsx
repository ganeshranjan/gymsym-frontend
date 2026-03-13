import React from "react";
import { Layout, Menu } from "antd";
import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { sidebarConfig } from "./sidebar.config";
import gymLogo from "../../assets/logo/gymLogo.png";
import { Link, useLocation } from "react-router-dom";
import styles from "./layout.module.css";

export default function Sidebar({
  collapsed,
  setCollapsed,
  isMobile,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
}): React.JSX.Element {
  const location = useLocation();
  const { Sider } = Layout;

  //use matchPath to get the selected key
  const selectedKey = location.pathname.split("/")[1] || "";
  console.log("selectedKey", selectedKey);

  const menuItems = sidebarConfig.map((item) => {
    return {
      key: item.key,
      icon: <item.icon />,
      label: <Link to={item.path}>{item.label}</Link>,
    };
  });

  return (
    <Sider
      width={240}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      collapsedWidth={isMobile ? 0 : 80}
      trigger={null}
      className={styles.sidebarContainer}
    >
      <div className={styles.brandBlock}>
        <div className={styles.brandMain}>
          <img
            src={gymLogo}
            alt="GymSym Logo"
            className={styles.brandLogo}
          />
          {!collapsed && <span className={styles.brandTitle}>GymSym</span>}
        </div>
        <div className={styles.brandActions}>
          {!isMobile && (
            <button
              type="button"
              className={styles.sidebarToggle}
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
          )}
          {isMobile && (
            <button
              type="button"
              className={styles.sidebarToggle}
              onClick={() => setCollapsed(true)}
            >
              <CloseOutlined />
            </button>
          )}
        </div>
      </div>
      <Menu
        items={menuItems}
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        className={styles.menuContainer}
      />
    </Sider>
  );
}
