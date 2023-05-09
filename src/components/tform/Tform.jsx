import "./tform.css";

import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Taskdetails() {

    const navigate = useNavigate()
    const [user,setUsers] = useState({
        name:"",
        type:"",
        ans:"",
        defaultflag:"",
        description:""

    });

    const onInputChange=(e)=>{
        
        setUsers({...user,[e.target.name]:e.target.value});
    };
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post(global.ngroklink + "/exercise",user , { headers:{'Authorization': localStorage.getItem('jwt token')}});
        navigate("/taskslist");
    };

    // const ValidationTextField = styled(TextField)({
    //     '& input:valid + fieldset': {
    //         borderColor: 'green',
    //         borderWidth: 2,
    //     },
    //     '& input:invalid + fieldset': {
    //         borderColor: 'red',
    //         borderWidth: 2,
    //     },
    //     '& input:valid:focus + fieldset': {
    //         borderLeftWidth: 6,
    //         padding: '4px !important',
    //     },
    // });

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
                        <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Task Name"
                                required
                                variant="outlined"
                                id="outlined-input-task-name"
                                size="normal"
                                helperText="Please enter the task name"
                                name="name"
                                value={user.name}
                                onChange={(e)=>onInputChange(e)}
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        
                        </Col>
                        <Col >
                        <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Task Type"
                                required
                                variant="outlined"
                                id="outlined-input-task-type"
                                size="normal"
                                helperText="Please enter the task type"
                                name="type"
                                value={user.type}
                                onChange={(e)=>onInputChange(e)}
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        
                        </Col>
                        <Col >
                        <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Answer"
                                required
                                variant="outlined"
                                id="outlined-input-answer"
                                size="normal"
                                helperText="Please enter the answer"
                                name="ans"
                                value={user.ans}
                                onChange={(e)=>onInputChange(e)}
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        </Col>
                        <Col>
                            <TextField  InputLabelProps={{
                                        style: { color: "#FFFDD0" },
                                    }}
                                    label="Default-Flag"
                                    required
                                    variant="outlined"
                                    id="outlined-input-default-flag"
                                    size="normal"
                                    helperText="Please enter '1 for Yes' or '0 for No'"
                                    name="defaultflag"
                                    value={user.defaultflag}
                                    onChange={(e)=>onInputChange(e)}
                                    inputProps={{
                                        style: {
                                            color: "white",
                                        }
                                    }}
                            />
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
                            <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Description"
                                required
                                variant="outlined"
                                id="outlined-input-description"
                                multiline
                                helperText="Please describe the task details"
                                name="description"
                                value={user.description}
                                onChange={(e)=>onInputChange(e)}
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
                    <button className="tsave" onClick={(e)=>onSubmit(e)}>
                        Save
                    </button>

                </div>
            </div>
        </div>
    );
}

