import React from 'react'
import Button from '@mui/material/Button';


class Content extends React.Component{
    constructor(){
        super();
        this.state = {color: 'blue',};
    }

    render(){
        return(
            <div>
                <h2>I'm changing to {this.state.color}</h2>
                <Button variant='contained' onClick={()=>{
                    this.setState( {color:"Red"} )
                }}>Button</Button>
            </div>
        )
    }
}

export default Content;