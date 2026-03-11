import React from "react";
import { Layout, Menu } from "antd";
import { sidebarConfig } from "./sidebar.config";
import gymLogo from "../../assets/logo/gymLogo.png";
import { Link, useLocation } from "react-router-dom";
import styles from "./layout.module.css";

export default function Sidebar(): React.JSX.Element {
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
      theme="light"
      collapsible
      //   breakpoint="lg"
      collapsedWidth="90"
      className={styles.sidebarContainer}
    >
      <div className={styles.brandBlock}>
        <img
          src={gymLogo}
          alt="GymSym Logo"
          style={{ width: 40, height: 40, objectFit: "contain" }}
        />
        <span>Go GymSym</span>
      </div>
      <Menu
        items={menuItems}
        theme="dark"
        // mode="inline"
        selectedKeys={[selectedKey]}
        className={styles.menuContainer}
      />
    </Sider>
  );
}
