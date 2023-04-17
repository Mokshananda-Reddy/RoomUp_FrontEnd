import "./sidebart.css";
import React, { useState, useEffect } from 'react';
import timage from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';


export default function Sidebart() {

    const navigate = useNavigate()

    return (
        <div className="tbarmaincontainer">

            <div classname="TMindWiseLogo">
                <img className="TImage" src={timage} alt="Mindwise"/>
            </div>

            <div className="TDividingLine">
                <div className="tline1"></div>
            </div>

            <div className="TRequiredButtons">

                <button className="tb1" onClick={()=>navigate('/doctorslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Doctors
                </button>

                <button className="tb2" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-hospital-user"></i>
                    </span>
                    Patients
                </button>

                <buttons className="tb3" onClick={()=>navigate('/taskslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-list-check"></i>
                    </span>
                    Tasks
                </buttons>

                <button className="tb4" onClick={()=>navigate('/')}>
                    <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                    Logout  
                </button>
                

            </div>

            <div className="TDividingLine2">
                <div className="tline2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="TDividingLine3">
                <div className="tline3"></div>
            </div>

        </div>

    );
}