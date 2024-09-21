import React from "react";
import logo from '../assets/logo.png';
import guys from '../assets/guys.png';
import swiper from '../assets/swiper.png';
import swiper2 from '../assets/swiper2.png';
// import bg from '../assets/bg.png';
// import image from '../assets/image.png';
import './Home.css';


function Home(){
    return(
        <div>           
            <div className="Home">
                <nav>
                    <img src={logo} />
                    <ul>
                        <li><a href="">Schedule</a></li>
                        <li><a href="">Speakers</a></li>
                        <li><a href="">Ticket</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a className="login-btn" href="">Login</a></li>
                    </ul>
                    <li><a id="hamburger" href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                    viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                    </li>                      
                </nav>
                <div className="sidebar">                    
                    <ul>
                        <li><a id="close" href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                        <li><a href="">Schedule</a></li>
                        <li><a href="">Speakers</a></li>
                        <li><a href="">Ticket</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                    <li><a id="hamburger" href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                    viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                    </li>                      
                </div>
                <div className="Home-img-div">
                    {/* <div className="swiper-div-left">
                     <img src={swiper} />
                    </div> */}
                    <img src={guys} />
                    <div id="Home-text-div">
                        <h1>SBS MTV The Kpop <br />Show Ticket Package</h1>
                        <p>Look no further! Our SBS The Show tickets are the<br />simplest way for you to experience a live Kpop <br/>recording.</p>
                        <a className="Home-1-a" href="" >Get ticket</a>
                        <a className="Home-1-b" href="" >Learn More</a>                      
                    </div>
                    {/* <div className="swiper-div-right">
                        <img src={swiper} />
                    </div> */}
                </div>             
            </div> 
        </div>             
    );
}

export default Home;
