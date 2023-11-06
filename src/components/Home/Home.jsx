import React from 'react'
import { Banner } from '../Banner'
import { About } from '../About'
import { Services } from '../Services'
import { Testimonials } from '../Testimonials'
import Platforms from '../Awards'
import { Contact } from '../Contact'
import Country from '../Countries'
import { Footer } from '../Footer'
import Realstate from '../ServicesNew'
import ForMain from '../fmain/ForMain'
import Solutions from '../solutions/solutions'

export const Home = () => { 
  return (
    <>
    <Banner/>
    <About/>
    <Solutions/>
    <Realstate/>
    <Services/>
    <Testimonials/>
    <Platforms/>
    <Contact/>
    <ForMain/>
    <Country/>
    <Footer/>
    </>
  )
}
