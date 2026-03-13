import React from "react";
import { Button, Layout } from "antd";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import styles from "./layout.module.css";
import { useLocation } from "react-router-dom";
import { sidebarConfig, type SidebarConfigItem } from "./sidebar.config";

export default function HeaderBar({
  collapsed,
  setCollapsed,
  isMobile,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isMobile: boolean;
}): React.JSX.Element {
  const { Header } = Layout;
  const userInitials = "ED";
  const userName = "edf";
  const location = useLocation();
  const currentItem = sidebarConfig.find((item) =>
    location.pathname.startsWith(item.path),
  );
  const pageTitle = currentItem?.label ?? "GymSym";
  return (
    <Header className={styles.headerContainer}>
      {isMobile && (
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      )}
      <div className={styles.pageTitle}>{pageTitle}</div>
      <button type="button" className={styles.profilePill}>
        <span className={styles.profileAvatar}>{userInitials}</span>
        <span className={styles.profileName}>{userName}</span>
        <DownOutlined className={styles.profileChevron} />
      </button>
    </Header>
  );
}
