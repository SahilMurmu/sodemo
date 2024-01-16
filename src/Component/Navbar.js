import React from 'react';
import "../Css/Navbar.css";
import logo from "../Assets/so_logo.png";

const Navbar = () => {
  return (
    <div className='navbarPage'>
        <div className='logoContainer'><img className='logo_so' src={logo} alt=""/></div>
        <div className='searchbarContainer'>Search Bar</div>
        <div className='linksContainer'>
            <a>About</a>
            <a>Products</a>
            <a>For Teams</a>
        </div>
    </div>
  )
}

export default Navbar