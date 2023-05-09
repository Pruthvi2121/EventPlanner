import React from "react";

import { useNavigate } from "react-router-dom";
import back from '../assets/color2.jpg'
import back2 from '../assets/color2.jpg'

const Hero = ()=>{  
    const navigate = useNavigate()

    return(
        <div className="text-white">
            <img  className=" absolute z-[-1]  lg:rounded-full md:rounded md:h-[-20%] opacity-[0.5]" src={back}  alt="/" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <div className="max-w-[800px] mt-[-96px] w-full  , h-screen mx-auto text-center flex flex-col justify-center">
               

                <h1 className="md:text-7xl mt-16 sm:text-6xl text-4xl text-[#ecede9] font-bold md:py-6">
                Your One-Stop Destination for Event Planning!
                </h1>

                

                <p className="md:text-2xl text-xl font-bold text-[#d86d08b6]">
                Discover, Create, and Attend Events with Ease
                </p>

                {/* <button onClick={()=>{navigate('/register')}} className="bg-[#4ca7c6] hover:scale-[0.9] duration-300 w-[200px] rounded-md font-medium mx-auto py-3 text-black hover:bg-[#86e2c5] mt-3">Get Started</button> */}
                <div  onClick={()=>{window.scrollBy(0,600);}} className=" bg-[#4ca7c6] hover:scale-[0.9] duration-300 w-[200px] rounded-md font-medium mx-auto py-3 text-black hover:bg-[#86e2c5] mt-3">Current Events</div>
            
            </div>
        </div>
    )
}

export default Hero