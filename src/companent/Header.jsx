import React from "react";

const Header = () => {
  return (
    <div className="section">
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
