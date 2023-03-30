import { TextField } from "@mui/material";
import React from "react";
import karnay from "../../Assets/Images/karnay.png";
import { Context } from "../../Context/Context";
import { Btn, Orders } from "../../Data/data";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Buyurtma.scss";
function Buyurtma() {
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
    <div className="buyurtma" id="buyurtma">
      <div className="buyurtma__container container">
        <div className="buyurtma__container__left">
          <form action="#" ref={form} onSubmit={sendEmail}>
            {Orders?.map((e) => (
              <h2 key={e.id}>{e[`title_${lan}`]}</h2>
            ))}
            {Orders?.map((e) => (
              <p key={e.id}>{e[`text_${lan}`]}</p>
            ))}
            <TextField
              id="name"
              label="Ismingiz"
              variant="outlined"
              type="text"
              name="user_name"
            />
            <TextField
              label="Raqamingiz"
              id="outlined-start-adornment"
              sx={{ m: 3 }}
              name="user_phone"
            />
            {Btn?.map((e) => (
              <button
                key={e.id}
                className="buyurtma__container__left__btn"
                type="submit"
                value="Send"
              >
                {e[`title_${lan}`]}
              </button>
            ))}
          </form>
        </div>
        <div className="buyurtma__container__right">
          {Orders?.map((e) => (
            <ul key={e.id}>
              <li className="item1">
                {e.numb?.map((j) => (
                  <h5 key={j.id}>{e[`sale_${lan}`]}</h5>
                ))}
              </li>
              <li className="item2">
                {e.numb?.map((k) => (
                  <h3 key={k.id}>{k.def}</h3>
                ))}
              </li>
              <li className="item3">
                {e.numb?.map((q) => (
                  <h2 key={e.id}>{q.dis}</h2>
                ))}
              </li>
              <li className="item4">
                <span>
                  {e.numb?.map((l) => (
                    <h6 key={e.id}>{e[`benefit_${lan}`]}</h6>
                  ))}
                  {e.numb?.map((w) => (
                    <h4 key={e.id}>{w.ben}</h4>
                  ))}
                </span>
              </li>
            </ul>
          ))}
          <img className="karnay" src={karnay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Buyurtma;
