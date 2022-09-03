import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import './ImageGalleryElephant.css';

const Preview=()=>{
    const [image,setImage] = useState([]);
    const {user}=useParams();

    useEffect(
        ()=>{
        axios.get("https://pixabay.com/api/?key=29691531-4b29aefacf1bfc5bf7b57a738&q=yellow+flowers&image_type=photo")
        .then((res)=>setImage(res.data.hits.filter((item)=>item.user===user)))
        .catch((err)=>console.log(err))
        },[]
    )


    return(
        <div className="container">
            {console.log('user details',user)}
            <h2>Photographer's Showcase</h2>
            {
               image.map((item)=>(
                <div id="ImageContainer">
                <img src={item.largeImageURL}></img>
                <h3>Image by: {item.user}</h3>
                </div>
               ))
            }
        </div>
    )
}
export default Preview