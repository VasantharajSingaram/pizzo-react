import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

export default function Navbar() {
  return (
    <div>
    <nav className="navbar bg-dark fixed-top">
    <div className="container-fluid">
      <a className="d-flex navbar-brand">
        <img style={{margin: "0 10px 0 0"}} src="/icons8-pizza-100.png" alt="pizzo-Logo" width="30" height="30" class="d-inline-block align-text-top" />
        Pizzo
      </a>
      <div className='link-container links'>
      <Link className='l1' to={'/home'}>Home</Link>
      <Link className='l2' to={'/cart'}> Cart</Link>
     
      </div>
    </div>
  </nav>
    </div>
  )
}
