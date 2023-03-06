import React from 'react';



const Like = () => {
    const massiv = JSON.parse(localStorage.getItem('count'))

    return (
        <div>
            {
                massiv.map((item, index) => {
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
