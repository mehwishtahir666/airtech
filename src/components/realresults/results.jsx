import React from "react";
import "./results.css"
import image001 from "./images/image_investment.jpeg"
import image002 from "./images/image_seo-audit-2-600x400.webp"
import {BsCheck2Circle} from "react-icons/bs"
export const Result=()=>{
return(
    <>
    <div className="testimonials-div container-fluid extra-cross">
        <div className="testimonial_sub-div row h-100 w-100  d-flex align-items-center  ">
            <div className="testimonial_img-div border-0 border-success mt-1 aoa2">
                    <img className="testimonial_img " src={image001} alt="" />
              <img className="testimonial_img2" src={image002} alt="" />
            </div>
            <div className="testimonial_rightside  border-0 border-dark h-auto extra-cross4">
                <h1 className="testimonials_h1 text-start fs-1 fw-bolder mt-1 mx-3">
                We Deliver Real Results
                </h1>
                <p className="testimonial_p mt-3 mx-3 lh-lg extra-cross2 " >We are a preferred website developer for Agency-to-Agency and on-demand website development service. Since 2014, we have delivered over 15k projects to serve a wide range of businesses. Our team leverages the latest web development technologies to fulfill our promises,</p>
            <div className="testimonial_row row border-0 border-success m-auto mt-4  ">
                <div className="col border-0 border-success h-100 extra-cross4">
                <div className="testimonial_col_row1 row border-0 border-success mt-2">
                        <div className="col border-0 border-danger h-100 d-flex align-items-center extra-cross3">
                            < BsCheck2Circle className="t_icon fs-2 "/>
                            <h2 className="fs-5 mx-4 mt-1 extra-cross2">We implement marketing plans and strategies for long-term success</h2>

                        </div>
                       
                    </div>
                    <div className="testimonial_col_row1 row border-0 border-success mt-2">
                        <div className="col border-0 border-danger h-100 d-flex align-items-center extra-cross3">
                            < BsCheck2Circle className="t_icon fs-2 "/>
                            <h2 className="fs-5 mx-4 mt-1 extra-cross2">We have 10+ years of successful marketing partnerships under our belt</h2>

                        </div>
                       
                    </div>

                    <div className="testimonial_col_row1 row border-0 border-success mt-2">
                        <div className="col border-0 border-danger h-100 d-flex align-items-center extra-cross3">
                            < BsCheck2Circle className="t_icon fs-2"/>
                            <h2 className="fs-5 mx-4 mt-1 extra-cross2">On average, we’ve helped our clients achieve a 780% ROI</h2>
                        </div>
                       
                    </div>                    <div className="testimonial_col_row1 row border-0 border-success mt-2">
                        <div className="col border-0 border-danger h-100 d-flex align-items-center extra-cross3">
                            < BsCheck2Circle className="t_icon fs-2 "/>
                            <h2 className="fs-5 mx-4 mt-1 extra-cross2">We've created new opportunities for growth for all of our clients</h2>

                        </div>
                       
                    </div>
                  
                </div>
          
                
            </div>
            <div className="testimonial-btn  ">
           BOOK A FREE CONSULTANT
            </div>

           
            </div>
        </div>
    </div>
    </>
)
}

