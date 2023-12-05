import { Button, Checkbox, Form, Input, message } from "antd";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";
import { uid } from "uid";
const Register = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      router.push("/");
    }
  }, []);

  // In this function saving data localStorage
  const onFinish = async (values) => {
    setIsSubmiting(true);
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      const user = await users.find((e) => e.email === values.email);
      if (user) {
        setTimeout(() => {
          message.error("This email is already registered !");
          setIsSubmiting(false);
        }, 1000);
        return;
      }
    }

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(values.password, salt);

    const newUser = {
      id: uid(),
      firstname: values.firstName,
      lastname: values.lastName,
      email: values.email,
      password: hashedPassword,
    };
    localStorage.setItem("users", JSON.stringify([...(users || []), newUser]));
    localStorage.setItem("user", JSON.stringify(newUser));
    setTimeout(() => {
      setIsSubmiting(false);
      form.resetFields();
      router.push("/");
    }, 1000);
  };

  const [form] = Form.useForm();

  //This function checking input value if value is empty focus reset
  const handleValueExist = (e, whichInput) => {
    if (whichInput === "email") {
      if (e.target.value === "") {
        setEmailFocus(false);
      }
    }
    if (whichInput === "password") {
      if (e.target.value === "") {
        setPasswordFocus(false);
      }
    }
    if (whichInput === "firstName") {
      if (e.target.value === "") {
        setFirstName(false);
      }
    }
    if (whichInput === "lastName") {
      if (e.target.value === "") {
        setLastName(false);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url('/assets/auth.jpg')] relative ">
      <Head>
        <title>Register</title>
      </Head>
      <div className="min-h-screen w-full fixed top-0 left-0 bg-black/30"></div>
      <div className="min-h-screen container pt-[90px] pb-[10px] text-white relative z-40 flex items-center justify-center">
        <div className="backdrop-blur-lg py-7 px-10 rounded-lg border border-white">
          <div className="text-white text-2xl font-semibold text-center mb-8">
            Register
          </div>
          <Form
            form={form}
            className="flex flex-col gap-4"
            name="basic"
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="relative h-fit">
              <Form.Item
                className="relative"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input
                  onFocus={() => setFirstName(true)}
                  onBlur={(e) => handleValueExist(e, "firstName")}
                  type="text"
                  className="bg-transparent  z-10 px-1 text-white !outline-none focus:shadow-none  border-t-0 border-x-0 rounded-none border-b-2 border-white"
                />
              </Form.Item>
              <div
                className={`${
                  firstName
                    ? "-top-2 left-1 scale-105"
                    : "top-4 left-2 scale-95"
                } absolute  duration-300  text-white -translate-y-1/2`}
              >
                First Name
              </div>
            </div>
            <div className="relative h-fit">
              <Form.Item
                className="relative"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input
                  onFocus={() => setLastName(true)}
                  onBlur={(e) => handleValueExist(e, "lastName")}
                  type="text"
                  className="bg-transparent px-1 z-10 text-white !outline-none focus:shadow-none  border-t-0 border-x-0 rounded-none border-b-2 border-white"
                />
              </Form.Item>
              <div
                className={`${
                  lastName ? "-top-2 left-1 scale-105" : "top-4 left-2 scale-95"
                } absolute  duration-300  text-white -translate-y-1/2 `}
              >
                Last Name
              </div>
            </div>
            <div className="relative h-fit">
              <Form.Item
                className="relative"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  onFocus={() => setEmailFocus(true)}
                  onBlur={(e) => handleValueExist(e, "email")}
                  type="email"
                  className="bg-transparent px-1  z-10 text-white !outline-none focus:shadow-none  border-t-0 border-x-0 rounded-none border-b-2 border-white"
                />
              </Form.Item>
              <div
                className={`${
                  emailFocus
                    ? "-top-2 left-1 scale-105"
                    : "top-4 left-2 scale-95"
                } absolute  duration-300  text-white -translate-y-1/2`}
              >
                Email
              </div>
            </div>

            <div className="relative h-fit">
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    min: 8,
                    message: "Please input your password min 8 lenght!",
                  },
                ]}
                className="relative"
              >
                <Input.Password
                  onFocus={() => setPasswordFocus(true)}
                  onBlur={(e) => handleValueExist(e, "password")}
                  iconRender={(visible) => (
                    <Button size="small" className=" " type="link">
                      {visible ? (
                        <AiFillEye className="cursor-pointer relative z-50 text-white" />
                      ) : (
                        <AiFillEyeInvisible className="cursor-pointer relative z-50 text-white" />
                      )}
                    </Button>
                  )}
                  className="bg-transparent  z-10 px-1 auth-password-input text-white  focus:bg-red-300 border-t-0 border-x-0 rounded-none border-b-2 border-white"
                />
              </Form.Item>
              <div
                className={`${
                  passwordFocus
                    ? "-top-2 left-1 scale-105"
                    : "top-4 left-2 scale-95"
                } absolute  duration-300  text-white -translate-y-1/2`}
              >
                Password
              </div>
            </div>
            <Form.Item
              className="select-none"
              name="remember"
              valuePropName="checked"
            >
              <Checkbox className="text-white">Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                disabled={isSubmiting}
                className="bg-white w-full disabled:bg-blue-300  flex items-center justify-center font-semibold rounded-full text-black"
                type="primary"
                htmlType="submit"
              >
                {isSubmiting ? (
                  <AiOutlineLoading3Quarters className="animate-spin text-white text-xl" />
                ) : (
                  "Register"
                )}
              </Button>
            </Form.Item>
            <div className="text-white">
              You have an account ?{" "}
              <Link className="text-blue-500 underline" href={"/login"}>
                Login your account!
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
