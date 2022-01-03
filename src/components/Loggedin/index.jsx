import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Portfolio from "../../pages/Portfolio/Portfolio";
import "./index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
const { Content } = Layout;

const Router = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Dashboard");

  return (
    <Layout>
      <Sidebar showSidebar={showSidebar} />
      <Layout className="site-layout main-section">
        <Header {...{ showSidebar, setShowSidebar, headerTitle }} />
        <Content className="site-layout-background">
          <Routes>
            <Route
              exact
              path="/"
              element={<Dashboard {...{ setHeaderTitle }} />}
            />

            <Route
              exact
              path="/portfolio"
              element={<Portfolio {...{ setHeaderTitle }} />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Router;
