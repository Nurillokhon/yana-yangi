import React from 'react';

const Korzinka = () => {

    const massiv = JSON.parse(localStorage.getItem('count'))
    console.log(massiv, "nimadir");
    return (
        <div>
           korzinaga tushgan mahsulotlar
            {
                massiv.map((item, index) => {
                    if (item.status == false) {

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

export default Korzinka;
