import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./card2.css";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";
import Raiting from "../raiting/Raiting";
// LEARN MORE

const Card2 = () => {
  const params = useParams();
  const [mas, setMas] = useState([]);
  const qiymat = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/f6b5513c4c86229c5195")
      .then((ress) => {
        setMas(ress.data);
        console.log(ress.data, "ress");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function korz(index) {
    if (qiymat.data.length > 0) {
      let current = [...qiymat.data];
      current[index].status = !current[index].status;
      localStorage.setItem("count", JSON.stringify(current));
    } else {
      let current = [...mas];
      current[index].status = !current[index].status;
      localStorage.setItem("count", JSON.stringify(current));
    }
  }

  function MyApp() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
      enqueueSnackbar("I love snacks.");
    };
  }

  return (
    <div>
      {qiymat.data.map((item, index) => {
        if (item.id == params.id) {
          return (
            <div className="row row2 g-0" key={index}>
              <div className="col-6 ">
                <img className="img1" src={item.ImgBook} alt="Book Img" />
              </div>
              <div className="col-6">
                <h1 className="name">
                  <b>{item.NameBook}</b>
                </h1>
                <h2>{item.price} so'm</h2>
                {/* <h3 style={{ color: "black", marginTop: "50px" }}>Рейтинг:</h3> */}
                <Raiting />
                <ul>
                  <li>
                    <AiOutlineCheckCircle className="galochka" />
                    <b>FREE RETURN</b>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className="galochka" />
                    <b>SUPPLIED WITH PACKAGE</b>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className="galochka" />
                    <b>CHAT WITH US 24H</b>
                  </li>
                  <li>
                    <AiOutlineCheckCircle className="galochka" />
                    <b>WORKING HOURS 24/7</b>
                  </li>
                </ul>
                <button className="btn2">
                  <b>BUY NOW</b>
                </button>
                <button className="btn3" onClick={() => korz(index)}>
                  <b>ADD TO BASKET</b>
                </button>

                <SnackbarProvider maxSnack={3}>
                  <MyApp />
                </SnackbarProvider>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card2;
