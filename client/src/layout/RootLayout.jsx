import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-[calc(100vh-275px)] ">
        <Outlet />
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
