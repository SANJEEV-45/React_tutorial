import React from 'react';
import Carage from './Carage';

const Car = (props) => {
    const {carInfo} = props;
    const {color, brand} = carInfo;
    const text = 'I am a '
  return (
    <div>
        <h2>{text}{color}{brand}</h2>
    </div>
  )
}

export default Car