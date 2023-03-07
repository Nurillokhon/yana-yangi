import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const qiymat = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(qiymat.Auth);
  function Run(val) {
    dispatch({ type: "search", payload: { name: val } });
    console.log(qiymat, "qiymat");
  }
  const [salom, setSalom] = useState();
  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("User"));
    setSalom(name);
  }, []);

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
        <li>Stoc</li>
        <li>
          <a href="#cotolog">Catalog</a>{" "}
        </li>
        <li>Deleviriy</li>
        <li>About store</li>
        <li>Blog</li>
      </ul>
      <input
        placeholder="serach book"
        onInput={(val) => Run(val.target.value)}
        className="nav_input"
        type="text"
      />
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
      {salom ? 
        <>
        <h2 style={{color:"orange"}}>Salom {salom.name} 🖐</h2>
        </>
       : 
        <>
          <Link to="/login">
            <button className="nav_button">Sign In</button>
          </Link>
        </>
      }
    </div>
  );
};

export default Navbar;
