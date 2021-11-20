import React from "react"
import  Button  from "@material-ui/core/Button";
import {Container} from "@material-ui/core"
class DoB extends React.Component{
    constructor(props)
    {
        super(props);
    }
    nextPageHandler = (event,flag)=>{
        this.props.updateIterator(flag);
      }
    render()
    {
        
        return (
            <Container>
            <h2>DoB</h2>
            <Button disabled={this.props.curStepIt===0} variant = "contained" label = "Previous" color = "primary"
                 onClick = {(event)=>this.nextPageHandler(event,0)}>Previous
            </Button>
            <Button style = {{marginLeft:"1rem"}} disabled={this.props.curStepIt=== this.props.totSteps-1} variant = "contained" label = "Next" color = "primary"
                 onClick = {(event)=>this.nextPageHandler(event,1)}>Next
            </Button>
            </Container>
        )
    }
}

export default DoB;