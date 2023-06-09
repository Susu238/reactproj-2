import React ,{useState} from 'react';
import logo from '../images/دهب.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../Components/styles/Navbar.css';
import {Link} from "react-router-dom";
function Navbar (){
  const[openLinks,setOpenLinks] = useState(false)
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return( 
  <div className='navbar'>
    <div className='leftSide' id={openLinks ? "open" : "close"}>
      <img src={logo} alt='logo'/>
      <div className='hiddenLinks'>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>

      </div>
    </div>
    <div className='rightSide'>
      <Link to='/'>Home</Link>
      <Link to='/Menu'>Menu</Link>
      <Link to='/About'>About</Link>
      <Link to='/Contact'>Contact</Link>
      <button onClick={toggleNavbar}>
      <ReorderIcon  />

      </button>


    </div>
  </div>
  )
}

export default Navbar;




