import React from "react";
import "./sign.css";
import { Link } from "react-router-dom";
const Sign = () => {
  return (
    <div className="body">
      <div className="vhods">
        <h2 className="sign">Регистрация</h2>
        <input
          className="inp1"
          type="text"
          placeholder="Введите Имию и Фамилию"
        />
        <br />
        <input className="inp1" type="text" placeholder="Введите Почту" />
        <input
          className="inp1"
          type="text"
          placeholder="Введите свой номер телефона"
        />
        <br />
        <input className="inp1" type="text" placeholder="Введите Почту" />
        <input className="inp1" type="text" placeholder="Введите Пароль" />
        <br />
        <input
          className="inp1"
          type="text"
          placeholder="Введите Пароль ещё раз"
        />
        <button className="btns">Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Sign;
