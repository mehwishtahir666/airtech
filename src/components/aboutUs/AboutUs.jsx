import React from 'react'
import "./AboutUs.css"
import { Nav } from '../Nav'
import { About } from '../About'
import { AboutSlider } from '../AboutSlider'
import { Result } from '../realresults/results'
import { Footer } from '../Footer'
import { Whyus } from '../Whyus'
export const AboutUs = () => {
  return (
    <>
    <div className="aboutUs">
        <Nav/>
        <div className="ab-banner">
            <h1>DIGITAL MARKET</h1>
            <h1><span>AMPLIFIED</span></h1>
        </div>
        <Result/>
        <AboutSlider/>
        <Whyus/>
        <Footer/>
    </div>
    </>
  )
}
