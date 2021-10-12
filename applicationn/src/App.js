import {MultiStepForm} from './Components/MultiStepForm'
import { makeStyles } from '@material-ui/core/styles';
import Index from "./Components/Index";
import React from "react"
import {Name} from './Components/stepForm/Name'
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      steps:[],
      additionalSteps:false,
      firstPage:true
    }
  }
  
   getFormSteps = (data)=>{
      
    this.setState({
      steps:data.final_attributes,
      additionalSteps:data.final_additionalAttributes,
      firstPage:false
    });

  }
  render()
  {
    const props = {
        steps : this.state.steps.splice(),
        additionalSteps : this.state.additionalSteps
    }
    console.log(this.state);
  return (
    
    <div className="App">
        {/* <MultiStepForm/>  */}
        {this.state.firstPage && <Index  getSteps = {this.getFormSteps}/>}
        {!this.state.firstPage && <MultiStepForm props = {props}/>}
      
    </div>
  );
  }
}

export default App;
