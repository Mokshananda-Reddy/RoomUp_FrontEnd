import "./login.css";
import React, { useState } from 'react'
import limage from "../login/Mindwiselogo-1.png"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../components/auth";

export default function Login() {

    const navigate = useNavigate()
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const auth = useAuth()

    const handleInputChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleInputChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        axios.post('http://localhost:8080/validate', {"username":Username, "role":"doctor", "password" : Password}
        ).then((response) => {
        console.log(response.data)
            if(response.data)
            {
                //alert('Success, Login successful');
                auth.login(Username)
                navigate('doctorslist', { replace: true})
            }
            else
            {
                alert('Username/Password Incorrect');
            }
            }).catch((error) => {
            alert('Error', error.message);
            console.log(error.message)
            });
    }

    return (

        <div className="Loginmaincontainer">
            <div className="Square1">

            </div>

            <div className="Square2">

            </div>

            <div className="LoginMindwiseLogo">
                <img className="LImage" src={limage} alt="Mindwise"/>
            </div>

            <div className="LoginAppName">
                <span className="LLogo">
                    MindWise
                </span>
            </div>

            <div className="Input1">

                <input 
                    type="text"
                    value={Username}
                    onChange={handleInputChangeUsername}
                    placeholder="Username"  
                    className="Rounded-input1"
                />

            </div>

            <div className="Input2">

                <input 
                    type="password"
                    value={Password}
                    onChange={handleInputChangePassword}
                    placeholder="Password"  
                    className="Rounded-input2"
                />

            </div>
            
            <div className="LoginButton">

                <button className="loginbutton" onClick={handleLogin}>
                    Login
                </button>

            </div>
        </div>
    );
}