import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { UserContext } from "../../store/userContext";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { Sider } = Layout;
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <Sider trigger={null} collapsible collapsed={!showSidebar}>
      <div className={`app-name white ${!showSidebar ? "hide-text" : ""}`}>
        <div className="icon">A</div> <span>Apartrent</span>
      </div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>

        <Menu.Item
          key="4"
          icon={<HomeOutlined />}
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <NavLink to="/dashboard/portfolio">Portfolio</NavLink>
        </Menu.Item>
        <Menu.Item
          key="5"
          icon={<LogoutOutlined />}
          onClick={() => {
            auth.signOut();
            setUserData(null);
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
