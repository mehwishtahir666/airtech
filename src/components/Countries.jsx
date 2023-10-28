import React from 'react'

import { BiSolidPhone} from "react-icons/bi";

 const Country = () => {
  return (
    <div className="countries">
          <div class="section-head col-sm-12">
          <h4><span>Offic</span>es</h4>
          <p>When you choose us, you'll feel the benefit of 10 years' experience of Web Development. Because we know the digital world and we know that how to handle it. With working knowledge of online, SEO and social media.</p>
        </div>
    <div className='country px-0  px-lg-5'>
        <div className="country-box col-12 col-sm-6 col-lg-4 ">
            <img src="/images/flag1.jpg" alt="" />
            <h1 className='name'>USA:</h1>
            <p className='pera'>5214f Diamond Heights Blvd,San Francisco, California,United States. 94131</p>
            <li><BiSolidPhone className='phone'/> <h1>+1 (618) 615 4906</h1></li>
        </div>
        <div className="country-box col-12 col-sm-6 col-lg-4">
            <img src="/images/flag5.jpg" alt="" />
            <h1 className='name'>United Kingdom:</h1>
            <p className='pera'>30 Charter Avenue, Coventry CV4 8GEPost code: CV4 8GFUnited Kingdom</p>
            <li><BiSolidPhone className='phone'/> <h1>+1 (618) 615 4906</h1></li>
        </div>
        <div className="country-box col-12 col-sm-6 col-lg-4">
            <img src="/images/download (1).png" alt="" />
            <h1 className='name'>Pakistan:</h1>
            <p className='pera'>P.O. Box 261036, Plot No. S 20119, Jebel Ali Free Zone (South), Dubai, United Arab </p>
            <li><BiSolidPhone className='phone'/> <h1>+1 (618) 615 4906</h1></li>
        </div>
        {/* <div className="country-box col-12 col-sm-6 col-lg-4">
        <img src="/images/flag2.jpg" alt="" />
            <h1 className='name'>Dubai:</h1>
            <p className='pera'>P.O. Box 261036, Plot No. S 20119, Jebel Ali Free Zone (South), Dubai, United Arab</p>
            <li><BiSolidPhone className='phone'/> <h1>+61 421 2589 76</h1></li>
        </div>
        <div className="country-box col-12 col-sm-6 col-lg-4">
            <img src="/images/flag4.jpg" alt="" />
            <h1 className='name'>Australia:</h1>
            <p className='pera'>7 Banjolina Circuit Craigieburn,Victoria VICSoutheastern Australia. 3064</p>
            <li><BiSolidPhone className='phone'/> <h1>+91 89209 44210</h1></li>
        </div>
        <div className="country-box col-12 col-sm-6 col-lg-4">
            <img src="/images/flag3.jpg" alt="" />
            <h1 className='name'>India</h1>
            <p className='pera'>Connect Enterprises, T-7, MIDC,Chhatrapati Sambhajinagar,Maharashtra, India. </p>
            <li><BiSolidPhone className='phone'/> <h1>+1 (618) 615 4906</h1></li>
        </div> */}
    </div>
    </div>
  )
}
export default Country