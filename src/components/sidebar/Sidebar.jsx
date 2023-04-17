import "./sidebar.css";
import React, { useState, useEffect } from 'react';
import image from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {

    const navigate = useNavigate()

    return (
        <div className="Sbarmaincontainer">

            <div classname="MindWiseLogo">
                <img className="Image" src={image} alt="Mindwise"/>
            </div>

            <div className="DividingLine">
                <div className="line1"></div>
            </div>

            <div className="RequiredButtons">

                <button className="b1" onClick={()=>navigate('/doctorslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Doctors
                </button>

                <button className="b2" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-hospital-user"></i>
                    </span>
                    Patients
                </button>

                <button className="b3" onClick={()=>navigate('/taskslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-list-check"></i>
                    </span>
                    Tasks
                </button>

                <button className="b4" onClick={()=>navigate('/')}>
                    <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                    Logout 
                </button>
                

            </div>

            <div className="DividingLine2">
                <div className="line2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="DividingLine3">
                <div className="line3"></div>
            </div>

        </div>
    );
}