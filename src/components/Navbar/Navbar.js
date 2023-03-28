import React from "react";
import "./Navbar.css";
import Layout from "./Layout";
import Navlogo from "./Navlogo";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="df">
          <Navlogo />
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
