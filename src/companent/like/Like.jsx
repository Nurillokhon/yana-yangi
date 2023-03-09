import React from "react";
import './like.css'

const Like = () => {
  const massiv = JSON.parse(localStorage.getItem("count"));

  return (
    <div>
            <div className="container">
              <div className="row">
      {massiv.map((item, index) => {
        if (item.status2 == false) {
          return (
                <div className="col-4">
                  <div className="card  my-3 mx-3 text-center">
                    <img width={364} height={400} className='img' src={item.ImgBook} alt="" />
                    <h4 className="p-3">{item.NameBook}</h4>
                  </div>
                </div>
          );
        }
    })}
    </div>
  </div>
    </div>
  );
};

export default Like;
