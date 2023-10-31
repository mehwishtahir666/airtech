import React from 'react'
import { BsCheck2 } from "react-icons/bs";

export const TestiSec = () => {
  return (
    <div className='testimonial'>
        <div className="left">
            <h1>Showcase all testimonials</h1>
            <h1>On single page</h1>
            <li> <BsCheck2/> Get genuine feedback from sustomers</li>
            <li> <BsCheck2/> Help shoopers make an informed </li>
            <li><BsCheck2/> purchase</li>
        </div>
        <div className="right">
            <div className="div"><div className="box">
               <div className="img"> <img src="/images/download.jpg" /></div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, adipisci.</p>
            </div>
            <div className="box">
               <div className="img"> <img src="/images/images.jpg" /></div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, adipisci.</p>
            </div>
            <div className="box">
               <div className="img"> <img src="/images/images111.jpg" /></div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, adipisci.</p>
            </div>
            <div className="box">
               <div className="img"> <img src="/images/download.jpg" /></div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, adipisci.</p>
            </div>
            <div className="box">
               <div className="img"> <img src="/images/images.jpg" /></div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, adipisci.</p>
            </div>
            <div className="box">
               <div className="img"> <img src="/images/images222.jpg" /></div>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, adipisci.</p>
            </div></div>
        </div>
    </div>
  )
}