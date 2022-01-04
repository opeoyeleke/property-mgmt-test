import React from "react";
import { Tag, Dropdown, Menu } from "antd";
import {
  EnvironmentOutlined,
  EllipsisOutlined,
  EditOutlined,
  UserSwitchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./property.scss";

const Property = ({ item }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <EditOutlined /> Edit
      </Menu.Item>

      <Menu.Item key="2">
        <UserSwitchOutlined /> Transfer
      </Menu.Item>
      <Menu.Item key="3">
        <span style={{ color: "red" }}>
          <DeleteOutlined /> Delete
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="property-container">
      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
        <EllipsisOutlined className="menu-icon" />
      </Dropdown>

      <div className="row-one">
        {item?.property_type === "Apartment" && (
          <Tag color="volcano">Apartment</Tag>
        )}
        {item?.property_type === "Single Family House" && (
          <Tag color="blue">Single Family House</Tag>
        )}
        {item?.property_type === "Condominium" && (
          <Tag color="purple">Condominium</Tag>
        )}
        {item?.property_type === "Townhouse" && (
          <Tag color="geekblue">Townhouse</Tag>
        )}
      </div>

      <div className="row-two">{item?.title}</div>

      <div className="row-three">
        {`${item?.rooms} Room${item.rooms !== 1 ? "s" : ""}`} &#8226;{" "}
        {`${item?.baths} Bath${item.baths !== 1 ? "s" : ""}`}
      </div>

      <div className="row-four">
        Built Year {item?.built} &#8226; Worth $
        {parseFloat(item?.value).toLocaleString()}
      </div>

      <div className="row-five">
        <EnvironmentOutlined /> {item?.address}
      </div>
    </div>
  );
};

export default Property;
