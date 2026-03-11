import React from "react";
import { Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./layout.module.css";
import { useLocation } from "react-router-dom";
import { sidebarConfig, type SidebarConfigItem } from "./sidebar.config";

export default function HeaderBar(): React.JSX.Element {
  const { Header } = Layout;
  const pathname = useLocation().pathname;
  // const pageTitle = pathname.split("/")[1];
  // console.log("pageTitle", pageTitle);
  const pageTitle = sidebarConfig.find(
    (item: SidebarConfigItem) => item.path === pathname,
  )?.label;
  console.log("pageTitle", pageTitle);

  const userInitials = "ED";
  const userName = "edf";

  return (
    <Header className={styles.headerContainer}>
      <div className={styles.pageTitle}>{pageTitle}</div>
      <button type="button" className={styles.profilePill}>
        <span className={styles.profileAvatar}>{userInitials}</span>
        <span className={styles.profileName}>{userName}</span>
        <DownOutlined className={styles.profileChevron} />
      </button>
    </Header>
  );
}
