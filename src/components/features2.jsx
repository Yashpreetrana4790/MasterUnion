import React from 'react'
import '../App.css';
import RightArrowCardcomponent from '../elements/RightArrowCardcomponent';


const Features2 = () => {
  return (
    <section className='feature_two'>

      <div className='container features2_wrapper'>
        <div className='features2_heading'>
          <h4>
            Shape Students’ Future.
          </h4>
          <h6>
            We’ve got the rest covered!
          </h6>
        </div>
        <div className='features2_mainsection'>
          <div className='arrow_components_wrapper'>
            <RightArrowCardcomponent />
            <RightArrowCardcomponent />
            <RightArrowCardcomponent />
          </div>
          <div className='shape_master_img_wrapper'>
            <img src="/master.png" alt='materimage_masterunion' />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Features2