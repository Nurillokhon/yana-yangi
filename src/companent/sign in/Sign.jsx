// import React, { useState, useEffect } from "react";
// import "./login.css";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, serPassword] = useState("");
//   const [emailDirty, setEmailDirty] = useState(false);
//   const [passwordDirty, setPasswordDirty] = useState(false);
//   const [emailError, setEmailError] = useState("Емейл не может быть пустым");
//   const [passwordError, setPasswordError] = useState(
//     "Пароль не может быть пустым"
//   );
//   const [formValid, setFormValid] = useState(false);
//   useEffect(() => {
//     if (emailError || passwordError) {
//       setFormValid(false);
//     } else {
//       setFormValid(true);
//     }
//   }, [emailError, passwordError]);

//   const emailHandler = (e) => {
//     setEmail(e.target.value);
//     const re =
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!re.test(String(e.target.value).toLowerCase())) {
//       setEmailError("емейл не корректен");
//     } else {
//       setEmailError("");
//     }
//   };

//   const passwordHandler = (e) => {
//     serPassword(e.target.value);
//     if (e.target.value.length < 3 || e.target.value.length > 8) {
//       setPasswordError("Пароль должен быть длинее 3 или менее 8");
//       if (!e.target.value) {
//         setPasswordError("Пароль не может быть пустым");
//       }
//     } else {
//       setPasswordError("");
//     }
//   };

//   const blurHandler = (e) => {
//     switch (e.target.name) {
//       case "email":
//         setEmailDirty(true);
//         break;
//       case "passwor":
//         setPasswordDirty(true);
//         break;
//     }
//   };
//   return (
//     <div>
//       <h1 className="regis">Регистрация</h1>
//       {emailDirty && emailError && <div className="emailerr">{emailError}</div>}
//       <input
//         onChange={(e) => emailHandler(e)}
//         onBlur={(e) => blurHandler(e)}
//         name="email"
//         type="text"
//         placeholder="Enter your email"
//         value={email}
//       />
//       {passwordDirty && passwordError && (
//         <div className="emailerr">{passwordError}</div>
//       )}
//       <input
//         onChange={(e) => passwordHandler(e)}
//         onBlur={(e) => blurHandler(e)}
//         name="password"
//         type="text"
//         placeholder="Enter your password"
//         value={password}
//       />
//       <button disabled={!formValid} type="submit">
//         Registration
//       </button>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./sign.css";
import { toast } from "react-toastify";

const Login = () => {
  const [val1, setVal1] = useState(null);
  const [val2, setVal2] = useState(null);
  const [Loading, setLoading] = useState(false);
  const naviget = useNavigate();

  function Tekshirish() {
    setLoading(true);
    axios("https://6407167c862956433e63966f.mockapi.io/Users")
      .then((res) => {
        console.log(res.data);
        let result = res.data.find(
          (item) => item.password == val2 && item.email == val1
        );
        if (result) {
          toast.success("Успешно");
          naviget("/");
          localStorage.setItem("User", JSON.stringify(result));
          setLoading(false);
        } else {
          toast.error("Неправильный почта либо пароль");
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="body">
      <div className="vhod">
        <h2 className="sign">Вход</h2>
        <input
          onInput={(val) => setVal1(val.target.value)}
          className="inp1"
          type="text"
          placeholder="Введите почту"
        />
        <br />
        <input
          onInput={(val) => setVal2(val.target.value)}
          className="inp1"
          type="text"
          placeholder="Введите пароль"
        />
        <p className="zabil">Забыли свой пароль?</p>
        <button onClick={Tekshirish} className="btns">
          {Loading ? "Загрузка" : "Войти в профиль"}
        </button>
        <p className="zabil">
          Ещё не прошли регитсрацию?{" "}
          <Link to="/sign" style={{ textDecoration: "none", color: "orange" }}>
            <span>Зарегистрироваться</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
