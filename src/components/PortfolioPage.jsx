import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import {AiOutlineStar } from "react-icons/ai";
import {AiFillStar} from "react-icons/ai"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3, },
];

const Projects = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6,]);

  return (
    <>
      <div className='projects'>
        <div className='heading-box'>
          <h1>Web Development Projects</h1>
          <p>Our team build real-world projects to put theories into the real world implimentaion.</p>
        </div>
        <div className='button-box'>
          <button>E-Commerce</button>
          <button>Blogg App</button>
          <button>Online Booking</button>
          <button>Traveling</button>
          <button>Education Website</button>
          <button>Marketing</button>
        </div>

        {/* ================================= */}


        <div className='card-box'>

          <Carousel breakPoints={breakPoints} >
            {items.map((item) => (

              <div className="card-1">
                <img src="/images/hloo3.jpg" alt="" />
                <h3>Project Name</h3>
                <small>HTML CSS</small>
                <p>E-Commerce</p>
                <p> services, and information to users worldwide, catering to various needs and interests.</p>
                <p className="icons">
                <AiFillStar className="clr-yellow"/>
                <AiFillStar className="icons clr-yellow"/>
                <AiFillStar className="icons clr-yellow"/>
                <AiOutlineStar className="icons"/>
                <AiOutlineStar className="icons"/>
                </p>
                <div className='button-div'>
                  <p className="button-p">VISIT WEBSITE</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

{/*  second */}

<div className='projects'>
        <div className='heading-box'>
          <h1>Mobiile Applications Projects</h1>
          <p>Our team build real-world projects to put theories into the real world implimentaion.</p>
        </div>
        <div className='button-box'>
          <button>Social Media apps</button>
          <button>Educational apps</button>
          <button>Utility apps</button>
          <button>Lifestyle apps</button>
          <button>Entertainment apps</button>
          <button>Food apps</button>
        </div>

        {/* ================================= */}


        <div className='card-box'>

          <Carousel breakPoints={breakPoints} >
            {items.map((item) => (

              <div className="card-1">
                <img src="/images/hloo3.jpg" alt="" />
                <h3>Project Name</h3>
                <small>HTML CSS</small>
                <p>E-Commerce</p>
                <p> services, and information to users worldwide, catering to various needs and interests.</p>
                <p className="icons">
                <AiFillStar className="clr-yellow"/>
                <AiFillStar className="icons clr-yellow"/>
                <AiFillStar className="icons clr-yellow"/>
                <AiOutlineStar className="icons"/>
                <AiOutlineStar className="icons"/>
                </p>
                <div className='button-div'>
                  <p className="button-p">VISIT WEBSITE</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

{/* ----third --------- */}

<div className='projects'>
        <div className='heading-box'>
          <h1>SEO</h1>
          <p>Our team build real-world projects to put theories into the real world implimentaion.</p>
        </div>
        <div className='button-box'>
          <button>Keywords</button>
          <button>SERPs</button>
          <button>title and hooks</button>
          <button>main & sub headings</button>
        </div>

        {/* ================================= */}


        <div className='card-box'>

          <Carousel breakPoints={breakPoints} >
            {items.map((item) => (

              <div className="card-1">
                <img src="/images/hloo3.jpg" alt="" />
                <h3>Project Name</h3>
                <small>HTML CSS</small>
                <p>E-Commerce</p>
                <p> services, and information to users worldwide, catering to various needs and interests.</p>
                <p className="icons">
                <AiFillStar className="clr-yellow"/>
                <AiFillStar className="icons clr-yellow"/>
                <AiFillStar className="icons clr-yellow"/>
                <AiOutlineStar className="icons"/>
                <AiOutlineStar className="icons"/>
                </p>
                <div className='button-div'>
                  <p className="button-p">VISIT WEBSITE</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

    </>
  )
}

export default Projects 