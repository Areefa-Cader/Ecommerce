import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand.png';
import bg_pic from '../Assets/pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';


const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={hand_icon} alt=""/>
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>

        <div className="latest-btn">
            <span>Latest Collection</span>
            <FontAwesomeIcon icon={faCircleArrowRight}  className='arrow-icon'/>
        </div>

      </div>
      <div className="right">
          <img src={bg_pic} alt="" />
      </div>
    </div>
  )
}

export default Hero