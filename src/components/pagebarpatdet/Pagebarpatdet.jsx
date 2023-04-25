import './pagebarpatdet.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';


export default function Pagebarpatientdetails() {
    
    const navigate = useNavigate()
    const patdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const name = patdetails.name;
    
    return(

        <div className='Pdtbarmaincontainer'>
            
            <div className='PdtPresentUsage1' onClick={()=>navigate('/patientslist')}>
                <span className="PdtPre">
                    Patients
                </span>
            </div>  

            <div className='PdtPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='PdtPresentUsage3'>
                <span className="PdtPre1">
                    {name}
                </span>
            </div>


            <div className='Pdtdivider'>

            </div>

        </div>
    );

}