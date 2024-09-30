import React from "react";
import './Blog.css';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';


function Blog(){
    return(
        <div className="blog-div">
            <h3>Blog</h3>
            <p className="blog-div-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className="blog-boxes-div">
                <div className="blog-box" >
                    <img src={blog1} alt="blog images" />
                    <h6>6 Strategies to Find Your Conference Keynote and Other Speakers</h6>
                    <p>Sekarang, Kamu bisa produksi ticket fisik untukn eventmu bersarna Bostiketbosa. Hanya perlu mengikuti beberapa langkah mudah</p>
                    <p className="blog-div-date">12 Mar - John Doe</p>
                </div>

                <div className="blog-box" >
                    <img src={blog2} alt="blog images" />
                    <h6>6 Strategies to Find Your Conference Keynote and Other Speakers</h6>
                    <p>Sekarang, Kamu bisa produksi ticket fisik untukn eventmu bersarna Bostiketbosa. Hanya perlu mengikuti beberapa langkah mudah</p>
                    <p className="blog-div-date">12 Mar - John Doe</p>
                </div>

                <div className="blog-box" >
                    <img src={blog3} alt="blog images" />
                    <h6>6 Strategies to Find Your Conference Keynote and Other Speakers</h6>
                    <p>Sekarang, Kamu bisa produksi ticket fisik untukn eventmu bersarna Bostiketbosa. Hanya perlu mengikuti beberapa langkah mudah</p>
                    <p className="blog-div-date">12 Mar - John Doe</p>
                </div>
            </div>
            <div className="blog-button">
                <a href="">Load More</a>
            </div>                 
        </div>
    );
}

export default Blog;