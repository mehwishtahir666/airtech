import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { FcGlobe, FcRight } from "react-icons/fc";

export const Banner = () => {
  
  var Interval;
  function getData(){
    var countC=document.querySelector(".countC")
    var countP=document.querySelector(".countP")
    var countM=document.querySelector(".countM")
    let count1=0
    let count2=0
    let count3=0
    count1++
    count2++
    count3++
    if(count1>300){
      console.log(count1,"...")
        return
    }else{
        countC.innerHTML=count1
    }
    if(count2>200){
        return
    }else{
        countP.innerHTML=count2
    }
    if(count3>100){
        return
    }
   else{
        countM.innerHTML=count3
    }
 
}

window.onload=function(){
 Interval=setInterval(getData)
}
// useEffect(()=>{
//  const Interval=setInterval(getData)
// },[])

  return (
    <>
      <div className="banner">
        <Nav />
        {/* <div className="top-blind"></div> */}
        <div className="container-banner">
          <div className="left-banner">
            <h1>AirTech Marketing</h1>
            <h2>Create Your Success Business <FcGlobe/></h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, qui ut itaque  iure odit veritatis ipsam numquam tempore veniam! Modi!</p>
            <div className="tabs3">
              <div className="tab11">
                <h2 className='countC'>000</h2>
                <p>Projects</p>
              </div>
              <div className="tab11">
              <h2 className='countP' >000</h2>
                <p>Employes</p>
              </div>
              <div className="tab11">
              <h2 className='countM'>000</h2>
                <p>global Clients</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
