"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function loginPage() {
    const [user,setUser] = React.useState({
        email:"",
        password:""
    }); 


    const onLogin = async()=>{
        
    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1>Login</h1>
            <hr />
            
            <label htmlFor="email">email</label>
            <input 
          className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none" 
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
          className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none" 
            type="text"
            id="password"
            name="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            placeholder="password"
            />
            <br />
            <button className="p-2 border border-gray-300 rounded-lg-mb-4 focus:border-gray-600 focus:outline-none" onClick={onLogin} type="submit">Login here</button>
            <br />
            <Link href="/signup">Visit SignUp Page </Link>
        </div>
    );
}