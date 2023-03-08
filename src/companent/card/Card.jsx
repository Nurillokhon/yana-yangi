import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import './card.css'
const Card = () => {
  const qiymat = useSelector((state) => state);
  const [mas, setMas] = useState([]);
  const dispatch = useDispatch();
  const massiv = JSON.parse(localStorage.getItem("count"));

  useEffect(() => {
    axios
      .get("https://api.npoint.io/f6b5513c4c86229c5195")
      .then((ress) => {
        setMas(ress.data);
        dispatch({ type: "added2", payload: { mass: ress.data } });
        localStorage.setItem("count1", JSON.stringify(ress.data));
        localStorage.setItem("count", JSON.stringify(ress.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function like(index) {
    if (qiymat.data.length > 0) {
      let current = [...qiymat.data];

      current[index].status2 = !current[index].status2;
      setMas(current);
      localStorage.setItem("count", JSON.stringify(current));
    } else {
      let current = [...mas];

      current[index].status2 = !current[index].status2;
      setMas(current);
      localStorage.setItem("count", JSON.stringify(current));
    }
  }

  // function korz(index) {
  //   if (qiymat.data.length > 0) {
  //     let current = [...qiymat.data];
  //     current[index].status = !current[index].status;
  //     localStorage.setItem("count", JSON.stringify(current));
  //   } else {
  //     let current = [...mas];
  //     current[index].status = !current[index].status;
  //     localStorage.setItem("count", JSON.stringify(current));
  //   }
  // }

  // if (massiv != null && qiymat.data.length > 0) {
    // return (
    //   <div className="d-flex justify-content-center">
    //     <div className="d-flex mainnn">
    //       {qiymat.data.map((item, index) => {
    //         return (
    //           <div>
    //             <div
    //               className=" mx-3 card p-3 shadow "
    //               style={{ border: "none" }}
    //             >
    //               <Link to={`/more/${item.id}/${item.NameBook}`}>
    //                 <img
    //                   className="img_book"
    //                   src={
    //                     item.ImgBook
    //                       ? item.ImgBook
    //                       : "https://waynesville.otc.edu/media/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"
    //                   }
    //                   alt="rasm"
    //                 />
    //               </Link>

    //               <h6>{item.NameBook}</h6>
    //               <div className="d-flex align-items-center ">
    //                 <div>
    //                   {/* <button
    //                     onClick={() => korz(index)}
    //                     style={{ backgroundColor: "rgb(225,106,0)" }}
    //                     className="btn1 fw-bold btn btn text-light my-1"
    //                   >
    //                     Korzinka
    //                   </button> */}

    //                   <Link to={`/more/${item.id}/${item.NameBook}`}>
    //                     <button className="btn1">
    //                       Подробнее{" "}
    //                       <b>
    //                         <AiOutlineArrowRight />
    //                       </b>
    //                     </button>
    //                   </Link>
    //                   <BsFillStarFill className="star" />
    //                   <b className="grade">{item.grade}</b>
    //                 </div>
    //                 <h3 className="like " onClick={() => like(index)}>
    //                   {item.status2 == true ? (
    //                     <AiOutlineHeart />
    //                   ) : (
    //                     <AiFillHeart />
    //                   )}
    //                 </h3>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // );
  // } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="d-flex mainnn">
          {mas.map((item, index) => {
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

                  {/* <h5 className="grade">{item.grade}%</h5> */}
                  <h6>{item.NameBook}</h6>
                  {/* <p>{item.Aftor}</p> */}
                  <div className="d-flex align-items-center ">
                    <div>
                      {/* <button
                        onClick={() => korz(index)}
                        style={{
                          backgroundColor: "rgb(225,106,0)",
                        }}
                        className="btn1 fw-bold btn btn text-light my-1"
                      >
                        Korzinka
                      </button> */}

                      <Link to={`/more/${item.id}/${item.NameBook}`}>
                        <button
                          style={{
                            backgroundColor: "rgb(225,106,0)",
                          }}
                          className="btn1 text-light"
                        >
                          Подробнее{" "}
                          <b>
                            <AiOutlineArrowRight />{" "}
                          </b>
                        </button>
                      </Link>
                      <BsFillStarFill className="star" />
                      <b className="grade">{item.grade}</b>
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
  // }
};

export default Card;
