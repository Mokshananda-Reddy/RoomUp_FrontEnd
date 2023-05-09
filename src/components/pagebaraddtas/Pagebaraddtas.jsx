import './pagebaraddtas.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';


export default function Pagebaraddpatient() {
    
    const navigate = useNavigate()

    return(

        <div className='Atbarmaincontainer'>
            
            <div className='AtPresentUsage1' onClick={()=>navigate('/taskslist')}>
                <span className="AtPre">
                    Tasks
                </span>
            </div>  

            <div className='AtPresentUsage2'>
                <span className="icon">
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>

            <div className='AtPresentUsage3'>
                <span className="AtPre1">
                    Add a New Task
                </span>
            </div>


            <div className='Atdivider'>

            </div>

        </div>
    );

}