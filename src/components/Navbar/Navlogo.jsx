import React from "react";
import navlogo from "../../assets/imgs/Logo.png";
import {  Link } from "react-router-dom";
function Navlogo() {
  return (
    <div className="navlogo">
      <Link to="/">
        <img src={navlogo} alt="" />
      </Link>
    </div>
  );
}

export default Navlogo;
