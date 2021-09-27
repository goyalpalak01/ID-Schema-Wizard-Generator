import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Contact = ({formData,setForm,navigation}) => {
    const {email,phone } = formData;
    return (
        <Container maxWidth="xs">
            <h3>Contact</h3>
            <TextField
            label = "Email"
            name ="email"
            value = {email}
            onChange= {setForm}
            margin = "normal"
            variant = "outlined"
            autoComplete = "off"
            fullWidth
            
            />
            <TextField
            label = "Phone"
            name ="phone"
            type = "number"
            value = {phone}
            onChange= {setForm}
            margin = "normal"
            variant = "outlined"
            autoComplete = "off"
            fullWidth
            
            />
            <div style = {{marginTop:'1rem'}}>
            <Button color = "secondary" variant = "contained" style = {{marginRight:'1rem'}}onClick = {()=>navigation.previous()}>Back</Button>
            <Button color = "primary" variant = "contained" onClick = {()=>navigation.next()}>Next</Button>
            </div>

        </Container>
    )
}
