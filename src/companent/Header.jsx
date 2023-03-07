import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Card from "./Card";
import Katalog from "./Katalog";

const Header = () => {
  const qiymat = useSelector((state) => state);
  const dispatch = useDispatch();
  const [mas, setMas] = useState([]);
  useEffect(() => {
    axios.get("https://api.npoint.io/f6b5513c4c86229c5195")
      .then((ress) => {
        setMas(ress.data)
        // dispatch({ type: 'added2', payload: { mass: ress.data } })
        localStorage.setItem("count1", JSON.stringify(ress.data));
        // localStorage.setItem("count", JSON.stringify(ress.data));
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Fan(){
    let nimadir = mas.filter(item=>{
      return item.category.includes("Fantastika")
    })
    console.log(nimadir,'bu nimadir');
    dispatch({ type: "Fantastik", payload: { name: nimadir } });
  }

  function Det(){
    let nimadir = mas.filter(item=>{
      return item.category.includes("Detektiv")
    })
    dispatch({ type: "Detektiv", payload: { name: nimadir } });
  }

  function Self(){
    let nimadir = mas.filter(item=>{
      return item.category.includes("Rivojlanish")
    })
    dispatch({ type: "Rivojlanish", payload: { name: nimadir } });
  }

  function boshqa(){
    let nimadir = mas.filter(item=>{
      return item.category.includes("Boshqa")
    })
    dispatch({ type: "Boshqa", payload: { name: nimadir } });
  }
  
  return (
      <>
        <div className={(qiymat.data.length == 11)?'d-block':'d-none'}>
          <div>
            <div className="row row1 g-0  align-item-center">
              <div className="col-6  col1">
                <h1 className="fw-bold">Bookstore</h1>
                <h6>The World Of Books. Book is a source of knowledge</h6>
                <h6>In our store you can find a book for every taste. <br /> A large assortment.  Pleasant prices. Interesting <br /> stories.</h6>
              </div>
              <div className="col-6">
                <img src="https://www.linkpicture.com/q/image-1_186.png" alt="rasm" />
              </div>
            </div>

          </div>
          <div style={{ marginTop: "150px", }} className="d-flex justify-content-around align-items-center py-2">
            <h3 className="fw-bold ">Hot arrivals</h3>
            <div className="d-flex">
              <h6 className="px-4 hover1 hots" onClick={()=>Fan()}>Fantastic</h6>
              <h6 className="px-4 hover1 hots" onClick={()=>Self()}>Self-development</h6>
              <h6 className="px-4 hover1 hots" onClick={()=>Det()}>Detectives</h6>
              <h6 className="px-4 hover1 hots">Baby</h6>
              <h6 className="px-4 hover1 hots">Audiobooks</h6>
              <h6 className="px-4 hover1 hots" onClick={()=>boshqa()}>Other</h6>
            </div>
          </div>
          <div>
          </div>
        </div>
        <Card/>
        <Katalog/>
      </>
    );
    // }else{
    //   console.log('ishlamadi');
    // }
    
}

export default Header;
