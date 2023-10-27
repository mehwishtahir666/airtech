import React from 'react'
import "./appServices.css"
import img1 from "./images/mobile_infographic.png.webp" 
import img2 from "./images/mobile_bg.png.webp"


const AppServices = () => {
  return (
    <>
    <div className="AppServices">
      <div className='left-box1'>
        <div className='content-box1'> 
          <h3>IOS APPLICATIONS</h3>
          <p>"iOS app development involves creating mobile applications for Apple's devices, such as iPhones and iPads, using Swift or Objective-C programming languages."</p>
        </div>
        <div className='content-box2'>
        <h3>REACT NATIVE</h3>
          <p>"iOS app development involves creating mobile applications for Apple's devices, such as iPhones and iPads, using Swift or Objective-C programming languages."</p>
        </div>
        <div className='content-box3'>
        <h3>IONIC DEVELOPMENT</h3>
          <p>"iOS app development involves creating mobile applications for Apple's devices, such as iPhones and iPads, using Swift or Objective-C programming languages."</p>
        </div>
      </div>
      <div className='center-box1'>
        <div className='mobile'>
          <img src={img2} alt='' />
          <div className='mike'></div>
          <div className='screen'>
            <img src={img1} alt='' />
          </div>
          <div className='content-screen'>
            <h2>perform & inspire</h2>
            <p>
              "Performing with passion and excellence <br /> can inspire others to reach for their <br /> own greatness. Each remarkable act <br /> becomes a beacon of possibility,<br /> igniting the fire of potential in the <br /> hearts  of those who witness it Perform <br /> with  passion, inspire with purpose<br /> together."
            </p>
          </div>
          <div className='home-button'></div>
        </div>
      </div>
      <div className='left-box1'>
      <div className='content-box1'>
          <h3>ANDROID APPLICATIONS</h3>
          <p>"iOS app development involves creating mobile applications for Apple's devices, such as iPhones and iPads, using Swift or Objective-C programming languages."</p>
        </div>
        <div className='content-box2'>
        <h3>FLUTTER DEVELOPMENT</h3>
          <p>"iOS app development involves creating mobile applications for Apple's devices, such as iPhones and iPads, using Swift or Objective-C programming languages."</p>
        </div>
        <div className='content-box3'>
        <h3>UI UX DEVELOPMENT</h3>
          <p>"iOS app development involves creating mobile applications for Apple's devices, such as iPhones and iPads, using Swift or Objective-C programming languages."</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default AppServices
