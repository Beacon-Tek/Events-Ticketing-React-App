import React from "react";
import './Footer.css';
import logo from '../assets/logo.png';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

function Footer(){
    return(
        <div className="footer-div">
           <div className="footer-top">
                <div className="top1">
                    <img src={logo} />
                    <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone 
                        to create, share, find and attend events that fuel their passions and enrich their lives.
                    </p>
                    <div className="social-handles">
                    <i class="fa-regular fa-user"></i>
                    
                    </div>
                  
                </div>
                <div className="top2">
                    <p>Plan Events</p>
                    <a href="">Create and Set Up</a>
                    <br/>
                    <a href="">Sell Tickets</a>
                    <br/>
                    <a href="">Online RSVP</a>
                    <br/>
                    <a href="">Online Events</a>
                    <br/>                    
                </div>
                <div className="top2">
                    <p>Eventick</p>                  
                    <a href="#">About Us</a>
                    <br/>
                    <a href="#">Press</a>
                    <br/>
                    <a href="#">Contact Us</a>
                    <br/>
                    <a href="#">Help Center</a>
                    <br/>
                    <a href="#">How it Works</a>
                    <br/>
                    <a href="#">Privacy</a>
                    <br/>
                    <a href="#">Terms</a>
                    <br/>
                </div>
                <div className="top4">
                    <p id="top4-head">Stay In The Loop</p>
                    <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                    <div className="subscription" >
                        <form action="#" method="Get" >
                            <input className="form" type="text" name="email" id="email" placeholder="Enter your email address"></input>
                        </form>
                        <a className="subscription-btn" href="">Subscribe Now</a>
                    </div>
                </div>
           </div>
           <div className="footer-bottom">
                <hr className="footer-bottom-line"/>
                <p>Copyright &copy; 2024 Avi Yansah</p>
           </div>
        </div>
    );
}

export default Footer;