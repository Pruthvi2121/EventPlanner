import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
const Navbar =()=>{
    const auth = useAuth()
    const navigate = useNavigate()
    return(
        <div className=" flex justify-between  text-white items-center h-24 mx-auto px-4 ">
            <h1 className=" w-full md:text-3xl  font-bold text-[#4ca7c6] ">"EventPlanner. .</h1>

            
            
            <ul className="flex">
              
                
                {
                    localStorage.getItem("profile")?
                    <div className="   w-auto flex ">
                    
                        <h1 className="text-[#f809c0] font-semibold text-right text-lg mr-4 my-auto uppercase flex-auto whitespace-nowrap">👋 hello {localStorage.getItem("profile")}</h1>
                        <li className="p-4 cursor-pointer hover:text-[#86e2c5]  whitespace-nowrap" ><button onClick={()=>{auth.logout()}}  className="bg-slate-100 rounded hidden lg:inline-block  text-black mx-auto w-[150px] h-8 mt-[-10px]  hover:scale-[0.9] duration-300 hover:bg-[#86e2c5] ">Logout</button></li>
                    
                    </div> :
                    <div className="   w-auto flex ">
                    
                        <li className="p-4 cursor-pointer hover:text-[#86e2c5]">About</li>
                        <li onClick={()=>{navigate('/login')}} className="p-4 cursor-pointer hover:text-[#86e2c5] whitespace-nowrap">Sign In</li>
                        <li className="p-4 cursor-pointer hover:text-[#86e2c5]  whitespace-nowrap" ><button onClick={()=>{navigate('/register')}} className="bg-slate-100 rounded hidden lg:inline-block  text-black mx-auto w-[150px] h-8 mt-[-10px]  hover:scale-[0.9] duration-300 hover:bg-[#86e2c5] ">Get Started</button></li>
                
                </div>
                }
            </ul>
        </div>
    )
}

export default Navbar