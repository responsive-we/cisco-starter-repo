import React from 'react'
import img from '../logo.png'
import Card from './Card'
function Banner() {
  return (
    <>
     <div className="banner">
      <div className="banner_flex">
    <div className="banner_img">
      <img src={img} alt="" />
    </div>
    <h1 id="banner_text">Sextant</h1>
    </div>
    <div className="horizontal_line"></div>
    <h2>Best network diagnostic tool</h2>
   <Card/>
   </div>
    </>
  )
}

export default Banner