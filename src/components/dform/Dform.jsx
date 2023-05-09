import "./dform.css";

import React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Email from 'emailjs-com';
// import bcrypt from 'bcryptjs';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Doctordetails() {

    const navigate = useNavigate()

    // const salt = bcrypt.genSaltSync(0);  

    const [user,setUsers] = useState({
        name:"",
        dob:"",
        username:"",
        password:"",
        email:"",
        gender:"",
        specialization:"",
        registeredID:""

    });

    const onInputChange=(e)=>{
        setUsers({...user,[e.target.name]:e.target.value});
    };

    // const onSave=async (e)=>{
    //     e.preventDefault();
    //     await axios.post(global.ngroklink + "/doctor",user).then((response)=>{
    //     }).catch((error) => {
    //         alert('Error', error.message);
    //         console.log(error.message)
    //         });
    //     await axios.post(global.ngroklink + '/login', {"username":user.username, "role":"doctor", "password" : user.password }); 
    //     // sendEmail(e);
    //     navigate("/doctorslist");
    // }; const sendEmail(e){
    

    const sendEmail=async (e)=>{
        e.preventDefault();
        console.log("inside mailer");
        Email.sendForm('service_lmrp9uh', 'template_6g3n2sg', e.target, 'uDSocBPuV77OPgW5o')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        // console.log(user.password);
        // user["password"] = bcrypt.hashSync(user["password"], salt);
        // console.log(user.password);
        await axios.post(global.ngroklink + "/doctor",user, { headers:{'Authorization': localStorage.getItem('jwt token')}}).then((response)=>{
        }).catch((error) => {
            alert('Error', error.message);
            console.log(error.message)
            });
        await axios.post(global.ngroklink + '/login', {"username":user.username, "role":"doctor", "password" : user.password }, { headers:{'Authorization': localStorage.getItem('jwt token')}}); 
        e.target.reset()
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
                    <form onSubmit={sendEmail}>    
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
                                    id="outlined-input-doctor-name"
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
                                    id="outlined-input-doctor-dob"
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
                                    id="outlined-input-doctor-username"
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
                                    // type="password"
                                    variant="outlined"
                                    id="outlined-input-doctor-password"
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
                                    id="outlined-input-doctor-gender"
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
                                    id="outlined-input-doctor-specialization"
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
                                    id="outlined-input-doctor-registeredID"
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
                            <Col>
                                <TextField  InputLabelProps={{
                                        style: { color: "#FFFDD0" },
                                    }}
                                    label="Email-ID"
                                    required
                                    variant="outlined"
                                    id="outlined-input-doctor-emailID"
                                    helperText="Please enter your Email ID"
                                    name="email"
                                    value={user.email}
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

                        <div className="DoctorEmailButton">
                            <button type="submit" className="dsaveEmail">
                                Save
                            </button>

                        </div>

                    </form>
                </div>
{/* 
                <div className="SaveButton">
                    <button className="dsave" onClick={(e)=>onSave(e)}>
                        Save
                    </button>

                </div> */}
            </div>
        </div>
    );
}
