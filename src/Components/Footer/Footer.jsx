import React from "react";
import "./Footer.scss";
import logo from "../../Assets/Images/footerLogo.png";
import { Btn, Footerr, Nav, Orders } from "../../Data/data";
import { Context } from "../../Context/Context";
import {TextField } from "@mui/material";
function Footer() {
  const { lan } = React.useContext(Context);
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__container__left"  data-aos="zoom-in">
          <img src={logo} alt="" />
          {Footerr?.map((e) => (
            <p key={e.id}>{e[`text_${lan}`]}</p>
          ))}
          <ul >
            <li>
              <i className="bi bi-telegram"></i>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
          </ul>
        </div>
        <ul
          className="footer__container__list"  data-aos="zoom-in"
        >
          {Nav?.map((e) => (
            <li key={e.id} className="footer__container__list__item">
              <a href={e.href}>{e[`nav_${lan}`]}</a>
            </li>
          ))}
        </ul>
        <div className="footer__container__right">
          {Orders?.map((e) => (
            <form
              key={e.id}
              className="footer__container__right__form"
              action="#"
            >
              <h5 key={e.id}>{e[`text_${lan}`]}</h5>
            </form>
          ))}
          <TextField
            className="inp1"
            name="ism"
            id="outlined-basic"
            label="Ismingiz"
            variant="outlined"
            data-aos="zoom-in"
          />
          <TextField className="inp2" name="raqam" label="Raqamingiz"  data-aos="zoom-in"/>
          {Btn?.map((e) => (
            <button key={e.id} className="btn1">
              {e[`title_${lan}`]}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
