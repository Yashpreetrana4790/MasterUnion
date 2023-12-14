import React from 'react'
import '../App.css';

const Footer = () => {
  return (
    <footer className='footer' >

      <div className='container footer_wrapper'>

        <div className='logo_white'>
          <img alt='whitelogo' src="/whitelogo.svg" />
        </div>
        <div className='footer_links'>
          <div className='start'>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className='mid'>
            <p>Home</p>
            <p>Find a Mentor</p>
            <p>Book a Demo</p>
          </div>
          <div className='end'>

            <p>All Rights Reserved. Copyright.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer