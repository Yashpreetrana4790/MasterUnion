import React from 'react'

const Horizontalcard = ({ heading, para, img }) => {
  return (
    <section className='horizontal_card_wrapper'>
      <div className='icon'>
        <img src={img} alt='icon' />
      </div>
      <div className='card_text'>
        <h2>{heading}</h2>
        <p>{para}</p>
      </div>
    </section>
  )
}

export default Horizontalcard