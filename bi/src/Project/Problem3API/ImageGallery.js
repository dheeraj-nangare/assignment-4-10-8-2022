import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import './ImageGallery.css';
import {useNavigate} from 'react-router-dom'

function ImageGallery(){
    const [image,setImage] = useState([])
    const navigate=useNavigate()
    useEffect(
        ()=>{
        axios.get("https://pixabay.com/api/?key=29691531-4b29aefacf1bfc5bf7b57a738&q=yellow+flowers&image_type=photo")
        .then((res)=>{
            console.log(res.data.hits);
            setImage(res.data.hits)
        })
        .catch((err)=>console.log(err))
        },[]
    )
    const handleclick=(user)=>{
        navigate(`/view/${user}`)
    }

    return(
        <div>
            <div className="container">
                <h2>Photographer's Showcase</h2>
                {
                image.map((item)=>(
                    <div id="ImageContainer">
                        <img src={item.largeImageURL} onClick={()=>handleclick(item.user)}></img>
                        <h3 onClick={()=>handleclick(item.user)}>Image by: {item.user}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ImageGallery