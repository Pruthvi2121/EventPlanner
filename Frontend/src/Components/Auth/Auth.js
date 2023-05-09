import axios from "axios";
import {createContext, useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const  AuthContext = createContext(null)

export const AuthProvider =({children})=>{
    const navigate = useNavigate()
    
    
    const [user, setUser ]=useState(null)

    const login =(email, password)=>{
        setUser(email)
        
    }
    const logout =()=>{
        setUser(null)
        localStorage.removeItem("user")
        localStorage.removeItem("profile")
        navigate('/')
        
    }


    const register =()=>{
        setUser(null)
    }

    const profile =()=>{
        axios.get("https://eventplanner.pruthviraj2121.repl.co/auth/profile/")
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem("profile",JSON.stringify(res.data.name))
            console.log(localStorage.getItem("profile"))
            navigate('/')
        
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    return (
    <AuthContext.Provider value={{user, login, logout, register, profile}}>
     {children}
    </AuthContext.Provider>
    )
}


export const useAuth =()=>{
    return useContext(AuthContext)
}