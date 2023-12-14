import React from 'react'
import '../App.css';


const Cta = () => {
  return (
    <div className='cta'>
      <div className='container cta_wrapper'>
        <div>
          <h1 className='cta_mainHeading'>
            Get on board to Mentorlo to start
            <br />
            1:1 Mentorship Today!
          </h1>
        </div>
        <div className='cta_utton_ne'>
          <button>Get In Touch  <span><img alt='arrow' src='/neastarrow.svg' /></span> </button>
        </div>
        <div className='curve_cta_wrapper'>

        </div>

      </div>
    </div>
  )
}

export default Cta