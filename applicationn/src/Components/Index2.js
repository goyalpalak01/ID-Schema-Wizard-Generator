import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from "@material-ui/core";
import {Container} from "@material-ui/core"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button";
import { width } from "@material-ui/system";
import { Checkbox } from '@material-ui/core';
import {FormControlLabel} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';



class Index2 extends React.Component{
    constructor()
    {
        super();
        this.state = {
            initial_attributes :[[1,'Full Name'],[2,'Date of Birth'],[3,'Gender'],[4,'Address'],[5,'Region'],[6,'Province'],
            [7,'City'],[8,'Zone'],[9,'Postal Code'],[10,'Email'],[11,'Phone'],[12,'Proof Of Identity'],[13,'Individual Biometrics']],
            final_attributes:[],
            selected_element_to_insert:NaN,
            selected_element_to_delete:NaN,
            attributeName:'',
            additionalAttributes:false
        }
    }
    handleSelectElement = (event,id)=>{

        this.setState({
            selected_element_to_insert:id
        })  
    };
    handleDeselectElement = (event,id)=>{
        this.setState({
            selected_element_to_delete:id
        })
    };
    handleInsertElement = (event) =>{
        console.log("Insert element");
          let insert_element_id = this.state.selected_element_to_insert;
          let temp_initial_attributes = this.state.initial_attributes.slice();
          if(insert_element_id === NaN)
          {
                console.log("No element selected");
                return;
          }
          let selected_attribute = temp_initial_attributes.filter(function(attribute){ return attribute[0]===insert_element_id})
          if(selected_attribute.length===0)
            return;
          let new_initial_attributes = temp_initial_attributes.filter(function(attribute){return attribute[0]!=insert_element_id})
          
          console.log(selected_attribute);
          console.log(new_initial_attributes);
          let new_final_attributes = this.state.final_attributes.slice();
          if(!new_final_attributes.includes(selected_attribute))
          {
            new_final_attributes.push(selected_attribute[0]);
            this.setState({
                initial_attributes:new_initial_attributes,
                final_attributes:new_final_attributes
            })
          }
          
    };
    handleDeleteElement = (event)=>{
        console.log("Delete Element");
        let delete_element_id = this.state.selected_element_to_delete;
        let temp_final_attributes = this.state.final_attributes.slice();
        if(delete_element_id === NaN)
          {
                console.log("No element selected");
                return;
          }
        let selected_attribute = temp_final_attributes.filter(function(attribute){ return attribute[0]===delete_element_id})
        if(selected_attribute.length===0)
            return;
        let new_final_attributes = temp_final_attributes.filter(function(attribute){return attribute[0]!=delete_element_id})
        console.log(selected_attribute);
        console.log(new_final_attributes);
        let new_initial_attributes = this.state.initial_attributes.slice();
        if(!new_initial_attributes.includes(selected_attribute))
          {
            new_initial_attributes.push(selected_attribute[0]);
            this.setState({
                initial_attributes:new_initial_attributes,
                final_attributes:new_final_attributes
            })
          }
    };
    handleInsertAllElement = (event) =>{
            let temp_initial_attributes = this.state.initial_attributes.slice();
            let temp_final_attributes = this.state.final_attributes.slice();
            let new_final_attributes = temp_initial_attributes.concat(temp_final_attributes);
            this.setState({
                initial_attributes:[],
                final_attributes:new_final_attributes
            
            })
    };
    handleDeleteAllElement = (event) =>{
        let temp_initial_attributes = this.state.initial_attributes.slice();
        let temp_final_attributes = this.state.final_attributes.slice();
        let new_initial_attributes = temp_initial_attributes.concat(temp_final_attributes);
        this.setState({
            initial_attributes:new_initial_attributes,
            final_attributes:[]
        })

    };
    toggleAdditionalAttributes = (event)=>{
        let previous_value = this.state.additionalAttributes;
        let current_value = !previous_value;
        this.setState({
            additionalAttributes:current_value

        })

    }
    changeAttributeName = (event)=>{
        this.setState({
            attributeName:event.target.value
        })
    }

    addAttributeHandler = (event)=>{
        let count = this.state.initial_attributes.length;
        count = count + this.state.final_attributes.length;
        console.log(count);
        let new_attribute = [count+1,this.state.attributeName];
        let initial_final_attributes = this.state.final_attributes.slice();
        initial_final_attributes.push(new_attribute);
        this.setState({
            final_attributes:initial_final_attributes
        })

    }
    getNextPage = (event)=>{
        let final_attributes = this.state.final_attributes;
        this.props.getSteps(final_attributes);
    };

    
    render()
    {   console.log(this.state.attributeName);
        let  initial_list =this.state.initial_attributes.map((attribute)=>{
                    return <ListItem button selected = {this.state.selected_element_to_insert === attribute[0]}
                     onClick = {(event)=>this.handleSelectElement(event,attribute[0])}><ListItemText primary = {attribute[1]}/>
                     </ListItem>
            })
            let final_list = this.state.final_attributes.map((attribute)=>{
                    return <ListItem button selected = {this.state.selected_element_to_delete===attribute[0]}
                     onClick = {(event)=>this.handleDeselectElement(event,attribute[0])}><ListItemText primary = {attribute[1]}/>
                     </ListItem>
            }) 
         return (
             <Container maxWidth = {false}>
                 <h1>Choose the attributes for the form </h1>
            <div style = {{display:"flex"}}>
                <div style = {{display:"flex",flexDirection:"column"}}>
                    <h2>Stock Attributes</h2>
                    <List style ={{width:"100%",maxHeight:"250px",overflow:"auto"}}>
                    
                        {initial_list}
                
                    </List>
                </div>
                <div style ={{width:"34%",alignItems:"center",display:"flex",flexDirection:"column"}}>
                        <Button color = "primary" variant = "contained" value = "Select"
                         onClick = {(event)=>this.handleInsertElement(event)} style = {{margin:"1rem"}}>Select</Button>
                         <Button color = "secondary" variant = "contained" value = "Remove"
                         onClick = {(event)=>this.handleDeleteElement(event)} style = {{margin:"1rem"}}>Remove</Button>
                         <Button color = "primary" variant = "contained" value = "Select All"
                         onClick = {(event)=>this.handleInsertAllElement(event)} style = {{margin:"1rem"}}>Select All</Button>
                         <Button color = "secondary" variant = "contained" value = "Remove All"
                         onClick = {(event)=>this.handleDeleteAllElement(event)} style = {{margin:"1rem"}}>Remove All</Button>

                    
                    
                </div>
                <div style = {{display:"flex",flexDirection:"column"}}>
                    <h2>Final Attributes</h2>
                    <List style = {{maxHeight:"250px",overflow:"auto"}}>
                        
                        {final_list}
                    </List>
                </div>
            </div>
            <div>
            <FormControlLabel  value = "yes" control = {<Checkbox/> }label = "Do you want Additional Attributes ?"
             onClick = {()=>this.toggleAdditionalAttributes()}/>
             {this.state.additionalAttributes && 
                <div>
                    <TextField id = "attribute_name" label = "Attribute Name" variant = "outlined"
                     value = {this.state.attributeName} onChange = {(event)=>this.changeAttributeName(event)} />
                    <Button color = "primary" variant = "contained" value = "Add Attribute" style ={{margin:"1rem"}} onClick = {(event)=>this.addAttributeHandler(event)}>
                        Add Attribute
                    </Button>
                    
                </div>
            }
            <div style ={{margin:"1rem",display:"flex",flexDirection:"column",width:"25%"}} >
                <Button color ="primary"  variant = "contained" onClick = {(event)=>this.getNextPage(event)}>Next</Button>
            </div>
            </div>
            </Container>
        )
    }
}

export default Index2;
