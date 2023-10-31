import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
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
            <Link to="/"><img src="/images/haris1-logo.jpg" alt="" /></Link>
          </div>
          <ul>
            <Link to="/aboutus"><li>ABOUT</li></Link>
            <Link to="/services"><li>SERVICES <BiChevronDown className='bsbs'/> 
            <ul className=''>
            <Link to="/services/seo"><li>SEO</li></Link>
              <li>Marketing</li>
              <li>Web Development</li>
              <li>App Development</li>
            </ul>
            </li></Link>
            <Link to="/portfolio"><li>PORTFOLIO</li></Link>
            <li>TESTIMONIALS</li>
            <Link to="/contact"><li>CONTACT US</li></Link>
          </ul>
          <button className='bn27'>Get a Quote</button>
        </div>
      </div>
    </>
  )
}
