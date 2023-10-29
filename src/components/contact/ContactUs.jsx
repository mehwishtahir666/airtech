import React from 'react'
import "./ContactUs.css"

export const ContactUs = () => {
  return (
    <>
    <div className='main_page'>
      <div className='text'>
        <h1>Let’s chat about your goals</h1>
        <p>Book a comprehensive consultation or strategy session with one of our experts. We’ll discuss your marketing needs and recommend solutions for your branding, website and digital marketing.</p>
        <p>**To create a safe environment for our clients, we practice social distancing for in-person consultations.</p>
      </div>
    </div>
    <div className='form_page'>
      <div className='form-box'>
        <input type="text" placeholder='FIRST NAME' />
        <input type="text" placeholder='LAST NAME' />
        <input className='email-inp' type="text" placeholder='EMAIL ADDRESS' />
        <input className='email-inp' type="text" placeholder='PHONE NUMBER' />
        <textarea className='text-area' placeholder='PLEASE DESCRIBE YOUR MARKETING NEEDS AND ANY BUDGETS'  rows="5"></textarea>
        <button>SUBMIT</button>
      </div>
    </div>
    </>
  )
}


