import Login from './Login';
import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react";



function Home(){
    
    //const navigate = useNavigate();

    const navigateLogin = () => {
        //navigate('/login');
      };
    

    return (
        <div classname="Home">
        <div >
            <h3>Hi, you are currently not logged in</h3>
            <button onClick={navigateLogin}>Log in Here</button>
        </div>

        </div>
    )
}

export default Home;