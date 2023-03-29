import React, { useContext, useState } from "react";
import Container from "../Container/Container";
import "./Header.scss";
import Button from "@mui/material/Button";

import logo from "../../Assets/Images/Nav.png";
import { Btn, Nav } from "../../Data/data";
import { Context } from "../../Context/Context";

function Header() {
  const [language, setLanguage] = useState("uz");
  const { setLan } = useContext(Context);

  const changer = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
    setLan(e.target.value);
  };

  return (
    <div>
      <Container>
        <div
          className="header"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <div className="header-left">
            <img src={logo} alt="logo" />
          </div>
          <div className="header-right">
            {Nav?.map((e) => (
              <a key={e.id} href={e.href}>
                {e[`nav_${language}`]}
              </a>
            ))}
            <select onChange={changer} name="language" id="language">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>
            <Button variant="contained" color="success">
              {Btn?.map((e) => (
                <a key={e.id} href={e.href}>
                  {e[`title_${language}`]}
                </a>
              ))}
            </Button>
          </div>
          <div className="header-right2" style={{ display: "none" }}>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <button className="btn btn-primary" type="button">
              <i className="bi bi-list"></i>
            </button>
            <div className="offcanvas offcanvas-end">
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                >
                  {" "}
                  <select onChange={changer} name="language" id="language">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                  </select>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <a href="#about">Kompaniya haqida</a>
                <a href="#fakts">Faktlar</a>
                <a href="#product">Mahsulot</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
