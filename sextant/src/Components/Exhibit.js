import React from 'react'
import Sass from 'sass'
import './Exhibit.scss'

const Exhibit = () => {
  return (
    <>
     <main class="grid">
	<section class="content item1">
		<h1>Hover Card Animation</h1>
		<p>By animating a few CSS paint & composite properties, we can create fun interactions on hover & focus</p> 
	</section>
	<section class="card item2">
		<h2>Hover the cards</h2>
	</section>
	<section class="card item3"></section>
	<section class="card item4"></section>
	<section class="card item5">
			<h2>because interactions make it more fun</h2>
	</section>
	<section class="card item7"></section>
	<section class="card item8">
			<h2>animating the shadow on the pseudo element makes it pop out</h2>
	</section>
	<section class="card item9"></section>
	<section class="card item10"></section>
	<section class="card item11">
		<h2>add a :focus state too!</h2>
	</section>
</main>
</>
  )
}

export default Exhibit
