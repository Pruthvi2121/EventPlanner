import axios from "axios";
import React, { useState } from "react";
import { FaDove } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Landingpage/Navbar";



const AddForm = ()=>{
    const navigate = useNavigate()

    const [title, setTitle]= useState("")
    const [date, setDate]= useState("")
  
   
    const [time,setTime] = useState("");
    const [location,setLocation] = useState("");
    const [image,setImage] = useState("");
    
      
    const handleImageUpload = (e) => {
        console.log(e.target.files)
        setImage(e.target.files[0])
      };
   

    // const submitHandler = async e =>{
    //     e.preventDefault()
    //     const data =  {

        
    //         "event_name": title,
    //         "date": date,
    //         "time":time,
    //         "location": location,
    //         "image": image,
           
        
            
    //     }

    //     console.log("Data of evnet",data)
    //     axios.post(`https://eventplanner.pruthviraj2121.repl.co/event/`, data)
    //     .then((res)=>{
    //             alert("success! ...created  ")
    //             console.log("data -->",data)
    //             console.log(res)
    //             navigate(-1);
    //     })
    //     .catch((error)=>{
    //         console.log(error)
         
    //     },[])
    // }
    // 

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("event_name", title);
        formData.append("date", date);
        formData.append("time", time);
        formData.append("location", location);
        formData.append("image", image);
        console.log("Data of event", formData);

    
        const data =  {

        
            "event_name": title,
            "date": date,
            "time":time,
            "location": location,
            "image": image,
           
        
            
        }
        axios
          .post(`https://eventplanner.pruthviraj2121.repl.co/event/`, data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            alert("success! ...created  ");
            console.log("data -->", formData);
            console.log(res);
            navigate('/myevents');
          })
          .catch((error) => {
            console.log(error);
          });
      };
    return(
        
      <>
        
        <Navbar/>
<div className=" mx-4">
            <div className={`flex text-white bg-[#e6a52c78] px-4 py-1 rounded-md mb-6`}>
                <h1 className="pr-2 capitalize cursor-pointer hover:text-[#e3ef79] " onClick={()=>{navigate(`/`)}}   >home </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2 capitalize cursor-pointer" >Create Event</h1>
                
            </div>
            <div className=" border   rounded-md w-full p-11 text-white py-11 ">
                <h1 className="font-bold  w-full text-4xl capitalize">Create Event.</h1>

                <form onSubmit={submitHandler}>

                   <div className="grid  md:grid-cols-2 gap-4">

                        <div className="flex flex-col ">
                            <label className="py-3">Event Name :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " placeholder="Enter Event Name" type="text" onChange={(e)=>{setTitle(e.target.value)}} />
                        </div>
                        
                        <div className="flex flex-col ">
                            <label className="py-3">Date :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " format="yyyy-mm-dd" placeholder="Enter Event Name" type="date" onChange={(e)=>{setDate(e.target.value)}} />
                        </div>
                        
                        <div className="flex flex-col ">
                            <label className="py-3">Time :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " placeholder="Enter Event Name" type="time" onChange={(e)=>{setTime(e.target.value)}} />
                        </div>
                        

                        <div className="flex  my-auto mx-auto ">

                    <div className="flex">
                      
                         <div className="flex flex-col ">
                            <label className="py-3">Upload Image :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 "  type="file" onChange={handleImageUpload} />
                        </div>

                        
                    </div>
   
                </div>



                   </div>
                    
               
                    <div className="grid  md:grid-cols-2 gap-4 ">

                        
                    <div className="flex flex-col ">
                            <label className="py-3">Location :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " placeholder="Enter Location" type="text" onChange={(e)=>{setLocation(e.target.value)}} />
                        </div>
                    

                        <button className=" text-black py-2 font-semibold  bg-[#cfd964] hover:bg-[#c8b92ae3] mt-[48px] md:mx-32  rounded-md " type="submit">Add </button>
                    </div>
                    
                    
                </form>
            </div>
       </div>
      </>
    )
}

export default AddForm