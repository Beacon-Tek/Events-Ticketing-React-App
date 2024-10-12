import React from "react";
import guys from '../assets/guys.png';
import logo from '../assets/logo.png';
import './Home.css';

function Home(){ 
    return(
        <div>           
            <div className="Home">
                <nav>
                <img src={logo} alt =""/>
                <ul>                        
                    <li><a href="#schedule">Schedule</a></li>                       
                    <li><a href="#blog">Speakers</a></li>
                    <li><a href="#createEvent">Ticket</a></li>
                    <li><a href="#footersection">Contact</a></li>
                    <li><a href="#c" className="login-btn" >Login</a></li>
                </ul> 
                    <li><a href="" id="hamburger" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                    </li>                                        
                </nav>    
                            
                {/* <div className="sidebar">                    
                    <ul>
                        <li><a href="" id="close" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 
                        224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg></a></li>
                        <li><a href="" >Schedule</a></li>
                        <li><a href="" >Speakers</a></li>
                        <li><a href="" >Ticket</a></li>
                        <li><a href="" >Contact</a></li>
                        <li><a href="" >Login</a></li>
                    </ul>                                     
                </div>        */}

                <div className="Home-img-div">                   
                    <img src={guys} alt=""/>
                    <div id="Home-text-div">
                        <h1>SBS MTV The Kpop <br />Show Ticket Package</h1>
                        <p>Look no further! Our SBS The Show tickets are the<br />
                            simplest way for you to experience a live Kpop <br/>recording.
                        </p>
                        <a href="#c" className="Home-1-a" >Get ticket</a>
                        <a href="#c" className="Home-1-b" >Learn More</a>                      
                    </div>                
                </div>             
            </div> 
        </div>             
    );
}

export default Home;
