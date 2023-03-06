import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/">
      
      <img
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
      <input placeholder="serach book" className="nav_input" type="text" />
      <Link to="/like">
        <AiOutlineHeart className="heart" />
      </Link>
      <Link to="korzinka">
      
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
      <button className="nav_button">Sign In</button>
    </div>
  );
};

export default Navbar;
