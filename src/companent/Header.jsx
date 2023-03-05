import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
// import { AiFillHeart } from 'react-icons/ai'
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <div className="section">
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
                <AiOutlineHeart />
              </h2>
              <h2>
                <SlBasket />
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
      <div className="bg_imgg">
        <div className="bg_img">
          <div className="bg-color ">
            <div
              className="container "
              style={{ paddingTop: "150px", }}
            >
              <h1 style={{ fontSize: "70px",color: "orange",padding:" 20px 0px"}}>Bookstore </h1>
              <h4 style={{ fontSize: "40px",color: "orange",paddingBottom:"10px"  }}>The World Of Books. Book is a source of knowledge</h4>
              <div className="d-flex">
                <input
                  type="text"
                  className="fw-bold fs-5 py-2 form-control inp"
                  style={{ borderRadius: "30px", color: "rgb( 76, 41, 0)" }}
                  placeholder="Search to book in the library...."
                />
                <button className="btn fw-bold fs-5 py-2 button px-4"style={{borderRadius:"30px", border:"none"}} >Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
