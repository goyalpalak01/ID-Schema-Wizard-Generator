import React from 'react';  
import { Component } from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormControlLabel, MuiThemeProvider, RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { SalutationTypes } from './SalutationTypes';
import {Name} from './Name';
import { Review } from './Review';

class Salutation extends Component{
    constructor()
    {
        super();
        this.state = {
            buttonClicked:false,
            salutation:""    
        }
        
        
    }
    

    
    render()
    {   console.log(this.state.salutation);
        const  formData = this.props.formData;
        const setForm = this.props.setForm;
        const navigation = this.props.navigation;
        let props = {formData,setForm,navigation};
        const  isSalutation = (e) =>{
            let sal = this.state.salutation;
            sal = e.target.value;
            this.setState({salutation:sal});
            
        };
        const getNextPage = () =>{
            this.setState({buttonClicked:true});
        };
        return (
        <Container maxWidth="xs">
            
            {   this.state.buttonClicked===false&&   
            <div>

                <p>Do you want salutation ?</p>
            <RadioGroup onChange = {(e)=>{isSalutation(e)}}>
                <FormControlLabel value = "Yes" control = {<Radio/>} label = "Yes"/>
                <FormControlLabel value = "No" control = {<Radio/>} label = "No"/>

            </RadioGroup>
            <div style = {{marginTop:'1rem'}}>
            <Button color = "secondary" variant = "contained" style = {{marginRight:'1rem'}}>Back</Button>
            <Button color = "primary" variant = "contained" onClick = {()=>getNextPage()}>Next</Button>

            
                 </div>
            </div>


            }
            {
                this.state.buttonClicked===true && this.state.salutation === "Yes" &&<SalutationTypes/>

            }
            {
                this.state.buttonClicked===true && this.state.salutation === "No" &&<Review {...props}/>
            }
           
            

        </Container>    
        );
    }
    
}
export default Salutation;