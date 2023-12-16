import React from 'react'
import '../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Features = () => {


  return (
    <section className='container features_wrapper'>
      <div className='head_text_feature'>
        <div className='features_heading'>
          <div className='frame_heading'>

            <img src='s3lick.gif' alt='tick icon' />
          </div>
          <h2>Features</h2>
        </div>
        <div className='para_feature'>
          Mentorlo is designed to empower professionals, organizations, and educational institutions by streamlining the mentorship process and simplifying event management.
        </div>
      </div>
      <div className='features_main'>
        <div className='main_feature_images'>
          <img src="/upcomingcalls.png" alt='imageoffeatures' />
        </div>
        <div className='main_feature_points'>

          <div className='pointscard_component'>
            <div className='point_number'>
              <div className='pointcircle'>
                <p>1</p>
              </div>
            </div>
            <div className='point_heading'>
              <h2>Quick snapshot to keep you informed & organized</h2>
            </div>
            <div className='point_para'>
              <p>
                The dashboard offers an overview of all the upcoming & past mentorship calls. Check the schedule, recent notifications, and important updates in one centralized location.
              </p>
            </div>

          </div>
          <div className='pointscard_component'>
            <div className='point_number'>
              <div className='pointcircle'>
                <p>2</p>
              </div>
            </div>
            <div className='point_heading'>
              <h2>Simplified process to find the right Mentor</h2>
            </div>
            <div className='point_para'>
              <p>
                Admin can access the billing history of all the mentors and decide the next steps on the basis of the
                mentee’s feedback, mentor’s earnings, and allotted, open & used slots.
              </p>
            </div>

          </div>









        </div>
      </div>
    </section>
  )
}

export default Features