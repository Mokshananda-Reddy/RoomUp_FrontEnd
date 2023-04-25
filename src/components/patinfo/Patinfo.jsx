import './patinfo.css';
import { Outlet, useNavigate } from 'react-router-dom';


export default function PatientInfo() {

    const patdetails = JSON.parse(localStorage.getItem('currpatdet'));
    const ID = patdetails.patientID;
    const name = patdetails.name;
    const dob = patdetails.dob;
    const gender = patdetails.gender;
    const status = patdetails.status;

    console.log(patdetails)
    
    const navigate = useNavigate();

    return(

        <div className='Patinfomaincontainer'>

            <div className='PatDetails'>

                <div className='PatientID'>
                    <span className='Patientid'>
                        PatientID : 
                    </span>
                    <span className='patientid'>
                        {ID}
                    </span>
                </div>

                <div className='PatientName'>
                    <span className='Patientname'>
                        Name : 
                    </span>
                    <span className='patientname'>
                        {name}
                    </span>
                </div>

                <div className='PatientDob'>

                    <span className='Patientdob'>
                        DOB : 
                    </span>
                    <span className='patientdob'>
                        {dob}
                    </span>

                </div>

                <div className='PatientGender'>
                    
                    <span className='Patientgender'>
                        Gender : 
                    </span>
                    <span className='patientgender'>
                        {gender}
                    </span>
                    
                </div>

                <div className='PatientStatus'>

                    <span className='Patientstatus'>
                        Status : 
                    </span>
                    <span className='patientstatus'>
                        {status}
                    </span>
                
                </div>

                <div className="PatBackButton">

                    <button className="patbackbutton" onClick={() => navigate(-1)}>
                        Go Back
                    </button>

                </div>

            </div>
            
            <Outlet/>
        </div>
    );

}