import React from 'react'
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';

class AddValidation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {l_min:3,
                      l_max:50,
                      spl_char:"false",
                    special_char_arr:[]};
        this.handleInputChange = this.handleInputChange.bind(this);
        
      }
      handleInputChange(event) {
        
        this.setState({
          [event.target.name]: event.target.value
        });
        this.props.parentCallback(event.target.value,event.target.name);
      }
      names = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '*'
      ];
      render(){
        // let display;
        // if(this.props.attr_name==="fullname" && this.props.validation_required==="true"){
        //     display = <h1>Hi validation is required</h1>;
        // }
        //console.log(this.state.special_char_arr);
        return(
          
          <div>
            <div><br/></div>
            {this.props.attr_name==="fullname" && this.props.validation_required==="true" &&
            <React.Fragment>
            
            <TextField type="number" id="minlen" label="Minimum length" 
                        variant="outlined" value={this.state.l_min} name="l_min"
                        onChange={this.handleInputChange}
                        />
            <TextField type="number" id="maxlen" label="Maximum length" 
                        variant="outlined" value={this.state.l_max} name="l_max"
                        onChange={this.handleInputChange}
                        />
            <div>
            <FormLabel>Are special characters allowed?</FormLabel>
            <RadioGroup row name="spl_char" value={this.state.spl_char} onChange={this.handleInputChange}>
                        <FormControlLabel value="false" control={<Radio />} label="No" />
                        <FormControlLabel value="true" control={<Radio />} label="Yes" />
            </RadioGroup>
            </div>
            {this.state.spl_char==="true" &&
            <React.Fragment>
              <InputLabel id="demo-mutiple-checkbox-label">Select all the special characters allowed:</InputLabel>
              <Select
              name="special_char_arr"
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={this.state.special_char_arr}
              onChange={this.handleInputChange}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}
              // MenuProps={MenuProps}
              >
              {this.names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.special_char_arr.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
          ))}
              </Select>
            </React.Fragment>
            
            }
            
            
            </React.Fragment>
        
            }
          </div>
          
        );
      }
    
}
export default AddValidation;