
// import {Link} from 'react-router-dom'
 const Nav=()=> {
    
  return (
    <div className="navbar">
      <div className="title">
        <h2>React NavBar</h2>
      </div>
      <div className="menubar">
        <a className='navlink' href="/">Home</a>
       
        <a className='navlink' href="./products">Theme</a>
        <a className='navlink' href="./NavBar.js">blog
        
        </a>
        
      </div>
    </div>
  );
}

export default Nav;