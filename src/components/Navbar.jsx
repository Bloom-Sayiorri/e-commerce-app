import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css';
import { FaBars, FaUser } from 'react-icons/fa6';

const Navbar = () => {

  const handleClick= () => {
    console.log("clicked");
  };

  return (
    <header className='header'>
        <div className='logo'>
            <img src='./logo.svg' alt='Logo' className='logo-img'/>
            <p className='logo-text'>Commerce-App</p>
        </div>
        <nav className='nav'>
            <NavLink to='/' className='links'>Home</NavLink>
            <NavLink to='/products' className='links'>Products</NavLink>
            <NavLink to='/cart' className='links'>Cart</NavLink>
            <NavLink to='/about' className='links'>About</NavLink>
        </nav>
        <div className="icons"> 
          <FaBars className="menu" onClick={handleClick}/>
          <FaUser  className="avatar" onClick={handleClick}/>
        </div>
    </header>
  )
}

export default Navbar