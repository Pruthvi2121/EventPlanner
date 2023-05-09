import React, { useEffect, useState } from "react";
import Navbar from "../Landingpage/Navbar";
import { useNavigate } from "react-router-dom";
import {BsPlus} from'react-icons/bs'
import Card from "../Landingpage/Card";
import axios from "axios";

const MyEvents =()=>{

    const [data, SetData]=useState([])
    useEffect(()=>{
        axios.get("https://eventplanner.pruthviraj2121.repl.co/event/")
        .then((res)=>{
            console.log(res.data)
            SetData(res.data)
            
        })
        .catch((err)=>{

        })
    },[])
    const navigate = useNavigate()
    return <>
    <Navbar/>
    <div className="bg-[#1a16324e] ">
        <div className="text-center w-full text-4xl font-bold text-[#bab5ae55]">My Events.</div>

        <div className=" flex w-16 items-center rounded-full py-3 px-2 bg-[#f33f3cdf]  mx-8   cursor-pointer  hover:scale-[0.9] duration-300" onClick={()=>{navigate('/add')}}>
            
            <div className=" text-4xl  text-[#646666a6] my-[-2px] "><BsPlus size={"45px"}/></div>
        </div>



        <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1  gap-4  px-4">
            
           
            
            {
                data.map((d, i)=>(
                    <div key={i}>
                    <Card   image={d.image} name={d.event_name} location={d.location} time={d.time} date={d.date} />
                    </div>
                ))
            }
        
        </div>

        {
            data.length?"":
            <h1 className="text-[#3b9c7a7e] w-full text-center text-4xl py-5">No Events Presents</h1>
        }



    </div>
        
    </>
}

export default MyEvents