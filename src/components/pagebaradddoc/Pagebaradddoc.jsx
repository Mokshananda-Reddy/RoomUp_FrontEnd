import './pagebaradddoc.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';


export default function Pagebaraddpatient() {
    
    const navigate = useNavigate()
    
    return(

        <div className='Adbarmaincontainer'>
            
            <div className='AdPresentUsage1' onClick={()=>navigate('/doctorslist')}>
                <span className="AdPre">
                    Doctors
                </span>
            </div>  

            <div className='AdPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='AdPresentUsage3'>
                <span className="AdPre1">
                    Add a New Doctor
                </span>
            </div>


            <div className='Addivider'>

            </div>

        </div>
    );

}