import React from 'react'

import { FcSearch , FcPicture ,FcMultipleDevices,FcBullish } from "react-icons/fc";

export const Services = () => {
  return (
    <>
    <div class="page">
    <div class="section-head col-sm-12 mtttt">
    <h4><span>Our</span> Services</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>      
      <div class="pcss3t pcss3t-effect-scale pcss3t-theme-1">
        <input type="radio" name="pcss3t" checked  id="tab1"class="tab-content-first"/>
        <label for="tab1"><i class="icon-bolt"></i>SEO <FcSearch className='label-i icon-multi00'/> </label>
        
        <input type="radio" name="pcss3t" id="tab2" class="tab-content-2"/>
        <label for="tab2"><i class="icon-picture"></i>Android / IOS <FcPicture className='label-i'/> </label>
        
        <input type="radio" name="pcss3t" id="tab3" class="tab-content-3"/>
        <label for="tab3"><i class="icon-cogs"></i>Web Development <FcMultipleDevices className='label-i'/> </label>
        
        <input type="radio" name="pcss3t" id="tab5" class="tab-content-last"/>
        <label for="tab5"><i class="icon-globe"></i> MARKETING <FcBullish className='label-i'/> </label>

        <input type="radio" name="pcss3t" id="tab5" class="tab-content-last"/>
        <label for="tab5"><i class="icon-globe"></i> MARKETING <FcBullish className='label-i'/> </label>

        <ul>
          <li class="tab-content tab-content-first typography">
            <div className="left-service">
            <h1>SEO <FcSearch className='icon-multi00'/></h1>
            <p>Serbian-American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electrical supply system.</p>
            <p>Tesla started working in the telephony and electrical fields before emigrating to the United States in 1884 to work for Thomas Edison. He soon struck out on his own with financial backers, setting up laboratories/companies to develop a range of electrical devices. His patented AC induction motor and transformer were licensed by George Westinghouse, who also hired Tesla as a consultant to help develop an alternating current system . </p>
            </div>
          <div className="right-service">
            <img src="/images/ui-1.jpg" alt="" />
          </div>
          </li>
          
          <li class="tab-content tab-content-2 typography">
            <div className="left-service">
            <h1>Android / IOS <small>Mobile Apps</small> <FcPicture/> </h1>
            <p>Serbian-American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electrical supply system.</p>
            <p>Tesla started working in the telephony and electrical fields before emigrating to the United States in 1884 to work for Thomas Edison. He soon struck out on his own with financial backers, setting up laboratories/companies to develop a range of electrical devices. His patented AC induction motor and transformer were licensed by George Westinghouse, who also hired Tesla as a consultant to help develop an alternating current system . </p>
            </div>
          <div className="right-service">

          </div>
          </li>
          
          <li class="tab-content tab-content-3 typography">
            <div className="left-service">
            <h1>WEBSITES <FcMultipleDevices/></h1>
            <p>Serbian-American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electrical supply system.</p>
            <p>Tesla started working in the telephony and electrical fields before emigrating to the United States in 1884 to work for Thomas Edison. He soon struck out on his own with financial backers, setting up laboratories/companies to develop a range of electrical devices. His patented AC induction motor and transformer were licensed by George Westinghouse, who also hired Tesla as a consultant to help develop an alternating current system . </p>
            </div>
            <div className="right-service">

            </div>
            </li>
          
          <li class="tab-content tab-content-last typography">
              <div className="left-service">
              <h1> MARKETING <FcBullish/></h1>
            <p>Serbian-American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electrical supply system.</p>
            <p>Tesla started working in the telephony and electrical fields before emigrating to the United States in 1884 to work for Thomas Edison. He soon struck out on his own with financial backers, setting up laboratories/companies to develop a range of electrical devices. His patented AC induction motor and transformer were licensed by George Westinghouse, who also hired Tesla as a consultant to help develop an alternating current system . </p>
            </div>
          <div className="right-service">

          </div>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}
