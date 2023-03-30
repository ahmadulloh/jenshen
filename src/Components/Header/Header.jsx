import React, { useContext, useState, useEffect } from "react";
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

  //
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navWhite, setnavWhite] = useState("#000");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#760612") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    window.scrollY > 10 ? setnavWhite("#fff") : setnavWhite("#000");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <Container>
        <div
          className="header"
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <div className="header-left">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="header-right">
            {Nav?.map((e) => (
              <a
                key={e.id}
                href={e.href}
                style={{ color: navWhite, transition: "all 1s" }}
              >
                {e[`nav_${language}`]}
              </a>
            ))}
            <select
              onChange={changer}
              name="language"
              id="language"
              style={{ color: navWhite, transition: "all 1s" }}
            >
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
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="bi bi-list"></i>
            </button>
            <div
              className="offcanvas offcanvas-end"
              data-bs-scroll="true"
              tabIndex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                >
                  <select
                    onChange={changer}
                    name="language"
                    id="language"
                    style={{ color: navWhite, transition: "all 1s" }}
                  >
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
                <a href="#faktlar">Faktlar</a>
                <a href="#mahsulot">Mahsulot</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
