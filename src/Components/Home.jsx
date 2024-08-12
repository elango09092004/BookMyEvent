import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
const Home=()=>{
    return(
        <><div className="wholepage">
        <div className="container">
        <div className="text">
                <h1>Book and Enjoy Any Event With Ease</h1>
                <Link to ="/signup"><button>Book Now</button></Link>
                </div><div className="images">
            <img src="https://imgs.search.brave.com/u9431G6SHr8fN7xMHtNXrQ5joY1b2nOVDEew2fln2Sk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMTk4/MzA0Ni9wZXhlbHMt/cGhvdG8tMTk4MzA0/Ni5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" />
            <img src="https://imgs.search.brave.com/T8Q6dkbroKGBJfDr-J7V6B89NKKmrZ7P1D1h0RU-HmQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Ny8yMS8yMy81Ny9j/b25jZXJ0LTI1Mjc0/OTVfNjQwLmpwZw"  />
           </div>
        </div>
        <div className="container">
        <div className="text">
                <h1>Plan And Organise Events with Less Effort</h1>
                <button><Link to ="/signup">Organise Now</Link></button>
            </div><div className="images">
            <img src="https://imgs.search.brave.com/zbrahzu4sfhtsxVoPVcKuElmWEG-fjcjwrflLLf2gZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzIyLzgyLzcw/LzM2MF9GXzEyMjgy/NzA0NF9MU3h2V3JE/SFJTU3dFVEhtaE1i/b1V6ZGFueWp0Tk4y/WS5qcGc"  />
            <img src="https://imgs.search.brave.com/4K6eoDzN-hQ_bcIrSwwQ89tWGWgB9t62nzeSP4EIgOA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/MS8yMy8xNS80OC9h/dWRpZW5jZS0xODUz/NjYyXzY0MC5qcGc"/>
            </div></div>
            <div className="about">
                <h1>About Us</h1>
                
                <h2>Our mission is to provide a platform for people to book and enjoy any event with
                    ease. We strive to make event planning and organisation a seamless experience for
                    our users.</h2>
                <h1>Contactus</h1>
                <h2>For any queries or feedback, please contact us at [info@bookmyEvent.com]</h2>

            </div>
        </div>

        </>
    )
}
export default Home