import React from "react";
import "./Footer.scss";
import logo from "../../Assets/Images/footerLogo.png";
import { Btn, Footerr, Nav, Orders } from "../../Data/data";
import { Context } from "../../Context/Context";
import { TextField } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
function Footer() {
  const { lan } = React.useContext(Context);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sri8m0l",
        "template_z5be2r8",
        form.current,
        "lKuCXg1pCce2hE-YE"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (e.target.user_name.value == "") {
      alert("Ismingizni yozing..!");
    } else if (e.target.user_phone.value == "") {
      alert("Telfon raqamingizni yozing..!");
    } else {
      alert(
        `${e.target.user_name.value} Qabul qilind..!  Sizga tez orada javob berishadi..!`
      );
    }
  };
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__container__left" data-aos="zoom-in">
          <img src={logo} alt="" />
          {Footerr?.map((e) => (
            <p key={e.id}>{e[`text_${lan}`]}</p>
          ))}
          <ul>
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
        <ul className="footer__container__list" data-aos="zoom-in">
          {Nav?.map((e) => (
            <li key={e.id} className="footer__container__list__item">
              <a href={e.href}>{e[`nav_${lan}`]}</a>
            </li>
          ))}
        </ul>
        <form
          className="footer__container__right"
          ref={form}
          onSubmit={sendEmail}
        >
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
            name="user_name"
            id="outlined-basic"
            label="Ismingiz"
            variant="outlined"
          />
          <TextField
            className="inp2"
            name="user_phone"
            label="Raqamingiz"
          />
          {Btn?.map((e) => (
            <button key={e.id} className="btn1" type="submit" value="Send">
              {e[`title_${lan}`]}
            </button>
          ))}
        </form>
      </div>
    </footer>
  );
}

export default Footer;
