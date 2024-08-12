import React from "react";
import "./Signin.css"

const Signin=()=>{
    return(
        <div className="signin"><div className="box">
        <h1>Sign In</h1>
        <div className="inputdiv"> <input type="text"  placeholder="username"/>
        <input type="password"  placeholder="password"/>
        </div>
        <button className="button">Signin</button>
       
        </div></div>
    )

}
export default Signin;