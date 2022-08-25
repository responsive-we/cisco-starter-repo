import React from 'react'
import Card from './Card'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Cards() {
  return (
      <>
    <Carousel>
    <Card/>
    <Card/>
    </Carousel>
    </>
  )
}

export default Cards
