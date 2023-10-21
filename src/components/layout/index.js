import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
