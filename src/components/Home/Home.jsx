import React from 'react'
import { Banner } from '../Banner'
import { About } from '../About'
import { Services } from '../Services'
import { Testimonials } from '../Testimonials'
import { Whyus } from '../Whyus'
import Platforms from '../Awards'
import { Contact } from '../Contact'
import Country from '../Countries'
import { Footer } from '../Footer'
import Solutuions from '../solutions/solutions'
import Realstate from '../ServicesNew'
import ForMain from '../fmain/ForMain'

export const Home = () => { 
  return (
    <>
    <Banner/>
    <About/>
    <Solutuions/>
    <Realstate/>
    {/* <Services/> */}
    <Testimonials/>
    <Platforms/>
    <Contact/>
    <ForMain/>
    <Country/>
    <Footer/>
    </>
  )
}
