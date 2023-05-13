import './tasinfo.css';
import "../../components/ngrok";
import { Outlet, useNavigate } from 'react-router-dom';


export default function TaskInfo() {

    const tasdetails = JSON.parse(localStorage.getItem('currtasdet'));
    const ID = tasdetails.taskID;
    const service = tasdetails.service;
    const date = tasdetails.date;
    const feedback = tasdetails.feedback;
    const description = tasdetails.description;
  
    const navigate = useNavigate();


    return(

        <div className='Tasinfomaincontainer'>

            <div className='TasDetails'>

                <div className='TaskID'>
                    <span className='Taskid'>
                        ServiceID : 
                    </span>
                    <span className='taskid'>
                        {ID}
                    </span>
                </div>

                <div className='TaskName'>
                    <span className='Taskname'>
                        Service Type : 
                    </span>
                    <span className='taskname'>
                        {service}
                    </span>
                </div>

                <div className='TaskDefaultflag'>

                    <span className='Taskdefaultflag'>
                        Date : 
                    </span>
                    <span className='taskdefaultflag'>
                        {date}
                    </span>

                </div>

                <div className='TaskAnswer'>

                    <span className='Taskanswer'>
                        Feedback : 
                    </span>
                    <span className='taskanswer'>
                        {feedback}
                    </span>
                
                </div>
                
                <div className='TaskDescription'>
                    <span className='Taskdescription'>
                        Special Requests : 
                    </span>
                    <span className='taskdescription'>
                        {description}
                    </span>
                </div>

                <div className="TasBackButton">

                    <button className="tasbackbutton" onClick={() => navigate(-1)}>
                        Go Back
                    </button>

                </div>

            </div>
            
            <Outlet/>
        </div>
    );

}