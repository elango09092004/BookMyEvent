import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import React from "react"
import Home from "./Components/Home"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
// import "./App.css"

const App=()=>{
    return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    )

}
export default App