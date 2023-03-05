import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
const Card = () => {

    const [mas, setMas] = useState([])

    useEffect(() => {
        axios.get('https://api.npoint.io/4ddb515a1fbdfe11397c')
            .then(ress => {
                console.log(ress.data);
                setMas(ress.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function like(index) {
        let current = [...mas]

        current[index].status = !current[index].status
        setMas(current)
    }
    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex main'>
                {
                    (mas) && mas.map((item, index) => {
                        return (
                            <div className='card1 mx-4'>
                                    <li className='like' onClick={() => like(index)}>{item.status == true?<AiOutlineHeart />:<AiFillHeart/>}</li>
                                <Link to={`/card2/${item.id}`}>
                                    <img className='img_book' src={(item.ImgBook) ? item.ImgBook : "https://waynesville.otc.edu/media/plugins/ninja-forms/assets/img/no-image-available-icon-6.jpg"} alt="" />
                                    <h2>{item.grade} grd</h2>
                                    <h2>{item.NameBook}</h2>
                                    <p>{item.Aftor}</p>
                                </Link>
                                <div className='d-flex'>
                                    <button>Korzinka</button>
                                    <button>desc</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Card;
