import "./pform.css";

import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Patientdetails() {

    const navigate = useNavigate()
    const [user,setUsers] = useState({
        name:"",
        dob:"",
        username:"",
        password:"",
        gender:"",

    });

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value});
    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post(global.ngroklink + "/patient",user);
        await axios.post(global.ngroklink + '/login', {"username":user.username, "role":"patient", "password" : user.password });
        navigate("/patientslist");
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
        <div className="Pdetailsmaincontainer">
            <div className="patientform">  
                <div className="PageHeading">
                    <span className="Phead">
                        Patient Details
                    </span>
                </div>
                <div className="pformlayout"> 
                    <Row>
                        <Col >
                        <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Name"
                                required
                                variant="outlined"
                                id="outlined-input"
                                size="normal"
                                helperText="Please enter your fullname"
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
                        <Col>
                            <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Date of Birth"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter in yyyy/mm/dd format"
                                name="dob"
                                value={user.dob}
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
                
                    <Row>
                        <Col>
                        <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Username"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter your username"
                                name="username"
                                value={user.username}
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
                                label="Password"
                                required
                                type="password"
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter a strong password"
                                name="password"
                                value={user.password}
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

                    <Row>
                        <Col>
                        <TextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Gender"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter your gender"
                                name="gender"
                                value={user.gender}
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
                </div>

                <div className="SaveButton">
                    <button className="psave" onClick={(e)=>onSubmit(e)}>
                        Save
                    </button>

                </div>
            </div>
        </div>
    );
}
