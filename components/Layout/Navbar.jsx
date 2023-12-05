import useWindowScroll from "@/hooks/useWindowScroll";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { Dropdown } from "antd";
import { FaGear, FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [user, setUser] = useState(null);

  const { pathname } = useRouter();

  const scroll = useWindowScroll();

  const items = [
    {
      label: (
        <Link href={`/profile/${user?.id}`} className="flex items-center gap-2">
          {" "}
          <FaUser />
          Profile
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link href={`/profile/${user?.id}`} className="flex items-center gap-2">
          <FaGear />
          Settings
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          onClick={() => {
            setUser(null);
            localStorage.removeItem("user");
          }}
          className="flex items-center gap-2"
        >
          {" "}
          <MdLogout />
          Logout
        </div>
      ),
      key: "3",
    },
  ];

  // We check if there are any users logged in.
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [pathname]);

  //This function for when change route close mobile navbar
  Router.events.on("routeChangeStart", () => setShowNavbar(false));
  return (
    <div
      className={`${
        scroll > 80 ? "lg:bg-blue-950/60 backdrop-blur-sm" : "lg:bg-transparent"
      } w-full absolute top-0 left-0 z-[100] bg-blue-950 `}
    >
      <div className="container   flex items-center justify-between text-white h-[80px]">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="relative w-20 h-20">
            <Image
              className="object-contain"
              fill
              src={"/assets/logo.png"}
              alt="logo"
            />
          </div>
          <div className="text-3xl mt-2">Ofenos</div>
        </Link>
        <div
          className={`${
            showNavbar ? "h-[346px] py-10" : "h-0"
          } overflow-hidden min-w-fit lg:h-fit lg:w-2/3 flex justify-between items-center w-full absolute left-0  top-[80px]  flex-col-reverse gap-4 bg-blue-950 lg:bg-transparent lg:flex-row lg:relative lg:left-auto lg:top-auto duration-300`}
        >
          <div className="flex lg:ml-8  flex-col gap-5 items-center lg:flex-row lg:gap-10 pt-2">
            <Link
              onClick={() => setShowNavbar(false)}
              className={`${
                pathname === "/" ? "text-purple-400" : "text-white"
              } duration-300 hover:text-purple-400 whitespace-nowrap `}
              href={"/"}
            >
              Home
            </Link>{" "}
            <Link
              onClick={() => setShowNavbar(false)}
              className={`${
                pathname === "/#features" ? "text-purple-400" : "text-white"
              } duration-300 hover:text-purple-400 whitespace-nowrap `}
              href={"/#features"}
            >
              Features
            </Link>{" "}
            <Link
              onClick={() => setShowNavbar(false)}
              className={`${
                pathname === "/#teams" ? "text-purple-400" : "text-white"
              } duration-300 hover:text-purple-400whitespace-nowrap `}
              href={"/#teams"}
            >
              Teams
            </Link>
            <Link
              onClick={() => setShowNavbar(false)}
              className={`${
                pathname === "/#faq" ? "text-purple-400" : "text-white"
              } duration-300 hover:text-purple-400  whitespace-nowrap`}
              href={"/#faq"}
            >
              F.A.Q{" "}
            </Link>
          </div>{" "}
          {user ? (
            <div className="relative w-10  border-purple-500 border-2  aspect-square rounded-full overflow-hidden cursor-pointer">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Image fill src="/assets/default-pp.png" alt="user" />
              </Dropdown>
            </div>
          ) : (
            <div className="flex items-center gap-5 pt-2 w-fit">
              <Link
                onClick={() => setShowNavbar(false)}
                className="hover:text-purple-400  duration-300"
                href={"/login"}
              >
                Login
              </Link>
              /
              <Link href={"/register"} className="join-btn ">
                <span>Join Us</span>
              </Link>
            </div>
          )}
        </div>
        <Button
          onClick={() => setShowNavbar(!showNavbar)}
          type="link"
          className="bg-transparent lg:hidden text-white text-4xl "
        >
          <MdMenu />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
