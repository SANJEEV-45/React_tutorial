import React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';

const Bike = () => {

    const [state,setState] = useState({
        name:"Honda",
        color : 'Black',
        model  :"City",
        mileage : 80
    })

    function updateBike(){
        setState((previousState)=> ({...previousState, mileage:78}) );
    }

  return (
    <>
     <p>Name: {state.name}</p>
     <p>Color: {state.color}</p>
     <p>Model: {state.model}</p>
     <p>mileage : {state.mileage}</p>
     <Button variant="contained" onClick={updateBike}>Change</Button>
    </>
  )
}

export default Bike;