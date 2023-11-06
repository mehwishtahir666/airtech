import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";

export const Contact = () => {
  return (
    <div className='Contact'>
        <div class="section-head col-sm-12 mlkl">
          <h4><span>Contact</span> Us</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
        <div class="container">
      <div class="content">
        <div class="left-side">
          <div className="logo2">
          <img src="/images/Transperent1.png" alt="" />
          </div>
          <div class="address details">
            <div class="topic"><CiLocationOn className='icon-con' /> Address</div>
            <div class="text-one">College road</div>
            <div class="text-two">Township , Lahore</div>
          </div>
          <div class="phone details">
            <div class="topic"> <BsTelephone className='icon-con2'/> Phone</div>
            <div class="text-one">0301 0400924</div>
            <div class="text-two">0316 4979305</div>
          </div>
          <div class="email details">
            <div class="topic"> <BiEnvelope className='icon-con'/> Email</div>
            <div class="text-one">haiderhussnain387@gmail.com</div>
            <div class="text-two">info.haiderhussnain387@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Send us a <span>message</span></div>
          {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> */}
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div class="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div class="input-box message-box">
              <textarea placeholder="Enter your message"></textarea>
            </div>
            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
