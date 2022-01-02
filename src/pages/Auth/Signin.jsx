import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from "antd";
import Navbar from "../../components/Navbar/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

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

const Signin = () => {
  const [form] = Form.useForm();
  const [buttonLoading, setButtonLoading] = useState(false);

  const onFinish = async (values) => {
    setButtonLoading(true);
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setButtonLoading(false);
        message.success("Login successful!");
      })

      .catch((error) => {
        setButtonLoading(false);
        if (error?.code === "auth/user-not-found") {
          message.error("Email entered is invalid!");
        } else if (error?.code === "auth/wrong-password") {
          message.error("Password entered is incorrect!");
        } else {
          message.error(error.message);
        }
      });
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
          <div className="detail">Sign in to continue</div>
        </div>

        <div className="page-right">
          <div className="form-container ">
            <div className="form-title ant-col ant-form-item-control ant-col-xs-20 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
              Login to your account:
            </div>
            <Form
              {...formItemLayout}
              form={form}
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
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
                {...tailFormItemLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={buttonLoading}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="already ant-col-xs-20 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8">
            Don't have an account?
            <span>
              <Link to="/signup"> Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
