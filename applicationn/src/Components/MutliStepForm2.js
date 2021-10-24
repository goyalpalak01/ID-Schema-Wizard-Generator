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
updateIterator = () =>{
    let curr_iter = this.state.stepIterator;
    curr_iter++;
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
//     this.setState({
//         curr_id:this.state.steps[this.state.stepIterator][0]
//     })
    let id = this.state.curr_id;
    if(this.state.stepIterator<this.state.steps.length)
   { 
    switch(id)
            {
                case 1 :
                     return <Name updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 2 :
                     return <DoB updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 3:
                     return <Gender updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 4:
                     return <Address updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 5:
                     return <Region updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 6 :
                    return <Province updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                    name = {this.state.steps[this.state.stepIterator][1]}/>
                case 7:
                     return <City updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 8:
                     return <Zone updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 9:
                     return <PostalCode updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 10:
                     return <Email updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 11:
                     return <Phone updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 12:
                     return <PoI updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                case 13:
                     return <IndividualBiometrics updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                     name = {this.state.steps[this.state.stepIterator][1]}/>
                default:
                     return <AdditionalAttribute updateIterator = {this.updateIterator} updateObject = {this.updateObject}
                name = {this.state.steps[this.state.stepIterator][1]}/>
            }
    }
    else
    return <Review/>
    
}

}

export default MultiStepForm2;