import React from 'react';
import './solutions.css';
import { AiOutlineCheckCircle } from "react-icons/ai"

 const Solutuions = () => {
  return (
    <div className='solutions'>
    <h1>Solutions to Your</h1>
    <h1>Marketing Stress</h1>
    <div className="cont">    
        <div className="left">
           <div className="box-a">
             <li> <AiOutlineCheckCircle className='good'/></li>
               <ul>
                   <li className='li1'>Guaranteed Results</li>
                   <li>If your marketing company has failed to deliver a positive return on investment, it's time for a change. At GrowME, a positive ROI is guaranteed.</li>
               </ul>
           </div>
           <div className="box-a">
           <li> <AiOutlineCheckCircle className='good'/></li>
                <ul>
                   <li className='li1'>Dynamic Success Reporting</li>
                   <li>Tired of reports full of fluff? We provide monthly detailed and transparent reports focused on measurable KPIs.</li>
                </ul>
           </div>
           <div className="box-a">
           <li> <AiOutlineCheckCircle className='good'/></li>
                <ul>
                   <li className='li1'>Anything But Cookie-Cutter</li>
                   <li>You need a fresh and creative approach to marketing. We'll emphasize your competitive edge to ensure your brand stands out.</li>
                </ul>
           </div>
       </div>
       <div className="right">
       <div className="box-a box2">
       <li> <AiOutlineCheckCircle className='good'/></li>
               <ul>
                   <li className='li1'>Consistent Communication</li>
                   <li>If your marketing company is ghosting you, come to GrowME, where same-day communication is the standard.</li>
               </ul>
           </div>
           <div className="box-a box2">
           <li> <AiOutlineCheckCircle className='good'/></li>
               <ul>
                   <li className='li1'>Strategies for Growth</li>
                   <li>Your marketing strategy should align with your business goals while accounting for unique challenges.</li>
               </ul>
           </div>
           <div className="box-a box2">
           <li> <AiOutlineCheckCircle className='good'/></li>
               <ul>
                   <li className='li1'>Maximized Return</li>
                   <li>You shouldn't have to pay for marketing that doesn't work. Instead, pay only for value and results.</li>
               </ul>
           </div>
       </div>
       </div>

   </div>
  )
}

export default Solutuions