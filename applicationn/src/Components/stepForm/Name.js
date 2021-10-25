import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from "@material-ui/core/Button"
// import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Box";
import AddValidation from "./AddValidation";


class Name extends React.Component{
    constructor(props) {
        super(props);
        this.state = {attid:"fullName",
                    valid_name:"false" };
        this.handleInputChange = this.handleInputChange.bind(this);
      }
      
      handleInputChange(event) {
        
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      nextPageHandler = (event)=>{
        
        this.props.updateIterator();
      }
    render(){
        return(
            <Container maxWidth="md" >
            
                <h2>Full Name</h2>
                <Box borderColor="primary.main" 
                     borderTop={5} 
                     >
                    <div><br/></div>
                    <div>
                       
                        <TextField required id="outlined-required" label="Attribute ID" 
                        variant="outlined" value={this.state.attid} name="attid"
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <div>
                    <FormLabel>Do you want to put validation on Full Name?</FormLabel>
                    <RadioGroup row name="valid_name" value={this.state.valid_name} onChange={this.handleInputChange}>
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
                    </RadioGroup>
                    </div>
                    
                    <AddValidation attr_name="fullname" validation_required={this.state.valid_name}/>
                </Box>
                <Button variant = "contained" label = "Next" color = "primary"
                 onClick = {(event)=>this.nextPageHandler(event)}>Next</Button>
            </Container>
           
            
        );

    }
}
export default Name;
