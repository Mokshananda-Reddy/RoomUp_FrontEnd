import './tasinfo.css';
import { Outlet, useNavigate } from 'react-router-dom';


export default function TaskInfo() {

    const tasdetails = JSON.parse(localStorage.getItem('currtasdet'));
    const ID = tasdetails.exerciseID;
    const name = tasdetails.name;
    const defaultflag = tasdetails.defaultflag;
    const type = tasdetails.type;
    const ans = tasdetails.ans;
    const description = tasdetails.description;

    console.log(tasdetails)
    
    const navigate = useNavigate();

    return(

        <div className='Tasinfomaincontainer'>

            <div className='TasDetails'>

                <div className='TaskID'>
                    <span className='Taskid'>
                        ExerciseID : 
                    </span>
                    <span className='taskid'>
                        {ID}
                    </span>
                </div>

                <div className='TaskName'>
                    <span className='Taskname'>
                        Name : 
                    </span>
                    <span className='taskname'>
                        {name}
                    </span>
                </div>

                <div className='TaskDefaultflag'>

                    <span className='Taskdefaultflag'>
                        Default-Flag : 
                    </span>
                    <span className='taskdefaultflag'>
                        {defaultflag}
                    </span>

                </div>

                <div className='TaskType'>
                    
                    <span className='Tasktype'>
                        Type : 
                    </span>
                    <span className='tasktype'>
                        {type}
                    </span>
                    
                </div>

                <div className='TaskAnswer'>

                    <span className='Taskanswer'>
                        Answer : 
                    </span>
                    <span className='taskanswer'>
                        {ans}
                    </span>
                
                </div>
                
                <div className='TaskDescription'>
                    <span className='Taskdescription'>
                        Description : 
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