import React from 'react'
import { Container  } from '@material-ui/core'
import { Accordion } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import {AccordionDetails} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ListItemText } from '@material-ui/core';
// import { IconButton } from '@material-ui/core/IconButton';
// import EditIcon from '@material-ui/icons-material/Edit';

export const Review = ({formData,navigation}) => {
    const {firstName,lastName,nickName,email,phone,address,state,zip,city} = formData;
    const {go}  = navigation;
    return (
        
        <Container maxWidth="sm">
            <h3>Review</h3>
            <RenderAccordion summary = "Names" go = {go} details = {[
                {'First Name':firstName},
                {'Last Name' : lastName},
                {'Nick Name':nickName}
            ]}/>
             <RenderAccordion summary = "Address" go = {go} details = {[
                {'Address':address},
                {'State' : state},
                {'City':city},
                {'Zip' : zip}
            ]}/>
             <RenderAccordion summary = "Contact" go = {go} details = {[
                {'Phone':phone},
                {'Email' : email}
                
            ]}/>
            <Button color = "primary" variant = "contained" onClick = {()=>go('submit')} style = {{marginTop:'1.5rem'}}>Submit</Button>
        </Container>
    )
};
export const RenderAccordion = ({summary,details,go}) =>(
    <Accordion>
        <AccordionSummary>
            {summary}
        </AccordionSummary>
        <AccordionDetails>
            <div>
                {details.map((data,index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue = data[Object.keys(data)[0]];

                    return <ListItemText key = {index}>{objKey} : {objValue}</ListItemText>
                })}
                
                
            </div>
            <Button color = "primary" variant = "contained" onClick = {()=>{go(summary.toLowerCase())}} style = {{marginTop:'1rem',marginLeft:'2rem'}}> Edit</Button>
        </AccordionDetails>
    </Accordion>
);
