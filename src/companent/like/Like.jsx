import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './like.css'



const Like = () => {
    // const massiv = JSON.parse(localStorage.getItem('count'))
    const qiymat = useSelector((state) => state);

    return (
        <div>
            
               <div className='container'>
                <div className="row">
                {qiymat.data.map((item, index) => {
                    if (item.status2 == false) {
                        return (
                            <div className="col-4">
                              <div className="card card1  my-3 mx-3 text-center">
                                <img
                                  width={365}
                                  height={400}
                                  className="img"
                                  src={item.ImgBook}
                                  alt="rasm"
                                />
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
}

export default Like;
