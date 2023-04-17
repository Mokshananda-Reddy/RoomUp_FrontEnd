import "./tform.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.min.css';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { pink } from '@mui/material/colors';
import { yellow } from '@mui/material/colors';


export default function Taskdetails() {

    
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    const ValidationTextField = styled(TextField)({
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important',
        },
    });

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: "size-radio-button-demo",
        inputProps: { "aria-label": item },
      });


    return (
        <div className="Tdetailsmaincontainer">
            <div className="taskform">  
                <div className="PageHeading">
                    <span className="Thead">
                        Task Details
                    </span>
                </div>
                <div className="tformlayout"> 
                    <Row>
                        <Col >
                        <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Task Type"
                                required
                                variant="outlined"
                                id="outlined-input"
                                size="normal"
                                helperText="Please enter the task type"
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        </Col>
                        <Col >
                        <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Answer"
                                required
                                variant="outlined"
                                id="outlined-input"
                                size="normal"
                                helperText="Please enter the answer"
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        </Col>
                        <Col>
                        <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label" style={{ color: '#FFFDD0' }}>Default-Flag</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            helperText="Please enter in dd/mm/yyyy format"
                        >
                            <FormControlLabel value="female" style={{ color: '#2EEE9D' }} control={<Radio {...controlProps('a')} sx={{color: pink[600],
                            '&.Mui-checked': {color: pink[300],},}}/>} label="Yes" />
                            <FormControlLabel value="male" style={{ color: '#2EEE9D' }} control={<Radio {...controlProps('b')} sx={{color: yellow[600],
                            '&.Mui-checked': {color: yellow[300],},}}/>} label="No" />
                        </RadioGroup>
                        </FormControl>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Row>
                    <Col>
                        <Box
                            sx={{
                                '& > :not(style)': { borderWidth: 2, borderLeftWidth: 6 , width: '120ch' },
                            }}
                        >
                            <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Description"
                                required
                                variant="outlined"
                                id="outlined-input"
                                multiline
                                helperText="Please describe the task details"
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        </Box>
                    </Col>
                    </Row>
                    <br />

                </div>

                <div className="SaveButton">
                    <button className="tsave" >
                        Save
                    </button>

                </div>
            </div>
        </div>
    );
}

