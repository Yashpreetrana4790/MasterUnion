import React from 'react'
import '../App.css';
import Horizontalcard from '../elements/horizontalcard';



const MetricSliderFeature = () => {


  return (
    <div className='metric'>
      <div className='container metricslider_wrapper'>
        <div className='heading'>
          <div className='main_head_text'>
            <img src="/grid.gif" alt="icon_mentorship_section" />
            <h2>Why run a Mentorship Programme
              in your Institute?</h2>
          </div>
          <div className='light_text'>
            <p>
              Students with Mentors are:
            </p>
          </div>

        </div>
        <div className='percentage_grid'>
          <div className='circle_component'>

            <div className='circle'>
              <p className='percentage_value'>130%</p>
            </div>
            <div className='percentage_para'>
              <p >more likely to hold leadership positions</p>
            </div>

          </div>
          <div className='circle_component'>

            <div className='circle2'>
              <p className='percentage_value'>130%</p>
            </div>
            <div className='percentage_para'>
              <p >more likely to hold leadership positions</p>
            </div>

          </div>
          <div className='circle_component'>

            <div className='circle3'>
              <p className='percentage_value'>130%</p>
            </div>
            <div className='percentage_para'>
              <p >more likely to hold leadership positions</p>
            </div>

          </div>
          <div className='circle_component'>

            <div className='circle4'>
              <p className='percentage_value'>130%</p>
            </div>
            <div className='percentage_para'>
              <p >more likely to hold leadership positions</p>
            </div>

          </div>
        </div>
      </div>

      <div className='carousal '>
        <Horizontalcard heading="Better Placement Opportunities" para="Boost your Institute’s placement success with less effort by offering
         students personalized guidance and industry insights. This will help them build valuable networking 
         connections, 
        improving their chances for coveted job placements."
          img="/personbuild.png"
        />
        <Horizontalcard
          heading="Engage Your Alumni Base" para="Leverage your alumni network and get your biggest cheerleaders to mentor students. Tap into their expertise to enhance student’s learning experience and serve as a testament to the programme’s success."
          img="/nexus.png"
        />

      </div>
      <div className='curve_cta_wrapper2'>

      </div>
    </div>
  )
}

export default MetricSliderFeature