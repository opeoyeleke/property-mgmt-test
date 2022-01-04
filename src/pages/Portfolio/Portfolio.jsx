import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import {
  Tabs,
  Form,
  Input,
  Button,
  message,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useProperty from "../../hooks/useProperty";
import { UserContext } from "../../store/userContext";
import Property from "../../components/Property/Property";
import "./portfolio.scss";

const Portfolio = ({ setHeaderTitle }) => {
  const { TabPane } = Tabs;
  const [activeTab, setActiveTab] = useState("1");
  useEffect(() => {
    setHeaderTitle("Portfolio");
  });

  return (
    <div>
      <Helmet>
        <title>Portfolio | Dashboard</title>
        <meta
          name="description"
          content="Apartrent helps you to organize properties in one place."
        />
        <meta property="og:title" content="Profile | Dashboard" />
      </Helmet>

      <div className="portfolio-container">
        <div className="top-section">
          <div className="page-title-p">Create and Manage Properties</div>
          <div className="page-desc-p">
            This page allows you to create and manage your properties. When
            adding properties, try to fill in the information appropriately.
          </div>
        </div>

        <div className="portfolio-main">
          <Tabs
            activeKey={activeTab}
            defaultActiveKey="1"
            onChange={(activeKey) => {
              setActiveTab(activeKey);
            }}
          >
            <TabPane tab={<span>Properties</span>} key="1">
              <PropertiesTab />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlusOutlined />
                  Add Property
                </span>
              }
              key="2"
            >
              <AddPropertyTab setActiveTab={setActiveTab} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const AddPropertyTab = ({ setActiveTab }) => {
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 12,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 28,
      },
    },
  };

  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [buttonLoading, setButtonLoading] = useState(false);
  const { handleCreateProperty } = useProperty();

  const createProperty = async (values) => {
    setButtonLoading(true);
    handleCreateProperty(values)
      .then(() => {
        message.success("Property added successfully!");
        setButtonLoading(false);
        form.resetFields();
        setActiveTab("1");
      })
      .catch((error) => {
        setButtonLoading(false);
        message.warning("An error occured. Please try again later!");
      });
  };
  return (
    <div className="add-property">
      <div className="info">
        <Form
          {...formItemLayout}
          form={form}
          name="create-property"
          onFinish={createProperty}
          layout="vertical"
          scrollToFirstError
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter title!",
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="" />
          </Form.Item>

          <Form.Item
            label="Property type"
            name="property_type"
            rules={[
              {
                required: true,
                message: "Please select property type!",
                whitespace: true,
              },
            ]}
          >
            <Select
              placeholder=""
              //  onChange={onCategoryChange}
            >
              <Option key="0" value="Apartment">
                Apartment
              </Option>
              <Option key="1" value="Single Family House">
                Single Family House
              </Option>
              <Option key="2" value="Condominium">
                Condominium
              </Option>
              <Option key="3" value="Townhouse">
                Townhouse
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter address!",
                whitespace: true,
              },
            ]}
          >
            <TextArea rows={2} placeholder="" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              label="Estimated value"
              name="value"
              style={{
                display: "inline-block",
                width: "49%",
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter estimated value!",
                },
              ]}
            >
              <InputNumber
                style={{ width: "100%" }}
                formatter={(value) => `$${value}`}
              />
            </Form.Item>

            <Form.Item
              label="Year Built"
              name="built"
              style={{
                display: "inline-block",
                width: "49%",
                marginLeft: "2%",
              }}
              rules={[
                {
                  required: true,
                  message: "Please select year built!",
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} picker="year" />
            </Form.Item>
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              label="Rooms"
              name="rooms"
              style={{
                display: "inline-block",
                width: "49%",
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter number of rooms!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} min={0} max={100} />
            </Form.Item>

            <Form.Item
              label="Baths"
              name="baths"
              style={{
                display: "inline-block",
                width: "49%",
                marginLeft: "2%",
              }}
              rules={[
                {
                  required: true,
                  message: "Please enter number of baths!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} min={0} max={100} />
            </Form.Item>
          </Form.Item>

          <Form.Item
            name="other"
            label="Description"
            rules={[
              {
                required: true,
                message: "Please enter property information!",
                whitespace: true,
              },
            ]}
          >
            <TextArea rows={5} placeholder="" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={buttonLoading}>
              Add Property
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const PropertiesTab = () => {
  const { user } = useContext(UserContext);

  const [properties, setProperties] = useState({ keys: [], values: [] });

  useEffect(() => {
    if (user?.properties) {
      setProperties({
        keys: Object.keys(user?.properties),
        values: Object.values(user?.properties),
      });
    }
    // eslint-disable-next-line
  }, [user?.properties]);

  return (
    <div className="properties">
      {user?.properties && user?.properties !== {} ? (
        <div>
          {properties.values.map((item, index) => (
            <Property
              key={Math.random()}
              item={{ ...item, id: properties.keys[index] }}
            />
          ))}
        </div>
      ) : (
        <div className="no-property">You do not have any property!</div>
      )}
    </div>
  );
};
