import React from "react";
import {Container} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Checkbox } from '@material-ui/core';
import {FormControlLabel} from "@material-ui/core"




class Index extends React.Component{
constructor()
{
    super();
    this.state={
        attributes : [],
        fullNameClicked:false,
        dateOfBirthClicked:false,
        genderClicked:false,
        addressLine1Clicked:false,
        addressLine2Clicked:false,
        addressLine3Clicked:false,
        regionClicked:false,
        provinceClicked:false,
        cityClicked:false,
        zoneClicked:false,
        postalCodeClicked:false,
        emailClicked:false,
        phoneClicked:false,
        proofOfIdentityClicked:false,
        individualBiometricsClicked:false,
        additionalAttributes:false

    }
    
    

}
getAttribute(value,arg){
    let new_attributes = this.state.attributes;
    let clicked = this.state[arg];

    if(!new_attributes.includes(value))
    {
        new_attributes.push(value)


    }
    else
    {
        new_attributes.splice(new_attributes.indexOf(value),1);
    }
    
   
    this.setState({
        attributes:new_attributes,
        [arg]:!clicked
       
        
    })
    
    // console.log(this.state);
    
}

toggleAdditionalAttributes()
{   let value = this.state.additionalAttributes;
    
    value=!value;
    
    this.setState({additionalAttributes:value});
    
    
}

getNextPage = ()=>
{
    let final_attributes = this.state.attributes;
    let final_additionalAttributes = this.state.additionalAttributes;
    let data = {
                final_attributes:final_attributes,
                final_additionalAttributes:final_additionalAttributes
                };
    // console.log(data.final_additionalAttributes);
    this.props.getSteps(data);
}


render()
{
    
    //   console.log(this.state);
    return (
        
        
        <Container maxWidth = "lg" >
            <h1>Choose the form attributes from given options</h1>
            <Button color = {this.state.fullNameClicked?"secondary":"primary"} variant = "contained" value = "fullName" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("fullName","fullNameClicked")}>Full Name</Button>
           
            <Button color = {this.state.dateOfBirthClicked?"secondary":"primary"}  variant = "contained" value = "dateOfBirth" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("dateOfBirth","dateOfBirthClicked")}>Date of Birth</Button>
            
            <Button  color = {this.state.genderClicked?"secondary":"primary"} variant = "contained" value = "gender" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("gender","genderClicked")}>Gender</Button>
            <Button color = {this.state.addressLine1Clicked?"secondary":"primary"} variant = "contained" value = "addressLine1" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("addressLine1","addressLine1Clicked")}>Address Line 1</Button>
            <Button color = {this.state.addressLine2Clicked?"secondary":"primary"} variant = "contained" value = "addressLine2" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("addressLine2","addressLine2Clicked")}>Address Line 2</Button>
            <Button color = {this.state.addressLine3Clicked?"secondary":"primary"}  variant = "contained" value = "addressLine3" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("addressLine3","addressLine3Clicked")} >Address Line3</Button>
            <Button color = {this.state.regionClicked?"secondary":"primary"} variant = "contained" value = "region" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("region","regionClicked")}>Region</Button>
            <Button  color = {this.state.provinceClicked?"secondary":"primary"} variant = "contained" value = "province" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("province","provinceClicked")}>Province</Button>
            <Button  color = {this.state.cityClicked?"secondary":"primary"} variant = "contained" value = "city" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("city","cityClicked")}>City</Button>
            <Button color = {this.state.zoneClicked?"secondary":"primary"} variant = "contained" value = "zone" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("zone","zoneClicked")}>Zone</Button>
            <Button color = {this.state.postalCodeClicked?"secondary":"primary"} variant = "contained" value = "postalCode" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("postalCode","postalCodeClicked")}>Postal Code</Button>
            <Button color = {this.state.emailClicked?"secondary":"primary"} variant = "contained" value = "email" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("email","emailClicked")}>Email</Button>
            <Button color = {this.state.phoneClicked?"secondary":"primary"} variant = "contained" value = "phone" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("phone","phoneClicked")}>Phone</Button>
            <Button color = {this.state.proofOfIdentityClicked?"secondary":"primary"} variant = "contained" value = "proofOfIdentity" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("proofOfIdentity","proofOfIdentityClicked")}>Proof Of Identity</Button>
            <Button color = {this.state.individualBiometricsClicked?"secondary":"primary"} variant = "contained" value = "indiviualBiometrics" style = {{margin:"1rem"}} onClick = {()=>this.getAttribute("indiviualBiometrics","individualBiometricsClicked")}>Individual Biometrics</Button>
            <p>{`\n`}</p>
            <FormControlLabel  value = "yes" control = {<Checkbox/> }label = "Do you want Additional Attributes ?" onClick = {()=>this.toggleAdditionalAttributes()}/>
            <p>{'\n'}</p>
            <Button color = "primary" variant = "contained" onClick = {()=>this.getNextPage()}>Next</Button>

        </Container>
    );
}
} ;

export default Index;