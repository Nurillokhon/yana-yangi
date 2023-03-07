import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import axios from "axios";
const Sign = () => {
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [Password2, setPassword2] = useState(null);
  const [Number, setNumber] = useState(null);
  const [border, setBorder] = useState();
  const [border2, setBorder2] = useState();

  const naviget = useNavigate();

  function Yuborish() {
    if (Name != null && Email != null && Password != null && Number != null) {
      if (Password == Password2) {
        axios.post("https://6407167c862956433e63966f.mockapi.io/Users", {
          name: Name,
          email: Email,
          password: Password,
          Number: Number,
        });
        setBorder2("white");
        setBorder("white");
        naviget("/login");
        toast.success("Royhatdan otingiz");
      } else {
        setBorder("white");
        setBorder2("red");
        toast.error("Parolni birhil qilib qoyn ");
      }
    } else {
      console.log("kemadi");
      setBorder("red");
      toast.error("Qil Rangli Ramkalarni Toldiring");
    }
  }

  return (
    <div className="body">
      <div className="vhods">
        <h2 className="sign">Регистрация</h2>
        <input
          className="inp1"
          type="text"
          placeholder="Введите Имию и Фамилию"
          onInput={(val) => {
            setName(val.target.value);
          }}
          style={{ border: `3px solid ${border}` }}
        />
        <br />
        <input
          className="inp1"
          type="text"
          placeholder="Введите Почту"
          onInput={(val) => {
            setEmail(val.target.value);
          }}
          style={{ border: `3px solid ${border}` }}
        />
        <input
          className="inp1"
          type="text"
          placeholder="Введите свой номер телефона"
          onInput={(val) => {
            setNumber(val.target.value);
          }}
          style={{ border: `3px solid ${border}` }}
        />
        <br />
        <input
          className="inp1"
          type="password"
          placeholder="Введите Пароль"
          onInput={(val) => {
            setPassword(val.target.value);
          }}
          style={{
            border: `3px solid ${border}`,
            border: `3px solid ${border2}`,
          }}
        />
        <br />
        <input
          className="inp1"
          type="password"
          placeholder="Введите Пароль ещё раз"
          onInput={(val) => {
            setPassword2(val.target.value);
          }}
          style={{
            border: `3px solid ${border}`,
            border: `3px solid ${border2}`,
          }}
        />
        <button className="btns" onClick={Yuborish}>
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default Sign;
