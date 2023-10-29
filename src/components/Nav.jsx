import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="top_nav">
          <div className="inner_top top1"><p>Your Success, Our Strategy!</p> </div>
          <div className="inner_top top2"><p>Get Free Estimate Call Now : 0301-0400924 </p></div>
          <div className="inner_top top3">
            <div className="three_icons"><BsFacebook className='top-icons' /></div>
            <div className="three_icons"><BsInstagram className='top-icons' /></div>
            <div className="three_icons"><BsLinkedin className='top-icons' /></div>
          </div>
        </div>
        <div className="bottom_nav">
          <div className="logo">
            <img src="/images/lbw1.png" alt="" />
          </div>
          <ul>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>BLOG</li>
            <Link to="/projects"><li>PORTFOLIO</li></Link>
            <li>TESTIMONIALS</li>
            <li>CONTACT US</li>
          </ul>
          <button className='bn27'>Get a Quote</button>
        </div>
      </div>
    </>
  )
}
