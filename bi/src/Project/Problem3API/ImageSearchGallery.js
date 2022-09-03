import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function ImaggeGallery(){
    const [image,setImage] = useState([])
    const [search,setSearch] = useState("")

    useEffect(
        ()=>{
        axios.get(`https://pixabay.com/api/?key=29691531-4b29aefacf1bfc5bf7b57a738&q=yellow+flowers&image_type=photo`)
        .then((res)=>{
            console.log(res.data);
            setImage(res.data.hits)
        })
        .catch((err)=>console.log(err))
        },[search]
    )

    const handleChange=(event)=>{
        setSearch(event.target.value)
    }

    return(
        <div>
            <form>
                <input type="text" placeholder="Search" onChange={(e)=>handleChange(e)}></input>
            </form>
            <div className="container">
                {
                image.map((item)=>(
                    <div key={item.id}>
                        <img src={item.largeImageURL}></img>
                        <h3>Image by: {item.user}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ImaggeGallery