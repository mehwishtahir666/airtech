import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';


export const Nav = () => {

  const menuShow=()=>{
    const listSmall=document.getElementsByClassName("listSmall")[0]
    listSmall.classList.toggle("noneList")
  }

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
            <Link to="/"><img src="/images/Transperent1.png" alt="" /></Link>
          </div>
          <ul className='smallUl'>
            <Link to="/aboutus"><li>ABOUT</li></Link>
            <Link to="/services"><li>SERVICES <BiChevronDown className='bsbs'/> 
            <ul className=''>
            <Link to="/services/seo"><li>SEO</li></Link>
            <Link to="/service/webdevelopment"><li>Web Development</li></Link>
            <Link to="/service/marketing"><li>Marketing</li></Link>
            <Link to="/service/appdevelopment"> <li>App Development</li></Link>
            </ul>
            </li></Link>
            <Link to="/portfolio"><li>PORTFOLIO</li></Link>
            <Link to="/testimonial"> <li>TESTIMONIALS</li> </Link>
            <Link to="/contact"><li>CONTACT US</li></Link>
          </ul>
          <button className='bn27'>Get a Quote</button>
          <FcMenu className='menuNav' onClick={()=>{menuShow()}}/>
          <div className="listSmall">
          <ul>
            <Link to="/aboutus"><li>ABOUT</li></Link>
            <Link to="/services"><li className='bsbsbs'> <button>SERVICES <BiChevronDown className='bsbs'/> </button>
            <ul className=''>
            <Link to="/services/seo"><li>SEO</li></Link>
            <Link to="/service/webdevelopment"><li>Web Development</li></Link>
            <Link to="/service/marketing"><li>Marketing</li></Link>
            <Link to="/service/appdevelopment"> <li>App Development</li></Link>
            </ul>
            </li></Link>
            <Link to="/portfolio"><li>PORTFOLIO</li></Link>
            <Link to="/testimonial"> <li>TESTIMONIALS</li> </Link>
            <Link to="/contact"><li>CONTACT US</li></Link>
          </ul>
          </div>
        </div>
      </div>
    </>
  )
}
