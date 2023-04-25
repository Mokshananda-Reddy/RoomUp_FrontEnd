import "./dform.css";

import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Doctordetails() {

    const navigate = useNavigate()
    const [user,setUsers] = useState({
        name:"",
        dob:"",
        username:"",
        password:"",
        gender:"",
        specialization:"",
        registeredID:""

    });

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value});
    };

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post(global.ngroklink + "/doctor",user);
        await axios.post(global.ngroklink + '/login', {"username":user.username, "role":"doctor", "password" : user.password }); 
        navigate("/doctorslist");
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
        <div className="Ddetailsmaincontainer">
            <div className="doctorform">  
                <div className="PageHeading">
                    <span className="Dhead">
                        Doctor Details
                    </span>
                </div>
                <div className="dformlayout"> 
                    <form>    
                        <Row>
                            <Col >
                                <TextField  InputLabelProps={{
                                        style: { color: "#FFFDD0" },
                                    }}
                                    inputProps={{
                                        style: {
                                            color: "white",
                                        }
                                    }}
                                    label="Name"
                                    required
                                    variant="outlined"
                                    id="outlined-input-name"
                                    size="normal"
                                    helperText="Please enter your fullname"
                                    name="name"
                                    value={user.name}
                                    onChange={(e)=>onInputChange(e)}

                                />
                            </Col>
                            <Col>
                                <TextField  InputLabelProps={{
                                        style: { color: "#FFFDD0" },
                                    }}
                                    label="Date of Birth"
                                    required
                                    variant="outlined"
                                    id="outlined-input-dob"
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
                                    id="outlined-input-username"
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
                                    id="outlined-input-password"
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
                                    id="outlined-input-gender"
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
                            <Col>
                            <TextField  InputLabelProps={{
                                        style: { color: "#FFFDD0" },
                                    }}
                                    label="Specialization"
                                    required
                                    variant="outlined"
                                    id="outlined-input-specialization"
                                    helperText="Please mention your speciality"
                                    name="specialization"
                                    value={user.specialization}
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
                                    label="Registered-ID"
                                    required
                                    variant="outlined"
                                    id="outlined-input-registeredID"
                                    helperText="Please enter your registration Number"
                                    name="registeredID"
                                    value={user.registeredID}
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
                    </form>
                </div>

                <div className="SaveButton">
                    <button className="dsave" onClick={(e)=>onSubmit(e)}>
                        Save
                    </button>

                </div>
            </div>
        </div>
    );
}
