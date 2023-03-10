import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './like.css'


const Like = () => {
    // const massiv = JSON.parse(localStorage.getItem('count'))
    const qiymat = useSelector((state) => state);

    return (
     <div className="container">
       <div className="row g-0">
        {qiymat.data.map((item, index) => {
          if (item.status2 == false) {
            return (
              <div className="col col_main shadow p-3 m-4">
                  <img width={200}  src={item.ImgBook} alt="rasm" />
                  <div><h3>{item.NameBook}</h3>
                  <h2>{item.price}</h2>
                  <b>{item.Aftor}</b></div>
                </div>
            );
          }
        })}
      </div>
     </div>
    );
}

export default Like;
