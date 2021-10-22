import React from "react"
import Button from "@material-ui/core/Button"
import {Container} from "@material-ui/core"
class IndividualBiometrics extends React.Component{
    constructor(props)
    {
        super(props);
    }
    nextPageHandler = (event)=>{
        this.props.updateIterator();
      }
    render()
    {
        
        return (
            <Container>
            <h2>Individual Biometrics</h2>
            <Button variant = "contained" label = "Next" color = "primary"
                    onClick = {(event)=>this.nextPageHandler(event)}>Next</Button>
            </Container>
        )
    }
}

export default IndividualBiometrics;