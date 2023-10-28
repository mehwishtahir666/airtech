import React from 'react'
import { RiSeoLine } from "react-icons/ri";
import { SiTaichigraphics } from "react-icons/si";
import { FaCode } from "react-icons/fa";

export const About = () => {
  return (
      <>

<section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                    <div class="section-head col-sm-12 logi"><h4>
                      <span>About</span> Airtech</h4>
                      <h2>We are Creative Tech Enthusiast working since 2020</h2>
                      </div>
                        {/* <div class="sec-title">
                            <span class="title">About AirTech</span>
                            <h2>We are Creative Tech Enthusiast working since 2020</h2>
                        </div> */}
                        <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit consequuntur, inventore aliquid quo facere officiis eveniet porro dolore ipsam consectetur eius dicta repellendus modi deleniti quos dignissimos , enim harum iste odit..</div>
                      <div class="text">
                        We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development . Here we are using html, html5, css, css3, jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe allustrator.
                      </div>
                        <div class="btn-box">
                          <button className='btn-ab'>Contact Us</button>
                            {/* <a href="#" class="theme-btn btn-style-one">Contact Us</a> */}
                        </div>
                    </div>
                </div>

                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                      <div class="author-desc">
                        {/* <h2>AIRTECH</h2> */}
                        <span>Marketing & Solutions</span>
                      </div>
                        <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images"><img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""/></a></figure>
                     
                    </div>
                </div>
              
            </div>
        </div>
    </section>
      
      {/* <div className="about">
    <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <div class="imgContainer">
      <img class="blueDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw3.svg"/>
       <img class="mainImg" src="/images/abok.jpg" />
      <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw2.svg"/>
    </div>  
    <div class="responsive-container-block textSide">
      <p class="text-blk heading">
        About <span>Us</span>
      </p>
      <p class="text-blk subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
      </p>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
        <SiTaichigraphics className='lll lol'/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            SEO
          </p>
          <p class="text-blk cardSubHeading">
            We will rank your website by Search Engine Optimization
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
        <RiSeoLine className='lll lol1'/> 
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            GRAPHIC DESIGNING
          </p>
          <p class="text-blk cardSubHeading">
          "Offering graphic design services: logos, branding, web design, print materials, and more."
          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <FaCode className='lll lol2'/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            WEB DEVELPER
          </p>
          <p class="text-blk cardSubHeading">
          "Professional web design services for stunning, user-friendly, and responsive online experiences."          </p>
        </div>
      </div>
      <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div class="cardImgContainer">
          <img class="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div class="cardText">
          <p class="text-blk cardHeading">
            Value
          </p>
          <p class="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <a>
        <button class="explore">
          Explore our Services
        </button>
      </a>
    </div>
    <img class="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg" />
  </div>
</div>
    </div> */}
    </>
  )
}
