import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControlLabel, MuiThemeProvider, RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { SalutationTypes } from './SalutationTypes';

export const Contact = ({formData,setForm,navigation}) => {
    let {salutation } = formData;
    let buttonClicked = false;
    
    let isSalutation = (e)=>{
        salutation  = e.target.value;
        console.log(salutation);
    };
    let props = {formData,setForm,navigation};
    let getNextPage = (salutation) =>{
        switch(salutation)
       { case "Yes" :
            {
            buttonClicked = true;
            console.log("HI");
             
            }
        // case "No":
        //     {state.buttonClicked=true;
        //     return navigation.next();
        //     }
    }
    console.log(buttonClicked);
        
    }
    
    
    return (
        <Container maxWidth="xs">
            
            {   buttonClicked===false&&   
            <div>

                <p>Do you want salutation ?</p>
            <RadioGroup onChange = {(e)=>{isSalutation(e)}}>
                <FormControlLabel value = "Yes" control = {<Radio/>} label = "Yes"/>
                <FormControlLabel value = "No" control = {<Radio/>} label = "No"/>

            </RadioGroup>
            <div style = {{marginTop:'1rem'}}>
            <Button color = "secondary" variant = "contained" style = {{marginRight:'1rem'}}onClick = {()=>navigation.previous()}>Back</Button>
            <Button color = "primary" variant = "contained" onClick = {()=>getNextPage(salutation)}>Next</Button>

            
                 </div>
            </div>


            }
            {
                buttonClicked===true && <SalutationTypes {...props}/>
            }
           
            

        </Container>
    )
}
