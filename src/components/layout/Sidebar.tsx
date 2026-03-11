import React from "react";
import { Layout } from "antd";

const { Sider } = Layout;

export default function Sidebar(): React.JSX.Element {
  return (
    <Sider width={200} theme="dark" style={{ backgroundColor: "blue" }}>
      <div>Sidebar</div>
    </Sider>
  );
}
