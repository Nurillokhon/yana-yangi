import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './card2.css'

// LEARN MORE

const Card2 = () => {
  const params = useParams();
  const [mas, setMas] = useState([]);
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

  return (
    <div>
      {mas.map((item, index) => {
        if (item.id == params.id) {
          return (
            <div className=" center g-0" key={index}>
              <div className="col-4">
                <img className="bookimg" src={item.ImgBook} alt="Book img" />
              </div>
              <div className="col-3">
                <h1 className="bookname">{item.NameBook}</h1>
                <h2 className="data">
                  Дата: <b>{item.Data}</b>
                </h2>               
                <h1 className="category">Category:{item.category}</h1>
              </div>
                <div className="col-4">
                  
                <img className="aftorimg" src={item.AftorImg} alt="Aftor" />
                <h3 className="aftor">{item.Aftor}</h3>
                  </div> 
            </div>
          );
        }
      })}
      {/* <h1>{mas[+(params.id)].NameBook}</h1> 
            <h2>{mas[+(params.id)].Aftor}</h2> */}
    </div>
  );
};

export default Card2;
