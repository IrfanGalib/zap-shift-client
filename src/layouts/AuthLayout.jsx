import React from "react";
import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <Logo />
      <div className="flex">
        <div className="flex-1">
          <Outlet />
        </div>
        <div className="flex-1 bg-[#FAFDF0] h-screen">
          <img src={AuthImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
