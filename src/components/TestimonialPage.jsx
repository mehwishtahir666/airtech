import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { TestiSec } from './TestiSection'
import { ServiceSlider } from './ServiceSlider'

export const TestimonialPage = () => {
  return (
    <>
      <div className='a-banner a-2'>
        <Nav/>
        <div className="textbox">
            <h1>What Our Clients Says</h1>
            <h1>About Airtech</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos officia architecto minima, quis labore nesciunt nam quae reiciendis minus impedit quam provident rem? Earum sint iusto officiis suscipit dolore!</p> 
            <button>Reviews</button>      
        </div>
    </div>
    <TestiSec/>
    <div className="last-t">
      <h1>Let's Boost Your Business</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Aliquam modi et dolore officiis laboriosam velit similique maiores, quis illum  qui sed iure iusto ipsam quasi explicabo mollitia? Perferendis, eum fuga!</p>
    </div>
    <ServiceSlider/>
    <Footer/>
    </>
  )
}
