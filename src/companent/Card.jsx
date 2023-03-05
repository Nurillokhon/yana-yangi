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
      .get("https://api.npoint.io/4ddb515a1fbdfe11397c")
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

    current[index].status = !current[index].status;
    setMas(current);
  }

  function korz(index) {
    let current = [...mas];

    current[index].status = !current[index].status;
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
                  <Link to={`/card2/${item.id}`}>
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

                  <h5>{item.grade} grd</h5>
                  <h6>{item.NameBook}</h6>
                  {/* <p>{item.Aftor}</p> */}
                  <div className="d-flex align-items-center ">
                    <div>
                      <button
                        onClick={() => korz(index)}
                        style={{
                          backgroundColor: "rgb(225,106,0)"
                        }}
                        className="btn1 btn btn text-light my-1"
                      >
                        Korzinka
                      </button>

                      <Link to={`/card2/${item.id}`}>
                        <button
                          style={{
                            backgroundColor: "rgb(225,106,0)"
                          }}
                          className="btn1 btn btn  text-light"
                        >
                          Learn More
                        </button>
                      </Link>
                    </div>
                    <h3 className="like " onClick={() => like(index)}>
                    {item.status == true ? <AiOutlineHeart /> : <AiFillHeart />}
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
