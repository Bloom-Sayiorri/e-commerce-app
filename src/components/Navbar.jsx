import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/navbar.css';
import { FaBars, FaUser } from 'react-icons/fa6';

const Navbar = () => {

  const navigate = useNavigate();

  // const handleClick= () => {
  //   console.log("clicked");
  // };

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
            <NavLink to='/form' className='links'>Form</NavLink>
            <NavLink to='/about' className='links'>About</NavLink>
        </nav>
        <div className="icons"> 
          <FaBars className="menu" onClick={() => {navigate('/menu')}}/>
          <FaUser  className="avatar" onClick={() => {navigate('/profile')}}/>
        </div>
    </header>
  )
}

export default Navbar