import React from 'react'
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';
import NavigationApps from 'material-ui/svg-icons/navigation/apps';
import { Checkbox } from '@material-ui/core';

import { FormControlLabel } from '@material-ui/core';

export const Gender = ({formData,setForm,navigation}) => {
    const {gender} = formData;
    let getGenderValues = (value) =>{
        if(!gender.includes(value))
            gender.push(value);
        else
            gender.splice(gender.indexOf(value),1);
        console.log(gender);
    };

    return (
        <Container maxWidth = {false}>
            <h1>Mosip ID Schema Form</h1>
            <h1>What are the options you want to provide for Gender Attribute ?</h1>
            <FormControlLabel  value = "Male" control = {<Checkbox/> }label = "Male" onChange = {(e)=>getGenderValues(e.target.value)}/><p>{`\n`}</p>
            <FormControlLabel  value = "Female" control = {<Checkbox/> }label = "Female" onChange = {(e)=>getGenderValues(e.target.value)}/><p>{`\n`}</p>
            <FormControlLabel  value = "Transgender" control = {<Checkbox/> }label = "Transgender" onChange = {(e)=>getGenderValues(e.target.value)}/><p>{`\n`}</p>
            <FormControlLabel  value = "Others" control = {<Checkbox/> }label = "Others" onChange = {(e)=>getGenderValues(e.target.value)}/><p>{`\n`}</p>
            <FormControlLabel  value = "Prefer not to say" control = {<Checkbox/> }label = "Prefer not to say" onChange = {(e)=>getGenderValues(e.target.value)}/><p>{`\n`}</p>
           
            <div style = {{marginTop:'1rem'}}>
            <Button color = "secondary" variant = "contained" style = {{marginRight:'1rem'}}onClick = {()=>navigation.previous()}>Back</Button>
            <Button color = "primary" variant = "contained" onClick = {()=>navigation.next()}>Next</Button>
            </div>
            
        </Container>
    )
}
