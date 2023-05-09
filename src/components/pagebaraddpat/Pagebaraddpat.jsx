import './pagebaraddpat.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';


export default function Pagebaraddpatient() {
    
    const navigate = useNavigate()
    
    return(

        <div className='Apbarmaincontainer'>
            
            <div className='ApPresentUsage1' onClick={()=>navigate('/patientslist')}>
                <span className="ApPre">
                    Patients
                </span>
            </div>  

            <div className='ApPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='ApPresentUsage3'>
                <span className="ApPre1">
                    Add a New Patient
                </span>
            </div>


            <div className='Apdivider'>

            </div>

        </div>
    );

}