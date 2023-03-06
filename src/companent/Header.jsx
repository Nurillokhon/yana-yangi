import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Header = () => {
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
    <div>
      <div>
        <div className="row row1 g-0  align-item-center">
          <div className="col-6  col1">
            <h1 className="fw-bold">Bookstore</h1>
            <h6>The World Of Books. Book is a source of knowledge</h6>
            <h6>
              In our store you can find a book for every taste. <br /> A large
              assortment. Pleasant prices. Interesting <br /> stories.
            </h6>
          </div>
          <div className="col-6">
            <img
              src="https://www.linkpicture.com/q/image-1_186.png"
              alt="rasm"
            />
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "150px" }}
        className="d-flex justify-content-around align-items-center py-2"
      >
        <h3 className="fw-bold ">Hot arrivals</h3>
        <div className="d-flex">
          <h6 className="px-4 hover1 hots">Fantastic</h6>
          <h6 className="px-4 hover1 hots">Self-development</h6>
          <h6 className="px-4 hover1 hots">Detectives</h6>
          <h6 className="px-4 hover1 hots">Baby</h6>
          <h6 className="px-4 hover1 hots">Audiobooks</h6>
          <h6 className="px-4 hover1 hots">Other</h6>
        </div>
      </div>
      <div></div>
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
      <div className="container text-center">
        <h2 className="fw-bold my-5" id="cotolog">
          Katalog
        </h2>
        <div className="row cat">
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Kitoblar
          </div>
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Electronniy kitob
          </div>
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Audio kitob
          </div>
        </div>
        <div className="row cat">
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Kitoblar
          </div>
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Electronniy kitob
          </div>
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Audio kitob
          </div>
        </div>
        <div className="row cat">
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Kitoblar
          </div>
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Electronniy kitob
          </div>
          <div className="card col p-4 m-3 shadow fw-bold text-secondary">
            Audio kitob
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
