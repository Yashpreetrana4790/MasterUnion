import React from 'react'
import '../App.css';


const Navbar = () => {
  return (
    <nav className='container'>
      <div className='navbar_wrapper'>
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt='logo' />
        <button >Login</button>
      </div>
    </nav>
  )
}

export default Navbar