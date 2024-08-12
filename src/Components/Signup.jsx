import React from "react"
import { Link } from "react-router-dom"
import "./Signup.css"
const Signup=
()=>{
    const dispatch=useDispatch()
    
    
    return(
        <>
        <div className="signup">
            <div className="box">
                <h1>Signup</h1>
                <div className="elements">
                    <input type="text" placeholder="Username" value={usename} />
                    <input type="email" placeholder="Email"  value={email}/>
                    <input type="password" placeholder="Password" value={password} />
                    <button className="button">Signup</button>
                    <p>already have an account?<Link to ={"/signin"}>login</Link></p>
                    </div></div></div></>
    )
}
export default Signup