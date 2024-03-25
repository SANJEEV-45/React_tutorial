import { FormControl, FormControlLabel, Input, Radio } from '@mui/material';
import React from 'react'
import {useState} from 'react';

function Form() {
    const [inputs,setInputs] = useState({ });


 function handleForm(e){
    e.preventDefault();
    console.log(inputs);
 }

 function handleChange(e){
    const name = e.target.name;
    const value= e.target.value;
    setInputs((previousState) => { return {...previousState,[name]:value} });
 }
    return <form onSubmit={handleForm}>
             <label htmlFor="">Name</label>
             <input type="text" name="name" onChange={handleChange}/><br />
             <label htmlFor="">age</label>
             <input type="number" name="age" onChange={handleChange} /><br />
             <label htmlFor="">Hooby</label>
             <input type="text" name="Hobby" onChange={handleChange}/>
             <select name="country" id="" onChange={handleChange}>
                <option value="India">India</option><br />
                <option value="Australia">Australia</option>
                <option value="India">India</option>
             </select><br />
             <label for="Gender" >Gender</label>
             <input type="radio" name="Gender" value="Male" onChange={handleChange}/>Male
             <input type="radio"  name="Gender" value="Female" onChange={handleChange}/>Female 
             <br></br><input type='submit' name="submit" />
           </form>
}

export default Form