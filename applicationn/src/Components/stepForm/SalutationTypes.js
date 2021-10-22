import React from 'react'
import { Container } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'

export const SalutationTypes = ({formData,setForm,navigation}) => {
    console.log("Hello");
    let typesOfSalutation = formData;
    let getSalutationValues = (value) =>{
        if(!typesOfSalutation.includes(value))
        typesOfSalutation.push(value);
        else
        typesOfSalutation.splice(typesOfSalutation.indexOf(value),1);
        console.log(typesOfSalutation);
    };
    

    return (
     <Container maxWidth={false}>
         <h1>What are the options you want to provide for Salutations ?</h1>
         
         <FormControlLabel  value = "Mr." control = {<Checkbox/> }label = "Mr." onChange = {(e)=>getSalutationValues(e.target.value)}/><p>{`\n`}</p>
         <FormControlLabel  value = "Ms." control = {<Checkbox/> }label = "Ms." onChange = {(e)=>getSalutationValues(e.target.value)}/><p>{`\n`}</p>
         <FormControlLabel  value = "Mrs." control = {<Checkbox/> }label = "Mrs." onChange = {(e)=>getSalutationValues(e.target.value)}/><p>{`\n`}</p>  
         <div style = {{marginTop:'1rem'}}>
         <Button color = "secondary" variant = "contained" style = {{marginRight:'1rem'}}onClick = {()=>navigation.previous()}>Back</Button>
         <Button color = "primary" variant = "contained" onClick = {()=>navigation.next()}>Next</Button>
         </div>  
     </Container>   
    )
}