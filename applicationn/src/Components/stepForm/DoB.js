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
    prevPageHandler = (event)=>{
        this.props.updatePrevIterator();
    }
    
    render()
    {
        
        return (
            <Container>
            <h2>DoB</h2>
            <Button disabled={this.props.curStepIt===0} variant = "contained" label = "Previous" color = "primary"
                 onClick = {(event)=>this.prevPageHandler(event)}>Previous
            </Button>
            <Button style = {{marginLeft:"1rem"}} disabled={this.props.curStepIt=== this.props.totSteps-1} variant = "contained" label = "Next" color = "primary"
                 onClick = {(event)=>this.nextPageHandler(event)}>Next
            </Button>
            </Container>
        )
    }
}

export default DoB;