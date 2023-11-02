import React from 'react'
import Seo from "./seo/seo"
import { Nav } from './Nav'
import { Footer } from './Footer'
export const WebdevelopmentService = () => {
  return (
    <>
    <div className="navD">
    <div className='a-banner'>
        <Nav/>
        <div className="textbox">
            <h1>Web Development</h1>
            <h1>Search Engine Optimization</h1> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos officia architecto minima, quis labore nesciunt nam quae reiciendis minus impedit quam provident rem? Earum sint iusto officiis suscipit dolore!</p> 
            <button>Learn More</button>      
        </div>
    </div>
    </div>
    <Seo/>
    <Footer/>
    </>
  )
}