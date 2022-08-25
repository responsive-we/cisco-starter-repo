import React from 'react'
import img from '../logo.png'
import './Banner.css'
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
   </div>
    </>
  )
}

export default Banner