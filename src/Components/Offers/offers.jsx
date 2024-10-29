import React from 'react';
import './offers.css';
import exclusiveImg from '../Assets/exclusive_image.png';

const offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on Best Selling product</p>
            <button>Check Now</button>
        </div>

        <div className="offer-right">
            <img src={exclusiveImg} alt=""/>
        </div>
    </div>
  )
}

export default offers