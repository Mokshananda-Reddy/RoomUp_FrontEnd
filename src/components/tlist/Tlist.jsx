import './tlist.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react";
import "../../components/ngrok";

export default function Tlist() {

    const navigate = useNavigate()
    const [user,setUsers] = useState([])

    useEffect(()=>{
        loadTasks();
    },[])

    const loadTasks=()=>{
        const head = {
            headers:{
                'ngrok-skip-browser-warning':'google-chrome',
                'Authorization': localStorage.getItem('jwt token')
            }
        }
        axios.get(global.ngroklink + "/exercises",head).then((result) =>{
            //console.log(result.data);
            setUsers(result.data);
        })
    }

    function handleClicktasdetails(params) {
        navigate('taskdetails', { state: { data: Object.entries(params) } });
        // console.log(Object.entries(params));
        localStorage.setItem("currtasdet", JSON.stringify(params));

    }

    return (

        <div className='Tlistmaincontainer'>

            <div className='listoftasks'>

                {
                    user.map((user)=>(
                        <button className={'task'} onClick={()=>handleClicktasdetails(user)}>
                            <span className="icon">
                                <i className="fas fa-bars-progress"></i>
                            </span>
                            {user.name}

                        </button>

                    ))
                }
            </div>

                <button className="addtask" onClick={()=>navigate('addtask')}>
                    <span className="icon">
                        <i className="fa-solid fa-clipboard"></i>
                    </span>
                    Add a new Task

                </button>

            <Outlet/>
        </div>
    );
}