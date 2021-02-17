import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            
            <NavLink to="/contact">Contact</NavLink>
        </div>
        </>
    )
};
export default Navbar;