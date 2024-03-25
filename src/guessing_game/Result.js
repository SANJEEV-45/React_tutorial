import React from 'react';

const Result = ({number, secretNum}) => {

    let msg;
    if(number){
      if(number > secretNum){
         msg="Higher";
      }
      else if(number < secretNum){
        msg="Lower";
      }
      else if(number == secretNum){
         msg="You are correct";
      }

    }
    else{
        msg="Please enter the number";
    }
  return (
    <div><h3>You have guessed {msg}</h3></div>
  )
}

export default Result