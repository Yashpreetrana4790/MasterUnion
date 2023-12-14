import React from 'react'

const Horizontalcard = ({ heading, para }) => {
  return (
    <section className='horizontal_card_wrapper'>
      <div className='icon'>
        <img src='/personbuild.png' alt='icon' />
      </div>
      <div className='card_text'>
        <h2>Better Placement Opportunities</h2>
        <p>Boost your Institute’s placement success with less effort by offering students personalized guidance and industry insights. This will help them build valuable networking
          connections, improving their chances for coveted job placements.</p>
      </div>
    </section>
  )
}

export default Horizontalcard