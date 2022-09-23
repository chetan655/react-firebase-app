import React from "react";
import {Outlet, Link} from "react-router-dom"
import "./App.css"

function NavigationBar()
{
    return  (
    <div>
        <div className="header">
            <p>DEV@Deakin</p>
            <input type="text" placeholder="Search.."></input>
            <Link className='link' to='/'>
                Post
            </Link>
            <Link className='link' to='/login'>
                Login
            </Link>
        </div> 
        <Outlet/>
    </div>)
}
export default NavigationBar