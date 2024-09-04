import React from "react";
import logo from '../assets/logo.png';
import guys from '../assets/guys.png';
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
                </nav>
                <div className="Home-img-div">
                    <img src={guys} />
                    <div id="Home-text-div">
                        <h1>SBS MTV The Kpop <br />Show Ticket Package</h1>
                        <p>Look no further! Our SBS The Show tickets are the<br />simplest way for you to experience a live Kpop <br/>recording.</p>
                        <a className="Home-1-a" href="" >Get ticket</a>
                        <a className="Home-1-b" href="" >Learn More</a>                      
                    </div>
                </div>             
            </div> 
        </div>             
    );
}

export default Home;
