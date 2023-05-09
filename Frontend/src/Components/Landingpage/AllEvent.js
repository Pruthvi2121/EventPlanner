import React, { useEffect, useState } from "react";
import Card from "./Card";
import {BsPlus} from'react-icons/bs'
import {MdEventSeat} from'react-icons/md'
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AllEvent = ()=>{
    const navigate = useNavigate() 

    const [data, SetData]=useState([])
    useEffect(()=>{
        axios.get("https://eventplanner.pruthviraj2121.repl.co/all/")
        .then((res)=>{
            console.log(res.data)
            SetData(res.data)
            
        })
        .catch((err)=>{

        })
    },[])
    return<>
   
    <div className=" h-64 bg-[#1e1e2188]  mt-4 z-[-2]">
        <h1 className="text-[#09eda1] text-3xl font-semibold  px-8 py-8"><span className="text-4xl">E</span>vents. </h1>
        
       <div className=" flex">
       <div className=" items-center  justify-center flex w-40 py-3 px-2 bg-[#f54340df]  mx-8 rounded-lg  cursor-pointer  hover:scale-[0.9] duration-300" onClick={()=>{navigate('add/')}}>
            <div className="text-black text-xl font-semibold whitespace-nowrap"  >New Event</div>
            <div className=" text-4xl  text-[#a7b326] my-[-2px] "><BsPlus size={"40px"}/></div>
        </div>
        <div className=" items-center  justify-center flex w-40 py-3 px-2 bg-[#40f5f5df]  mx-8 rounded-lg  cursor-pointer  hover:scale-[0.9] duration-300" onClick={()=>{navigate('myevents/')}}>
            <div className="text-black text-xl font-semibold whitespace-nowrap "  >My Event</div>
            
        </div>

       </div>

        <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1  gap-4  px-4">
            
        {
                data.map((d, i)=>(
                    <div key={i}>
                    <Card  id={d.id} image={d.image} name={d.event_name} location={d.location} time={d.time} date={d.date} />
                    </div>
                ))
            }
        </div>
    </div>
    </>
}

export default AllEvent