import React from "react";
import './Partners.css';
import brand1 from '../assets/brand1.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand6 from '../assets/brand6.png';
import brand7 from '../assets/brand7.png';
import brand8 from '../assets/brand8.png'; 
import brand9 from '../assets/brand9.png';


function Partners(){
    return ( <div className="Partners-div">
            <h3>Join these brands</h3>
            <p>We've had the pleasure of working with industry-defining brands. These are just some of them. </p>   
            <div className="images-div1">
                <img  src={brand1} alt="brands that Web Event ticketing has worked with" />
                <img  src={brand2} alt="brands that Web Event ticketing has worked with" />
                <img  src={brand3} alt="brands that Web Event ticketing has worked with" />
                <img  src={brand4} alt="brands that Web Event ticketing has worked with" /> 
                <img  src={brand5} alt="brands that Web Event ticketing has worked with" />                
            </div>  
            <div className="images-div2">
                <img  id="medium" src={brand6} alt="brands that Web Event ticketing has worked with" />
                <img  src={brand7} alt="brands that Web Event ticketing has worked with" />
                <img  src={brand8} alt="brands that Web Event ticketing has worked with" />
                <img  src={brand9} alt="brands that Web Event ticketing has worked with" />
            </div>          
    </div>
    );
}


export default Partners;