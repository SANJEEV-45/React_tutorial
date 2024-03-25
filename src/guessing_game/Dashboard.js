import { useState } from 'react';
import Result from './Result';
import React from 'react'
const secretNumber = Math.floor(Math.random()*10)+1;

const Dashboard = () => {
    const [number,setNumber] = useState({}); 

    function handleBox(e){
        const value = e.target.value;
        setNumber(value);
    }
  return (
    <div className='Box'>
        <div className='Innerbox'>
            <h3>Please enter any number b/w 1 to 10</h3>
            <input type="number" name="number" onChange={handleBox}/>
        </div>
        <Result secretNum = {secretNumber} number={number}/>
    </div>
  )
}

export default Dashboard;