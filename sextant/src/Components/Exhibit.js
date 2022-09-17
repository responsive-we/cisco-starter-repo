import React from 'react'
import './Exhibit.css'

const Exhibit = () => {
  return (
    <>
     <main class="grid">
	<section class="content item1">
		<h1>Hover card Animation</h1>
		<p>By animating a few CSS paint & composite properties, we can create fun interactions on hover & focus</p> 
	</section>
	<section class="exhibitCard item2">
		<h2>Hover the exhibitCards</h2>
	</section>
	<section class="exhibitCard item3"></section>
	<section class="exhibitCard item4"></section>
	<section class="exhibitCard item5">
			<h2>because interactions make it more fun</h2>
	</section>
	<section class="exhibitCard item7"></section>
	<section class="exhibitCard item8">
			<h2>animating the shadow on the pseudo element makes it pop out</h2>
	</section>
	<section class="exhibitCard item9"></section>
	{/* <section class="exhibitCard item10"></section> */}
	<section class="exhibitCard item11">
		<h2>add a :focus state too!</h2>
	</section>
</main>
</>
  )
}

export default Exhibit
