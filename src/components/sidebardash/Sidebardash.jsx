import "./sidebardash.css";
import React from 'react';
import image from "../sidebar/Mindwiselogo-1.png";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../auth";

export default function Sidebardash() {

    const navigate = useNavigate()
    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <div className="Dasbarmaincontainer">

            <div classname="DasMindWiseLogo">
                <img className="Image" src={image} alt="Mindwise"/>
            </div>

            <div className="DasDividingLine">
                <div className="dasline1"></div>
            </div>

            <div className="DasRequiredButtons">

                <button className="dasb1" onClick={()=>navigate('/dashboard')}>
                    <span className="icon">
                        <i className="fa-solid fa-house-chimney"></i>
                    </span>
                    Dashboard
                </button>
                
                <button className="dasb2" onClick={()=>navigate('/doctorslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-user-doctor"></i>
                    </span>
                    Doctors
                </button>

                <button className="dasb3" onClick={()=>navigate('/patientslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-hospital-user"></i>
                    </span>
                    Patients
                </button>

                <button className="dasb4" onClick={()=>navigate('/taskslist')}>
                    <span className="icon">
                        <i className="fa-solid fa-list-check"></i>
                    </span>
                    Tasks
                </button>

                <button className="dasb5" onClick={handleLogout}>
                    <span className="icon">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </span>
                    Logout 
                </button>
                

            </div>

            <div className="dasDividingLine2">
                <div className="dasline2"></div>
            </div>

            <div className="LogoutButton">

            </div>

            <div className="dasDividingLine3">
                <div className="dasline3"></div>
            </div>

        </div>
    );
}