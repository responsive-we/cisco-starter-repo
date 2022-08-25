import React from 'react'
import './Card.css'

const Card = ({heading})=>{
    return(
<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h3>Card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
    
        <h3>Card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="box">
      <div class="content">
    
        <h3>Card</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default Card