import React from "react"
import Name from "./stepForm/Name"
import AdditionalAttribute from "./stepForm/AdditionalAttribute"
import Address from "./stepForm/Address"
import City from "./stepForm/City"
import DoB from "./stepForm/DoB"
import Email from "./stepForm/Email"
import {Gender} from "./stepForm/Gender"
import IndividualBiometrics from './stepForm/IndividualBiometrics'
import Phone from "./stepForm/Phone"
import PoI from "./stepForm/PoI"
import PostalCode from "./stepForm/PostalCode"
import Province from "./stepForm/Province"
import Region from "./stepForm/Region"
import Zone from "./stepForm/Zone"
import {Review} from "./stepForm/Review"
import Submit from "./stepForm/Submit"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

class MultiStepForm2 extends React.Component{
constructor(props)
{
    super(props);
    this.state = {
        finalObject:{},
        curr_id:this.props.steps[0][0],
        steps:this.props.steps,
        stepIterator:0
    }
    
    
}
updateIterator = (flag) =>{
    let curr_iter = this.state.stepIterator;
    
    flag===0?curr_iter--:curr_iter++;
    
    this.setState({
        stepIterator:curr_iter,
        curr_id:this.state.steps[curr_iter][0]
    })
}

updateObject = (data) =>{
    console.log(data);
}

render()
{   
    let id = this.state.curr_id;
    if(this.state.stepIterator<this.state.steps.length)
   { 
    switch(id)
            {
                case 1 :
                     return (

                     <div style = {{display:"flex",flexDirection:"row",width:"auto"}}>
                          <div>
                         <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                         {this.state.steps.map((label) => (
                              <Step key={label[1]}>
                                   <StepLabel>{label[1]}</StepLabel>
                              </Step>
                         ))}
                         </Stepper>
                         </div>
                         <div>
                         <Name updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                         name = {this.state.steps[this.state.stepIterator][1]} curStepIt={this.state.stepIterator} totSteps={this.state.steps.length}/>
                    </div>
                    </div>
                     )
                case 2 :
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <DoB updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]} curStepIt={this.state.stepIterator} totSteps={this.state.steps.length}/>
                        </div>
                         )
                case 3:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Gender updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 4:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Address updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 5:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Region updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 6 :
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Province updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 7:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <City updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 8:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Zone updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 9:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <PostalCode updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 10:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Email updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 11:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <Phone updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 12:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <PoI updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                case 13:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <IndividualBiometrics updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
                default:
                    return (
                         <div style = {{display:"flex",flexDirection:"row"}}>
                             <Stepper activeStep={this.state.stepIterator} orientation="vertical">
                             {this.state.steps.map((label) => (
                                  <Step key={label[1]}>
                                       <StepLabel>{label[1]}</StepLabel>
                                  </Step>
                             ))}
                             </Stepper>
                             <AdditionalAttribute updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                             name = {this.state.steps[this.state.stepIterator][1]}/>
                        </div>
                         )
            }
    }
    else
    return <Review/>
    
}

}

export default MultiStepForm2;