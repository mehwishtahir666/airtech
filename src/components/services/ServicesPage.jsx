import React from 'react'
import Solutuions from '../solutions/solutions'
import { ServiceSlider } from '../ServiceSlider'
import { Result } from '../realresults/results'
import { Servicebanner } from '../ServiceBanner'
import { Footer } from '../Footer'
import { AboutCopy } from '../AboutCopy'

export const ServicesPage = () => {
  return (
    <>
    <Servicebanner/>
    <AboutCopy/>
    <Solutuions/>
    <ServiceSlider/>
    <Footer/>
    </>
  )
}
