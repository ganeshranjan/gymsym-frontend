import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

export default function HeaderBar(): React.JSX.Element {
  return (
    <Header style={{ backgroundColor: "yellow" }}>
      <div>Header</div>
    </Header>
  );
}
