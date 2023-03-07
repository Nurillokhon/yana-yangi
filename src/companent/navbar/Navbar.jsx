import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const qiymat = useSelector((state) => state);
  const dispatch = useDispatch();
  const [mas, setMas] = useState([]);
  const ism = JSON.parse(localStorage.getItem('name'))

  useEffect(() => {
    axios.get("https://api.npoint.io/f6b5513c4c86229c5195")
      .then((ress) => {
        setMas(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Run(val) {
    let nimadir = mas.filter(item => {
      return item.NameBook.toLowerCase().includes(val.toLowerCase())
    })
    dispatch({ type: "search", payload: { name: nimadir, val: val } });
  }

  function bos() {
    console.log(ism[0].name,'ism');
    dispatch({ type: "hamma" });
  }

  return (
    <div className="nav">
      <Link to="/">

        <img onClick={() => bos()}
          className="nav_img"
          src="https://st2.depositphotos.com/3573725/6541/v/950/depositphotos_65413421-stock-illustration-book-logo.jpg"
          alt="Logo"
        />
      </Link>
      <ul className="nav_ul">
        <li>Акции</li>
        <li><a href="#cotolog">Каталог</a> </li>
        <li>Доставка</li>
        <li>О магазине</li>
        <li>Блог</li>
      </ul>
      <input placeholder="serach book" onInput={(val) => Run(val.target.value)} className="nav_input" type="text" />
      <Link to="/like">
        <AiOutlineHeart className="heart" />
      </Link>
      <Link to="/korzinka">
        <AiOutlineShoppingCart className="cart" />
      </Link>
      <select className="nav_select" name="" id="">
        <option className="opt1" value="">
          UZB
        </option>
        <option className="opt2" value="">
          RU
        </option>
        <option className="opt3" value="">
          ENG
        </option>
      </select>
      <div>
        {/* <div className={(ism.length >0)?'d-none':'d-block'}> */}
          <Link to="/login">
            <button className="nav_button">Sign In</button>
          </Link>
        {/* </div> */}
        {/* <div className={(ism.length>0)?'d-block':'d-none'}>
             <h1>{
              // ism[0].name
              }</h1>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
