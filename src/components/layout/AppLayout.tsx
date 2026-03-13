import React, { useState } from "react";
import { Layout, Grid } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import HeaderBar from "./HeaderBar";

const { Content } = Layout;

export default function AppLayout(): React.JSX.Element {
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;
  const [collapsed, setCollapsed] = useState(isMobile);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobile={isMobile}
      />
      <Layout>
        <HeaderBar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobile={isMobile}
        />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
