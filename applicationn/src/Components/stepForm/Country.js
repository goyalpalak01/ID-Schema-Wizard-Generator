import React from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

export const Country = ({formData,setForm,navigation}) => {
    let {country} = formData;
    const useStyles = makeStyles({
        form :{
            minWidth:100
        },
        headingStyle :{
            fontFamily:"Roboto",
            fontSize:"50px"
            
        },
        questionStyle :{
    
        }
    });
    const classes =useStyles();
    let getCountry = (value) =>{
        country = value;
        console.log(country);
    }
    return (
        <Container maxWidth = {false} > 
            <p >Mosip ID Schema Form</p>
            <h2>Choose your country ?</h2>
            <FormControl className = {classes.form}>
                <InputLabel>Country</InputLabel>
            <Select onChange = {(e)=>getCountry(e.target.value)}>
                <MenuItem value = "India">India</MenuItem>
                <MenuItem value = "USA">USA</MenuItem>
                <MenuItem value = "Australia">Australia</MenuItem>
                <MenuItem value = "England">England</MenuItem>    
            </Select>
            </FormControl>
            <p>{`\n`}</p>
            
            <Button variant = "contained" color = "primary" style = {{marginTop :'1rem'}}
            onClick = {()=>navigation.next()}>Next</Button>
        </Container>
    )
}