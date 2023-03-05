import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const Card2 = () => {
    const params = useParams()
    const [mas, setMas] = useState([])
    useEffect(()=>{
        axios.get('https://api.npoint.io/4ddb515a1fbdfe11397c')
        .then(ress=>{
            setMas(ress.data)
            console.log(ress.data,"ress");
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            {

                mas.map((item,index)=>{
                    if(item.id==params.id){
                        return(
                            <>
                            <h1>{item.NameBook}</h1>
                            <h1>{item.Data}</h1>
                            <img src={item.ImgBook} alt="" />
                            <h1>{item.price}</h1>
                            <h1>{item.priceGrade}</h1>
                            </>
                            )
                    }
                })
            }
            {/* <h1>{mas[+(params.id)].NameBook}</h1> 
            <h2>{mas[+(params.id)].Aftor}</h2> */}
        </div>
    );
}

export default Card2;
