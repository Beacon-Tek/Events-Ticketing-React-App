import React from 'react';
import './Searchbox.css';

function Searchbox(){
    return <div className="search-box-div">
        <div className="search-box-content-div">
            <div className="search-box-content">
                <p>Event</p>
                <form action="#" method="get">
                    <select className="form-design">
                        <option value="Konsar jazz">Konsar jazz</option>
                    </select>
                </form>
            </div>
            <div className="search-box-content">
                <p>Place</p>
                <form action="#" method="get">
                    <select className="form-design">
                        <option value="Indonesia">Indonesia</option>
                    </select>
                </form>
            </div>
            <div className="search-box-content">
                <p>Time</p>
                <form action="#" method="get">
                    <select className="form-design">
                        <option value="Konsar jazz">Any date</option>
                    </select>
                </form>
            </div>
        </div>      
    </div>
}

export default Searchbox;