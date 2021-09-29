import { Step } from 'material-ui';
import React from 'react'
import {useForm ,useStep} from 'react-hooks-helper';
import {Name} from './stepForm/Name';
import {Gender} from './stepForm/Gender';
import {Contact} from './stepForm/Contact';
import {Review} from './stepForm/Review';
import {Submit} from './stepForm/Submit';


const defaultData = {
    fullName:'Full Name',
    gender : [],
    phone:'',
    email:''
};

const steps = [
    {id:'names'},
    {id:'gender'},
    {id:'contact'},
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
    {
        case 'names':
            return <Name {...props } />;
        case 'gender':
            return <Gender {...props }/>;
        case 'contact':
            return <Contact {...props }/>;
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
