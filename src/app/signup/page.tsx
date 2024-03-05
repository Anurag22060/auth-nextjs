"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import  axios  from "axios";
import { Console, log } from "console";


export default function signupPage() {
  const router = useRouter();
    const [user,setUser] = React.useState({
        username:"",
        email:"",
        password:""
    }); 

    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setLoading] = React.useState(false);

    const onSignUp = async()=>{
        try {
          setLoading(true);
          const response = await axios.post("/api/users/signup",user);
          console.log("Signup success",response.data);
          router.push("/login");
          
        } catch (err:any) {

          console.log("Signup Failed",err.message);
          toast.error(err.message);
        }finally{
          setLoading(false);
        }
    }
    useEffect(()=>{
      if(user.email.length >0 && user.password.length >0 && user.username.length >0){
        setButtonDisabled(false)
      }else{
        setButtonDisabled(true)
      }
    },[user])

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1>{loading ? "loading..." : "Sign Up"}</h1>
            <hr />
            <label htmlFor="username">username:</label>
            <input 
          className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none text-black" 
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={(e)=>setUser({...user,username:e.target.value})}
            placeholder="username"
            />
            <label htmlFor="email">email</label>
            <input 
          className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none text-black" 
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
          className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none text-black" 
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            />
            <br />
            <button className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none" onClick={onSignUp} type="submit">{buttonDisabled ? "No Signup" : "Signup"}</button>
            <br />
            <Link href="/login">Visit Login Page </Link>
        </div>
    );
}