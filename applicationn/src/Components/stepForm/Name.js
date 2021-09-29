import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { FormControlLabel, RadioGroup } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const Name = ({formData,setForm,navigation}) => {
    const useStyles = makeStyles({
        headingStyle :{
            
        },
        questionStyle :{
            
        }
    });
    
    const classes =useStyles()
    console.log(classes);
    
    let {fullName} = formData;
    

    
    let setCategory = (value)=>{
        fullName = value;
        console.log(fullName);
        }   
    return (
        <Container maxWidth = {false}> 
            <h1>Mosip ID Schema Form</h1>
            <h1 >How would you like to take the complete name ?</h1>
            <RadioGroup onChange = {(e)=>setCategory(e.target.value)}>
                <FormControlLabel value = "Full Name" control = {<Radio/>} label = "Full Name"/>
                <FormControlLabel value = "First Name and Last Name" control = {<Radio/>} label = "First Name and Last Name"/>
                <FormControlLabel value = "First Name,Middle Name and Last Name" control = {<Radio/>} label = "First Name,Middle Name and Last Name"/>

                
            </RadioGroup>
            {/* <h3>How would you like to take the name?</h3>
             <TextField
            label = "FirstName"
            name ="firstName"
            value = {firstName}
            onChange= {setForm}
            margin = "normal"
            variant = "outlined"
            autoComplete = "off"
            fullWidth
            
            />
            <TextField
            label = "LastName"
            name ="lastName"
            value = {lastName}
            onChange = {setForm}
            margin = "normal"
            variant = "outlined"
            autoComplete = "off"
            fullWidth
            
            />
            <TextField
            label = "NickName"
            name ="nickName"
            value = {nickName}
            onChange = {setForm}
            margin = "normal"
            variant = "outlined"
            autoComplete = "off"
            fullWidth
            
            />  */}
            <Button variant = "contained" fullWidth color = "primary" style = {{marginTop :'1rem'}}
            onClick = {()=>navigation.next()}>Next</Button>
        </Container>
    )
}