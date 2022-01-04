import React, { useContext } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { ReactComponent as Panda } from "../../assets/svg/panda.svg";
import { UserContext } from "../../store/userContext";
const { Header } = Layout;

const HeaderComponent = ({ showSidebar, setShowSidebar, headerTitle }) => {
  const { user } = useContext(UserContext);
  return (
    <Header>
      <div className="header-left">
        <div>
          {React.createElement(
            !showSidebar ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => {
                setShowSidebar(!showSidebar);
              },
            }
          )}
        </div>
        <div className="header-title">{headerTitle}</div>
      </div>

      <div className="header-right">
        <Panda style={{ fontSize: "32px" }} />
        <span> {user?.firstName ? `Hi ${user?.firstName}` : "Welcome"}!</span>
      </div>
    </Header>
  );
};

export default HeaderComponent;
