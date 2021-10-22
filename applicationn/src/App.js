import {MultiStepForm} from './Components/MultiStepForm'
import Index from "./Components/Index";
import React from "react"
import MultiStepForm2 from './Components/MutliStepForm2'


class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      steps:[],
      firstPage:true
    }
  }
  
   getFormSteps = (final_attributes)=>{
      final_attributes.sort(function(a,b){
        return (a[0]<b[0]?-1:1);
      });
      
    this.setState({
      steps:final_attributes,
      
      firstPage:false
    });

  }
  render()
  { console.log(this.state.steps);
    const props = {
        steps : this.state.steps.splice(),
        
    }
    console.log(this.state);
  return (
    
    <div className="App">
        
        { this.state.firstPage && <Index  getSteps = {this.getFormSteps}/>}
        {!this.state.firstPage && <MultiStepForm2 steps = {this.state.steps}/>}
      
    </div>
  );
  }
}

export default App;
