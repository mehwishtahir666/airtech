import React from 'react'
import { BsFillHouseGearFill , BsGraphDown } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { BiSolidBusiness} from "react-icons/bi";

export const Whyus = () => {
  return (
   <div className="why">
   <div class="feat pt-5 pb-5 bg-delay">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Everything You need in a</span> Business !</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
            <BsFillHouseGearFill className='icon-multi1'/>
            </span>
            <h6>Modern Design</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
              <FaLightbulb className='icon-multi2'/>
            </span>
            <h6>Quick Responsiveness</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
              <MdOutlineEventAvailable className='icon-multi3'/>
            </span>
            <h6>Technical Expertise</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
      
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
              <BiSolidBusiness className='icon-multi4'/>
            </span>
            <h6>Efficient Processes</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
      
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
              <SiCoinmarketcap className='icon-multi5'/>
            </span>
            <h6>Valuable Advisory</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
      
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
              <BsGraphDown className='icon-multi6'/>
            </span>
            <h6>Top-notch Expectation</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
      
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
              <BiSolidBusiness className='icon-multi4'/>
            </span>
            <h6>Timely Delivery</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
      
        <div class="col-lg-3 col-sm-6">
          <div class="item">
              <span class="icon feature_box_col_one no-bro">
            <BsFillHouseGearFill className='icon-multi1'/>
            </span>
            <h6>Project Managers</h6>
            <p>We use latest technology for the latest.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

   </div>
  )
}
