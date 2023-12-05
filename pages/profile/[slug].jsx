import { Button, Form, Input, Modal, message } from "antd";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";
import React, { useEffect, useState } from "react";
import { AiFillEdit, AiOutlineLoading3Quarters } from "react-icons/ai";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const router = useRouter();

  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/");
    } else if (
      router.query.slug &&
      JSON.parse(localStorage.getItem("user")).id != router.query.slug
    ) {
      router.push("/");
    } else {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [router.query.slug]);

  const onFinish = async (values) => {
    setIsSubmiting(true);
    const comparePassword = await bcrypt.compareSync(
      values.password,
      user?.password
    );
    if (!comparePassword) {
      message.error("Incorrect password!");
      setTimeout(() => {
        setIsSubmiting(false);
      }, 1000);
      return;
    }
    if (!values?.newpassword || values?.newpassword?.trim() === "") {
      let usersList = JSON.parse(localStorage.getItem("users")) || [];
      let user = usersList.find((i) => i.id === router?.query?.slug);

      const newUser = {
        id: user.id,
        firstname: values.firstname,
        lastname: values.lastname,
        email: user.email,
        password: user.password,
      };
      const filteredList = await usersList.filter(
        (i) => i.id !== router?.query?.slug
      );

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("users", JSON.stringify([...filteredList, newUser]));
      setIsModalOpen(false);
      setUser(newUser);
      form.setFieldsValue({ password: "" });
      message.success("Transaction successful");
    } else {
      let usersList = JSON.parse(localStorage.getItem("users")) || [];
      let user = usersList.find((i) => i.id === router?.query?.slug);
      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = await bcrypt.hashSync(values.newpassword, salt);
      const newUser = {
        id: user.id,
        firstname: values.firstname,
        lastname: values.lastname,
        email: user.email,
        password: hashedPassword,
      };
      const filteredList = await usersList.filter(
        (i) => i.id !== router?.query?.slug
      );

      localStorage.setItem("user", JSON.stringify(newUser));
      localStorage.setItem("users", JSON.stringify([...filteredList, newUser]));
      setIsModalOpen(false);
      setUser(newUser);
      form.setFieldsValue({ password: "", newpassword: "" });
      message.success("Transaction successful");
    }
    setTimeout(() => {
      setIsSubmiting(false);
    }, 1000);
  };
  return (
    <div className="min-h-screen w-full  relative ">
      <Head>
        <title>{`Profile ${user?.firstname}`}</title>
      </Head>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        <div>
          <div className="text-center text-xl font-semibold mb-5">
            Edit Profile
          </div>
          <Form
            form={form}
            layout="vertical"
            name="basic"
            initialValues={{
              firstname: user?.firstname,
              lastname: user?.lastname,
              email: user?.email,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="flex gap-5 w-full">
              <Form.Item
                label="First Name"
                name="firstname"
                className="w-full"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                className="w-full"
                label="Last name "
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>{" "}
            <Form.Item
              label="New Password (Fill it in only when you want to change your password)."
              name="newpassword"
              rules={[
                {
                  message: "Please input your new password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item className="w-full flex justify-end">
              <Button
                disabled={isSubmiting}
                className=" bg-blue-600 disabled:bg-blue-300 flex items-center justify-center"
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
          </Form>
        </div>
      </Modal>
      <div className="min-h-screen w-full fixed top-0 left-0 bg-black/30"></div>
      <div className=" container pt-[90px] pb-[10px] text-white relative z-40 flex items-center justify-center">
        <div className="flex flex-col bg-main-lightBlue w-full rounded-lg overflow-hidden ">
          <div className="aspect-[16/6] border-4 border-purple-600 rounded-b-lg  relative w-full bg-center bg-cover bg-[url('/assets/profile-bg.webp')]">
            <div className="w-full h-full bg-black/10"></div>
            <div className="absolute z-40 left-1/2 top-full border-purple-600 border-4  -translate-y-1/2 -translate-x-1/2 w-[120px] aspect-square rounded-full overflow-hidden">
              <Image fill src={"/assets/default-pp.png"} alt="user" />
            </div>
          </div>
          <div className="bg-main-lightBlue p-3 pt-20  relative">
            <div
              onClick={showModal}
              className="absolute top-5 right-5 flex items-center gap-2 cursor-pointer"
            >
              {" "}
              <AiFillEdit /> Edit
            </div>
            <div className="flex items-center justify-center">
              {user?.firstname} {user?.lastname}
            </div>
            <div className="flex items-center justify-center   font-semibold">
              <span className="text-blue-500">@</span> {user?.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
