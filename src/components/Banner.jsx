import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import { FcGlobe, FcRight } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";

export const Banner = () => {
  
  var Interval;
  let [count1,setCount1]=useState(0)
  let [count2,setCount2]=useState(0)
  let [count3,setCount3]=useState(0)


  function getData(){
    count1++
    count2++
    count3++
    if(count1>300){

      return false
    }else{
        setCount1(count1)
    }
    if(count2>200){
        return false
    }else{
        setCount2(count2)
    }
    if(count3>100){
        return false
    }
   else{
        setCount3(count3)
        return false
    }
 
}

useEffect(()=>{
  Interval=setInterval(getData)
},[])

  return (
    <>
      <div className="banner ">
        <Nav />
        <div className="container-banner">
          <div className="left-container">
             <p className='on1-p'>Trusted by 2M+ users <AiFillStar className='star star-one'/> <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar className='star'/> <AiFillStar/> </p>
          <h1>Websitee score is important , check your Website score now</h1>
          <p className='sp-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at magni cumque iusto reiciendis vero optio aut alias recusandae nobis culpa beatae temporibus reprehenderit, hic atque architecto ex sapiente assumenda suscipit ducimus aliquam dolore provident in. Voluptate quis est placeat?</p>
          <div className="input-banner">
            <input type="text" placeholder='which service ?' />
            <button>Search Now</button>
          </div>
          </div>
          <div className="right-container">
            <div className="inner-right-con"></div> 
          </div> 
        </div>
        <div className="tabs3">
              <div className="tab11">
                <h2 className='countC'>{count1} <span>+</span> </h2>
                <p>Projects</p>
              </div>
              <div className="tab11">
              <h2 className='countP' >{count2} <span>+</span> </h2>
                <p>Employes</p>
              </div>
              <div className="tab11">
              <h2 className='countM'>{count3} <span>+</span> </h2>
                <p>Clients</p>
              </div>
            </div> 
      </div>
    </>
  )
}








          {/* <div className="left-banner">
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
           */}