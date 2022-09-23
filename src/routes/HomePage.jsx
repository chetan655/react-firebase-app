import React, {useState} from 'react';
import Header from '../Header'
import {Outlet} from "react-router-dom"

function  HomePage() {
    return (
      <div className='header-div'>
        <Header 
          text = "WELCOME TO THE HOMEPAGE OF MY APP"
        />
      </div>
      
    );
}
export default HomePage;