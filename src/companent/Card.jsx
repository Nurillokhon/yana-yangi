import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
const Card = () => {
  const [mas, setMas] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/f6b5513c4c86229c5195")
      .then((ress) => {
        console.log(ress.data);
        setMas(ress.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function like(index) {
    let current = [...mas];

    current[index].status2 = !current[index].status2;
    setMas(current);
    localStorage.setItem("count", JSON.stringify(current));
  }

  function korz(index) {
    let current = [...mas];
    current[index].status = !current[index].status;
    localStorage.setItem("count", JSON.stringify(current));
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex mainnn">
        {mas &&
          mas.map((item, index) => {
            return (
              <div>
                <div
                  className=" mx-3 card p-3 shadow "
                  style={{ border: "none" }}
                >
                  <Link to={`/more/${item.id}/${item.NameBook}`}>
                    <img
                      className="img_book"
                      src={
                        item.ImgBook
                          ? item.ImgBook
                          : "https://waynesville.otc.edu/media/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
                      }
                      alt="rasm"
                    />
                  </Link>

                  <h5 className="grade">{item.grade}%</h5>
                  <h6>{item.NameBook}</h6>
                  {/* <p>{item.Aftor}</p> */}
                  <div className="d-flex align-items-center ">
                    <div>
                      <button
                        onClick={() => korz(index)}
                        style={{
                          backgroundColor: "rgb(225,106,0)",
                        }}
                        className="btn1 fw-bold btn btn text-light my-1"
                      >
                        Korzinka
                      </button>

                      <Link to={`/more/${item.id}/${item.NameBook}`}>
                        <button
                          style={{
                            backgroundColor: "rgb(225,106,0)",
                          }}
                          className="btn1 btn btn fw-bold  text-light"
                        >
                          Learn More
                        </button>
                      </Link>
                    </div>
                    <h3 className="like " onClick={() => like(index)}>
                      {item.status2 == true ? (
                        <AiOutlineHeart />
                      ) : (
                        <AiFillHeart />
                      )}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
