import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Input, Checkbox, Button, message } from "antd";
import Navbar from "../../component/Navbar/Navbar";
import { auth, createUserProfileDocument } from "../../firebase/firebase";

import "./auth.scss";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 13,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Signup = () => {
  const [form] = Form.useForm();
  const [buttonLoading, setButtonLoading] = useState(false);

  const onFinish = async (values) => {
    setButtonLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values?.email,
        values?.password
      );

      await createUserProfileDocument(user, {
        firstName: values?.first_name,
        lastName: values?.last_name,
      });

      setButtonLoading(false);
      message.success("Registration successfull");
    } catch (error) {
      setButtonLoading(false);
      if (error?.code === "auth/email-already-in-use") {
        message.warning("Email already in use!");
      } else {
        message.warning(error.message);
      }
    }
  };

  return (
    <>
      <div className="nav-wrapper">
        <Navbar />
      </div>

      <div className="page-container">
        <div className="page-left">
          <div className="title">
            <div className="app-name white">
              <div className="icon">A</div> <Link to="/">Apartrent</Link>
            </div>
          </div>
          <div className="desc">
            Join people around the world and enjoy a comprehensive asset
            management experience
          </div>
          <div className="detail">Create an account to get started</div>
        </div>

        <div className="page-right">
          <div className="form-container register">
            <div className="form-title ant-col ant-form-item-control ant-col-xs-20 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
              Create an account:
            </div>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="first_name"
                label={"First name"}
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>

              <Form.Item
                name="last_name"
                label={"Last name"}
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input placeholder="E-mail" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Password: minimum 6 characters" />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Should accept agreement"),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>I aggree to the terms</Checkbox>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  loading={buttonLoading}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Create account
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="already ant-col-xs-20 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
            Already have an account?
            <span>
              <Link to="/signin"> Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
