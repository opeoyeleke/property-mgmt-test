import React, { useState, useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Layout, message } from "antd";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Portfolio from "../../pages/Portfolio/Portfolio";
import "./index.scss";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { UserContext } from "../../store/userContext";

const { Content } = Layout;

const Router = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.uid) {
      message.warning("Please signin to continue!");
      navigate("/signin");
    }
  });

  return (
    <Layout>
      <Sidebar {...{ showSidebar, setShowSidebar }} />
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
