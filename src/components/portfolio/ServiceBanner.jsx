import React from 'react'
import { BsPlayFill} from "react-icons/bs";
import { Nav } from '../Nav';

export const PortfolioBanner = () => {
  return (
    <>
    <div className='portfoliobanner'>
        <Nav/>
        <div className="inin">
        <h1>YOU CAN TRUST 10+ YEARS OF EXPERIENCE MAKING</h1>
        <h1>SUCCESSFULL WEBSITES!</h1>
        <button><BsPlayFill/></button>
        </div>
    </div>
    </>
  )
}
