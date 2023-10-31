import React from 'react'
import {AiFillEye} from "react-icons/ai";

const Projects = () => {
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
        <div className='card-box'>

          <div className="card-1 card-one">
            <img src="/images/hloo1.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src="/images/hloo3.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src="/images/hloo2.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src="/images/hloo4.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1 card-one">
            <img src="/images/hloo1.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src="/images/hloo2.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src="/images/hloo3.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>View</button>
              <button>Details</button>
            </div>
          </div>
          <div className="card-1">
            <img src="/images/hloo4.jpg" alt="" />
            <h3>Project name</h3>
            <small>HTML CSS</small>
            <p>in frontend</p>
            <div className='button-div'>
              <button>{AiFillEye} View</button>
              <button>Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects