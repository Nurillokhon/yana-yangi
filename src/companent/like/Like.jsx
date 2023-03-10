import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './like.css'


const Like = () => {
    // const massiv = JSON.parse(localStorage.getItem('count'))
    const qiymat = useSelector((state) => state);

    return (
      <div className="row g-0">
        {qiymat.data.map((item, index) => {
          if (item.status2 == false) {
            return (
              <div className="col-4">
                  <img width={200} src={item.ImgBook} alt="" />
                  <h3>{item.NameBook}</h3>
                  <h2>{item.price}</h2>
                  <b>{item.Aftor}</b>
                </div>
            );
          }
        })}
      </div>
    );
}

export default Like;
