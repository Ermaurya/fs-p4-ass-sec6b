import React from 'react'
import'./home2.css'
const Home2 = () => {
  return (
    <div>
    
	<nav className="navbar background">
		<ul className="nav-list">
			<div className="logo">
				{/* <img src= "https.jpg" alt=''/> */}
				<h2>Logo</h2>
			</div>
			
		</ul>

		<div className="rightNav">
		<ul className="nav-list">
			<li><a href="#web">Home</a></li>
			<li><a href="#program">About</a></li>
			<li><a href="#course">Menu</a></li>
			<li><a href="#course">Product</a></li>
		</ul>

		</div>
	</nav>

	<section className="firstsection">
		<div className="box-main">
			<div className="firstHalf">
				<h1 className="text-big" id="web">Web Technology</h1>
				<p className="text-small">
					HTML stands for HyperText Markup Language.
					It is used to design web pages using a markup
					language. HTML is the combination of Hypertext
					and Markup language. Hypertext defines the
					link between the web pages. A markup language
					is used to define the text document within tag
					which defines the structure of web pages.
					HTML is a markup language that is used by the
					browser to manipulate text, images, and other
					content to display it in the required format.
				</p>


			</div>
		</div>
	</section>

	

    </div>
  )
}

export default Home2
