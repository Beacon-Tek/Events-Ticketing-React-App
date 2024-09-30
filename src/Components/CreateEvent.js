import React from "react";
import './CreateEvent.css';
import CEvent from '../assets/CEvent.png'

function CreateEvent(){
    return (<div className="Create-Event-div">                 
          <div className="Create-event-rectangle">                
                <div className="Make-your-own-event">
                        <h3>Make your own Event</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur<br />
                    adipiscing elit.
                    </p>
                    <a href="home.js" >Create Events</a>
                </div>
            </div>
            <img src={CEvent} alt=""/>   
        </div> 
    );
}

export default CreateEvent;
