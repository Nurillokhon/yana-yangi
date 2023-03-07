import React from 'react';
import { useDispatch, useSelector } from 'react-redux';



const Like = () => {
    // const massiv = JSON.parse(localStorage.getItem('count'))
    const qiymat = useSelector((state) => state);

    return (
        <div>
            {
                qiymat.data.map((item, index) => {
                    if (item.status2 == false) {
                        return (
                            <div className='d-flex align-items-center'>
                                <img width={200} src={item.ImgBook} alt="" />
                            <h1>{item.NameBook}</h1>
                            </div>
                        )
                    }
                    
                })
            }
        </div>
    );
}

export default Like;
