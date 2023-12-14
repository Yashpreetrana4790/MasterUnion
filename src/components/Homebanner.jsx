import React from 'react'
import '../App.css';


const Homebanner = () => {
  return (
    <section>
      <div className=' home_banner_wrapper'>
        <div className='text_wrapper'>
          <h1>Run <span className='impactful'>Impactful</span>Mentorship<br /> Programmes at Your Institute</h1>
          <p>
            Drive professional growth and track the effectiveness of your Mentorship Programme with efficient strategies & optimal solutions.
          </p>
          <div className='button_wrapper'>
            <button> Book a demo</button>
          </div>

        </div>
        <div className='Image_wrapper'>
          <img src='/homebannerwoman.png' alt='imageofhomebanner' />
          <div className='name_div'>
            <span><img src="Ellipse.svg" alt='eclipse' /></span>
            <p className=''>Deepali Mishra</p>
          </div>

          <div className='star_div'>
            <img alt='stars' src='/starframe.png' />
          </div>
          <div className='homebanner_whitecard_p'>
            <p>Started an e-commerce store after College</p>
          </div>
          <div className='homebanner_whitecard_p2'>
            <p>Mentorship helped me find my calling and build a business out of it.</p>
          </div>
        </div>
      </div>
      <div className='curve'>
      </div>



    </section>
  )
}

export default Homebanner