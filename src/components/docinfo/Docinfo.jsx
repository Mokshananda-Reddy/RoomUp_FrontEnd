import './docinfo.css';
import { Outlet, useNavigate } from 'react-router-dom';


export default function DoctorInfo() {

    const docdetails = JSON.parse(localStorage.getItem('currdocdet'));
    const ID = docdetails.doctorID;
    const name = docdetails.name;
    const dob = docdetails.dob;
    const gender = docdetails.gender;
    // const status = docdetails.status;
    const registeredID = docdetails.registeredID;
    const specialization = docdetails.specialization;

    console.log(docdetails)
    
    const navigate = useNavigate();

    return(

        <div className='Docinfomaincontainer'>

            <div className='DocDetails'>

                <div className='DoctorID'>
                    <span className='Doctorid'>
                        DoctorID : 
                    </span>
                    <span className='doctorid'>
                        {ID}
                    </span>
                </div>

                <div className='DoctorName'>
                    <span className='Doctorname'>
                        Name : 
                    </span>
                    <span className='doctorname'>
                        {name}
                    </span>
                </div>

                <div className='DoctorDob'>

                    <span className='Doctordob'>
                        DOB : 
                    </span>
                    <span className='doctordob'>
                        {dob}
                    </span>

                </div>

                <div className='DoctorGender'>
                    
                    <span className='Doctorgender'>
                        Gender : 
                    </span>
                    <span className='doctorgender'>
                        {gender}
                    </span>
                    
                </div>

                {/* <div className='DoctorStatus'>

                    <span className='Doctorstatus'>
                        Status : 
                    </span>
                    <span className='doctorstatus'>
                        {status}
                    </span>
                
                </div> */}
                
                <div className='DoctorRegisteredID'>
                    <span className='DoctorregisteredID'>
                        RegisteredID : 
                    </span>
                    <span className='doctorregisteredID'>
                        {registeredID}
                    </span>
                </div>
                
                <div className='DoctorSpecialization'>
                    <span className='Doctorspecialization'>
                        Specialization : 
                    </span>
                    <span className='doctorspecialization'>
                        {specialization}
                    </span>
                </div>

                <div className="DocBackButton">

                    <button className="docbackbutton" onClick={() => navigate(-1)}>
                        Go Back
                    </button>

                </div>

            </div>
            
            <Outlet/>
        </div>
    );

}