import React from 'react'

const Circlepercentage = ({ percentagevalue, para }) => {
  return (
    <section className='circle_component'>

      <div className='circle'>
        <p className='percentage_value'>{percentagevalue}</p>
      </div>
      <div className='percentage_para'>
        <p >{para}</p>
      </div>

    </section>

  )
}

export default Circlepercentage