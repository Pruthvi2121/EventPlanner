import React, { useEffect, useState } from "react";
import back from '../assets/color2.jpg'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

import axios from "axios";

const Card =({id, image, name, date, time, location})=>{

    const [like,setLike]=useState("")
    // useEffect(()=>{
        
    // })
    
    const handleLike = ()=>{
        axios.post(`https://eventplanner.pruthviraj2121.repl.co/event/eve/${id}/like/`)
        .then((res)=>{
            console.log(res.data)
            setLike(res.data)

        })
        .catch((err)=>{
            console.log(err)
        })

    }
    return(
        <div className=" my-12 rounded-lg  max-w-[1240px] bg-[#4444] mx-3">
        
            <div className="w-full shadow-xl flex flex-col justify-center rounded-lg   hover:scale-105 duration-300 text-center ">

                {
                    like.is_like?<div className=" relative top-8  ml-auto right-2" onClick={handleLike}><FcLike size={"2rem"}/></div>:
                    <div className=" relative top-8  ml-auto right-2" onClick={handleLike}><FcLikePlaceholder size={"2rem"}/></div>
                }
                
                <img className="w-full mx-auto rounded mt-[-2rem] bg-white" src={`https://eventplanner.pruthviraj2121.repl.co/${image}`} alt="" />
                    <h2 className="pt-2 mx-8 font-medium text-xl text-white">{name}</h2>
                    <p className=" mx-8 text-[#1798d8] font-semibold"> {date}, {time}</p>
                    <p className=" mx-8 text-[#81808d] pb-2"> {location}</p>

                </div>
        </div>
    )
}
export default Card