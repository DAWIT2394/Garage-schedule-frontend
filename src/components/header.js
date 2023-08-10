import React from "react";
import "./style.css";
import CarForm from './car';
 import MyIma from './MyImage.png';
function Header(){
    return(
        <div className="hed">  
            <h1 className="h">    WELL COME TO MY GARAGE</h1>
             
            {/* <img src={MyImage} alt="My Garage" /> */}
            <CarForm/>
            <img src={MyIma} className="logo" alt="My Logo" />
        </div>
        
    )
}
export default Header;
