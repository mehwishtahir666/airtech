import React from 'react'
import { BiLogoFacebook ,BiLogoTwitter,BiLogoWhatsapp ,BiLogoInstagram,BiPaperPlane} from "react-icons/bi";


export const Footer = () => {
  return (
    <>
     <div class="footer">
        <ul class="on11">
            <li class="bold">office</li>
            <li >2700 Fire Mesa StLas <br/>
                Vegas, NV 89128</li>
            <li className='effect'>info@example.com</li>
            <li >+1 800 123 45 67</li>
        </ul>
        <ul class="on11">
            <li  className="bold">link</li>
            <li className='onee'>blog</li>
            <li className='onee'>about us</li>
            <li className='onee'>shop</li>
            <li className='onee'>contacts</li>
        </ul>
        <ul class="on11">
            <li  class="bold">social</li>
            <li><BiLogoFacebook className='i'/> <p className='onee'> facebook</p></li>
            <li> <BiLogoTwitter className='i'/>  <p className='onee'> twitter</p></li>
            <li><BiLogoWhatsapp className='i'/>  <p className='onee'> whatsapp</p></li>
            <li><BiLogoInstagram className='i'/>  <p className='onee'>instagram</p></li>
        </ul>
        <ul class="on11">
            <li  class="bold">news letter</li>
            <li> <button>subscribe <BiPaperPlane className='i'/></button> </li>
        </ul>
        <div class="last-bar"></div>
        <p>AirTechMarketingSolutions © 2023. All Rights Reserved.</p>
    </div>
    </>
  )
}
