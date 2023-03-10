import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Korzinka = () => {
  // const massiv = JSON.parse(localStorage.getItem("count"));
  const qiymat = useSelector((state) => state);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        <b>Korzinka</b>
      </h1>
      <div className="row">
        {qiymat.data.map((item, index) => {
          if (item.status == false) {
            return (
              <div className=" col col_main shadow m-3 d-flex align-items-center">
                <img width={200} src={item.ImgBook} alt="rasm" />
                <h1 className="ps-5">{item.NameBook}</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Korzinka;
