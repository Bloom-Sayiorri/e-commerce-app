import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import styles from'../styles/navbar.module.css';
import { FaBars, FaUser } from 'react-icons/fa6';

const Navbar = () => {

  const navigate = useNavigate();

  // const handleClick= () => {
  //   console.log("clicked");
  // };

  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <img src='./logo.svg' alt='Logo' className={styles.logoImg}/>
          <p className={styles.logoText}>Commerce-App</p>
        </div>
        <nav className={styles.nav}>
          <NavLink to='/' className={styles.links}>Home</NavLink>
          <NavLink to='/products' className={styles.links}>Products</NavLink>
          <NavLink to='/cart' className={styles.links}>Cart</NavLink>
          <NavLink to='/form' className={styles.links}>Form</NavLink>
          <NavLink to='/about' className={styles.links}>About</NavLink>
        </nav>
        <div className={styles.icons}> 
          <FaBars className={styles.menu} onClick={() => {navigate('/menu')}}/>
          <FaUser  className={styles.avatar} onClick={() => {navigate('/profile')}}/>
        </div>
    </header>
  )
}

export default Navbar