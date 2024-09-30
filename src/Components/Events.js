import React from "react";
import './Events.css';
import box1 from '../assets/box1.png';
import box2 from '../assets/box2.png';
import box3 from '../assets/box3.png';
import box4 from '../assets/box4.png';
import box5 from '../assets/box5.png';
import box6 from '../assets/box6.png';

function Events(){
    return ( 
         
        <div id="Events-div">

            <div className="Events-flex1">
                <h1>Upcoming Events</h1>
                <form className="form-div" action="#" method="get" id="Events-tabs">
                    <select className="form-control" name="Weekdays">
                        <option value="Monday">Weekdays</option>
                        <option value="Monday">Monday</option>
                        <option value="Monday">Tuesday</option>
                        <option value="Monday">Wednessday</option>
                        <option value="Monday">Thursday</option>
                        <option value="Monday">Friday</option>
                        <option value="Monday">Saturday</option>
                        <option value="Monday">Sunday</option>
                    </select>
                    <select className="form-control" name="Event Type">
                        <option value="Event Type">Event Type</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Reception">Reception</option>
                        <option value="Concert">Concert</option> 
                        <option value="Party">Party</option>   
                    </select>
                    <select className="form-control" name="Category">
                        <option value="Any Category">Any Category</option>
                        <option value="All night">All night</option>
                        <option value="All day">All day</option>
                        <option value="Half night">Half night</option>
                        <option value="Half day">Half day</option>                        
                    </select>                                      
                </form>
             
            </div>

            <div className="Events-flex2">

                <div className="Events-box">

                    <img src={box1}  alt=""/>
                    <div className="box-text">

                        <div className="Date-Event">

                            <div className="Date">                                
                                <h3 className="month">APR</h3>
                                <h4 className="day">14</h4>
                            </div>

                            <div className="Event">
                                <h3>Wonder Girls 2010 Wonder<br /> Girls World Tour San Francisco</h3>
                            </div>                            
                        </div>
                            <div className="Event-Description">
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                    </div>
                </div>
                <div className="Events-box">

                    <img src={box2}  alt="logo"/>
                    <div className="box-text">

                        <div className="Date-Event">

                            <div className="Date">                                
                                <h3 className="month">AUG</h3>
                                <h4 className="day">20</h4>
                            </div>

                            <div className="Event">
                                <h3>Wonder Girls 2010 Wonder<br /> Girls World Tour San Francisco</h3>
                            </div>                            
                        </div>
                            <div className="Event-Description">
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                    </div>
                </div>
                <div className="Events-box">

                    <img src={box3}  alt="logo"/>
                    <div className="box-text">

                        <div className="Date-Event">

                            <div className="Date">                                
                                <h3 className="month">SEP</h3>
                                <h4 className="day">18</h4>
                            </div>

                            <div className="Event">
                                <h3>Wonder Girls 2010 Wonder<br /> Girls World Tour San Francisco</h3>
                            </div>                            
                        </div>
                            <div className="Event-Description">
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                    </div>
                </div>
            </div>
            
            <div className="Events-flex2">

                <div className="Events-box">

                <img src={box4}  alt="logo"/>
                    <div className="box-text">

                        <div className="Date-Event">

                            <div className="Date">                                
                                <h3 className="month">APR</h3>
                                <h4 className="day">14</h4>
                            </div>

                            <div className="Event">
                                <h3>Wonder Girls 2010 Wonder<br /> Girls World Tour San Francisco</h3>
                            </div>                            
                        </div>
                            <div className="Event-Description">
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                    </div>
                </div>
                <div className="Events-box">

                    <img src={box5}  alt="logo"/>
                    <div className="box-text">

                        <div className="Date-Event">

                            <div className="Date">                                
                                <h3 className="month">AUG</h3>
                                <h4 className="day">20</h4>
                            </div>

                            <div className="Event">
                                <h3>Wonder Girls 2010 Wonder<br /> Girls World Tour San Francisco</h3>
                            </div>                            
                        </div>
                            <div className="Event-Description">
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                    </div>
                </div>
                <div className="Events-box">

                    <img src={box6}  alt="logo"/>
                    <div className="box-text">

                        <div className="Date-Event">

                            <div className="Date">                                
                                <h3 className="month">SEP</h3>
                                <h4 className="day">18</h4>
                            </div>

                            <div className="Event">
                                <h3>Wonder Girls 2010 Wonder<br /> Girls World Tour San Francisco</h3>
                            </div>                            
                        </div>
                            <div className="Event-Description">
                                <p>We'll get you directly seated and inside for you to enjoy the show</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="Events-learn-more-box">
                <a href="" className="learn-more-btn" >Learn More</a>
            </div>                    
        </div>                     
    );
}

export default Events;

