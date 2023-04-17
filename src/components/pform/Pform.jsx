import "./pform.css";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Patientdetails() {

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
                        <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Name"
                                required
                                variant="outlined"
                                id="outlined-input"
                                size="normal"
                                helperText="Please enter your fullname"
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        </Col>
                        <Col>
                            <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Date of Birth"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter in dd/mm/yyyy format"
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
                        <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Username"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter your username"
                                inputProps={{
                                    style: {
                                        color: "white",
                                    }
                                }}
                            />
                        </Col>
                        <Col>
                            <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Password"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter a strong password"
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
                        <ValidationTextField  InputLabelProps={{
                                    style: { color: "#FFFDD0" },
                                }}
                                label="Gender"
                                required
                                variant="outlined"
                                id="outlined-input"
                                helperText="Please enter your gender"
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
                    <button className="psave" >
                        Save
                    </button>

                </div>
            </div>
        </div>
    );
}
