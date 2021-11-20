import React from "react";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from "@material-ui/core";
import {Container} from "@material-ui/core"
import Button from "@material-ui/core/Button";
import { Checkbox } from '@material-ui/core';
import {FormControlLabel} from "@material-ui/core"
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';
import HelpIcon from '@material-ui/icons/Help';
class Index extends React.Component{
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
        
          let insert_element_id = this.state.selected_element_to_insert;
          let temp_initial_attributes = this.state.initial_attributes.slice();
          if( isNaN(insert_element_id))
          {
                console.log("No element selected");
                return;
          }
          let selected_attribute = temp_initial_attributes.filter(function(attribute){ return attribute[0]===insert_element_id})
          if(selected_attribute.length===0)
            return;
          let new_initial_attributes = temp_initial_attributes.filter(function(attribute){return attribute[0]!==insert_element_id})
          
          
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
        
        let delete_element_id = this.state.selected_element_to_delete;
        let temp_final_attributes = this.state.final_attributes.slice();
        if(isNaN(delete_element_id))
          {
                console.log("No element selected");
                return;
          }
        let selected_attribute = temp_final_attributes.filter(function(attribute){ return attribute[0]===delete_element_id})
        if(selected_attribute.length===0)
            return;
        let new_final_attributes = temp_final_attributes.filter(function(attribute){return attribute[0]!==delete_element_id})
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
        
        let new_attribute = [count+1,this.state.attributeName];
        let initial_final_attributes = this.state.final_attributes.slice();
        initial_final_attributes.push(new_attribute);
        this.setState({
            final_attributes:initial_final_attributes,
            attributeName:''
        })

    }
    getNextPage = (event)=>{
        let final_attributes = this.state.final_attributes;
        this.props.getSteps(final_attributes);
    };

    
    render()
    {   
        let  initial_list =this.state.initial_attributes.map((attribute)=>{
                    return(
                    <div>
                    <ListItem button selected = {this.state.selected_element_to_insert === attribute[0]}
                     onClick = {(event)=>this.handleSelectElement(event,attribute[0])}><ListItemText primary = {attribute[1]}/>
                     </ListItem>
                     <Divider />
                     </div>)
            })
            let final_list = this.state.final_attributes.map((attribute)=>{
                    return (
                    <div>
                    <ListItem button selected = {this.state.selected_element_to_delete===attribute[0]}
                     onClick = {(event)=>this.handleDeselectElement(event,attribute[0])}><ListItemText primary = {attribute[1]}/>
                     </ListItem>
                     <Divider />
                     </div>
                    )
            }) 
         return (
             <Container maxWidth ="md">
                 <center><h1>ID Schema Wizard Generator</h1></center>
                 <Box borderColor="primary.main" 
                     borderTop={5} 
                     
                     >
                         <div><h3>Choose the stock attributes you want to use for generating schema from below list. Also,
                             you can add your own attributes by checking the below additional attributes option. </h3></div>
                    
            <div style = {{display:"flex"}}>
                <div style = {{display:"flex",flexDirection:"column"}}>
                    <h3>Available Attributes
                    <Tooltip title="These are the list of stock attributes available. Choose the attributes and click on arrow to add them into schema." 
                    arrow>
                       <HelpIcon></HelpIcon>  
                    </Tooltip>
                    </h3>
                    
                    <Box border={2} borderColor="black">
                    <List style ={{width:"100%",maxHeight:"250px",overflow:"auto"}}>
                    
                        {initial_list}
                
                    </List>
                    </Box>
                </div>
                <div style ={{width:"30%",alignItems:"center",display:"flex",flexDirection:"column", marginTop:"50px"}}>
                <Tooltip title="Select" arrow>
                        <Button color = "primary" variant = "contained" value = "Select"
                         onClick = {(event)=>this.handleInsertElement(event)} style = {{margin:"1rem"}}> &gt;
                         </Button>
                </Tooltip>
                <Tooltip title="Remove" arrow>
                         <Button color = "secondary" variant = "contained" value = "Remove"
                         onClick = {(event)=>this.handleDeleteElement(event)} style = {{margin:"1rem"}}> &lt;
                        </Button>
                </Tooltip>
                <Tooltip title="Select All" arrow>
                         <Button color = "primary" variant = "contained" value = "Select All"
                         onClick = {(event)=>this.handleInsertAllElement(event)} style = {{margin:"1rem"}}> &gt;&gt;
                         </Button>
                </Tooltip>
                <Tooltip title="Remove All" arrow>
                         <Button color = "secondary" variant = "contained" value = "Remove All"
                         onClick = {(event)=>this.handleDeleteAllElement(event)} style = {{margin:"1rem"}}> &lt;&lt;
                        </Button>
                </Tooltip>

                    
                    
                </div>
                <div style = {{display:"flex",flexDirection:"column"}}>
                    <h3>Selected Attributes
                    <Tooltip title="This list shows the attributes you have selected/added." arrow>
                       <HelpIcon></HelpIcon>  
                    </Tooltip>
                    </h3>
                    <Box border={2} borderColor="black">
                    <List style = {{maxHeight:"250px",overflow:"auto"}}>
                        
                        {final_list}
                    </List>
                    </Box>
                </div>
            </div>
            <div>
            <FormControlLabel  value = "yes" control = {<Checkbox/> }label = "Do you want Additional Attributes ?"
             onClick = {()=>this.toggleAdditionalAttributes()}/>
             {this.state.additionalAttributes && 
                <div>
                    <TextField id = "attribute_name" label = "Attribute Name" variant = "outlined"
                     value = {this.state.attributeName} onChange = {(event)=>this.changeAttributeName(event)} />
                    <Tooltip title="Click on Add button to add the  custom attribute to 'Selected Attributes' list" arrow>
                    <Button color = "primary" variant = "contained" value = "Add Attribute" style ={{margin:"1rem"}} onClick = {(event)=>this.addAttributeHandler(event)}>
                        Add
                    </Button>
                    </Tooltip>
                    
                </div>
            }
            </div>
            <div><br/></div>
            </Box>
          
          <div><h3>Click on Next button to proceed with selected attributes:</h3></div>
            <div style ={{display:"block",width:"50%"}} >
                <Button color ="primary"  variant = "contained" onClick = {(event)=>this.getNextPage(event)}>Next</Button>
            </div>
            
            
            
            </Container>
        )
    }
}

export default Index;
