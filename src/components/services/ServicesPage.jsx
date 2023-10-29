import React from 'react'
import Solutuions from '../solutions/solutions'
import { ServiceSlider } from '../ServiceSlider'
import { Result } from '../realresults/results'
import { Servicebanner } from '../ServiceBanner'
import { Footer } from '../Footer'

export const ServicesPage = () => {
  return (
    <>
    <Servicebanner/>
    <Result/>
    <Solutuions/>
    <ServiceSlider/>
    <Footer/>
    </>
  )
}
