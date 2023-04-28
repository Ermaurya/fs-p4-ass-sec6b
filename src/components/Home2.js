import React from 'react'
import'./home2.css'
import Footer from './Footer'
const Home2 = () => {
  return (
    <div>
    
	<nav className="navbar background">
		<ul className="nav-list">
			<div className="logo">
				{/* <img src= "https.jpg" alt=''/> */}
				<h2>Logo</h2>
			</div>
			<li><a href="#web">Home</a></li>
			<li><a href="#program">About</a></li>
			<li><a href="#course">Menu</a></li>
			<li><a href="#course">Product</a></li>
			<li><a href="#course">Education</a></li>
		</ul>

		<div className="rightNav">
		<ul className="nav-list">
			<li><a href="#web">Contact</a></li>
			<li><a href="#program">Login</a></li>
			<li><a href="#course">Signup</a></li>
			
		</ul>

		</div>
	</nav>

	<section className="firstsection">
		<div className="box-main">
			<div className="firstHalf">
				<h1 className="text-big" id="web">See value From Social</h1>
				<p className="text-small">
					which defines the structure of web pages.
					HTML is a markup language that is <br/>used by the
					browser to manipulate text, images, and other
					content to display it in the required format.
				</p>

                <button className='button btn'>Request</button>
			</div>
		</div>
	</section>

	
<Footer/>
    </div>
  )
}

export default Home2
