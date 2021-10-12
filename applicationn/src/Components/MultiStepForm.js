import { Step } from 'material-ui';
import React from 'react'
import {useForm ,useStep} from 'react-hooks-helper';
import {Name} from './stepForm/Name';
import {Country} from './stepForm/Country';
import {Gender} from './stepForm/Gender';
import {Contact} from './stepForm/Contact';
import {Review} from './stepForm/Review';
import {Submit} from './stepForm/Submit';
import Salutation from './stepForm/Salutation'


const defaultData = {
    fullName:'Full Name',
    gender : [],
    salutation:'Maybe',
    typesOfSalutation:[],
    country : ''
};

const steps = [
    {id:'names'},
    {id:'country'},
    {id:'gender'},
    {id:'salutation'},
    {id:'review'},
    {id:'submit'},
]
export const MultiStepForm = () => {
    const [formData,setForm] = useForm(defaultData);
    const {step , navigation } = useStep({
        steps,
        initialStep:0
    });

    const props = {formData,setForm,navigation};
    switch(step.id)
    {   case 'country':
            return <Country {...props}/>
        case 'names':
            return <Name {...props } />;
        case 'gender':
            return <Gender {...props }/>;
        case 'salutation':
            return <Salutation {...props }/>;
        case 'review':
            return <Review {...props }/>;
        case 'submit':
            return <Submit {...props }/>;
    }

    console.log(steps);
    return (
        <div>
            
        </div>
        
    )
}
