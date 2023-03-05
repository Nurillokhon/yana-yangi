import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
// import { AiFillHeart } from 'react-icons/ai'


const Navbar = () => {
    return (
        <div className='section'>
            <div className="navbar py-4">
        <div>
          <div className="d-flex align-items-center main ps-4">
            <img
              width={"280px"}
              src={"https://www.linkpicture.com/q/Frame-8_1.png"}
              alt="rasm"
            />
            <div className="d-flex ms-4">
              <h5 className="px-3 hover ">Discount</h5>
              <h5 className="px-3 hover ">Catalog</h5>
              <h5 className="px-3 hover ">Order</h5>
              <h5 className="px-3 hover ">About the store</h5>
              <h5 className="px-3 hover ">Blog</h5>
            </div>
            <div className="d-flex" style={{ marginLeft: "200px" }}>
              {/* <AiFillHeart/> */}
              <h2>
                <Link to={'/like'}>
                  <AiOutlineHeart />
                </Link>
              </h2>
              <h2>
                <Link to={'/korzinka'}>
                  <SlBasket />
                </Link>
              </h2>
            </div>
            <select className="option" style={{ marginLeft: "100px" }}>
              <option value=""></option>
              <option value="uzb">Uzb</option>
              <option value="rus">Ru</option>
              <option value="eng">Eng</option>
            </select>
            <button
              style={{ backgroundColor: "rgb(225,106,0)", marginLeft: "50px" }}
              className="btn1 btn btn fw-bold text-light "
            >
              Sing in
            </button>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Navbar;
