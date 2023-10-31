import React from 'react'
import "./ForMain.css"
import {AiOutlineSliders,AiOutlineArrowRight,AiOutlineFileSearch} from "react-icons/ai";

const ForMain = () => {
    return (
        <div className='ForMain'>
            <div className='background-box'>
                <div className='content-box'>
                    <div className='blue-circle'>
                        <AiOutlineSliders/>
                    </div>
                    <h3>Have Any Project <br /> On Minds ? </h3>
                    <div className='white-circle'>
                        <AiOutlineArrowRight/>
                    </div>
                </div>
                <div className='content-box'>
                    <div className='blue-circle'>
                    <AiOutlineFileSearch/>
                    </div>
                    <h3>Your Bussiness need <br />SEO Optimization ? </h3>
                    <div className='white-circle'>
                    <AiOutlineArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForMain