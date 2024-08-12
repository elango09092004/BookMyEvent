import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
function NavBar(){
    return (
        <nav className="navbar">
            <div className="logo">BookMyEvent</div>
            <div className="nav-links">
              <Link to={"/"}><p>Home</p></Link>
              <Link to={"/signin"}  ><button>Signin</button></Link>
              <Link to={"/signup"}  ><button>Signup</button></Link>
            </div>
        </nav>
    )
}
export default NavBar