import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import HeaderBar from "./Header";

const { Content } = Layout;

export default function AppLayout(): React.JSX.Element {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <HeaderBar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
