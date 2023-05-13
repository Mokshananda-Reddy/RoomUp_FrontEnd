import './rlist.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react";
import "../ngrok";

export default function Rlist() {

    const navigate = useNavigate()
    const [user,setUsers] = useState([])

    useEffect(()=>{
        loadRequests();
    },[user])

    const loadRequests=async()=>{
        
        const head = {
            headers:{
                'ngrok-skip-browser-warning':'google-chrome',
                'Authorization': localStorage.getItem('jwt token')
            }
        }

        const details = JSON.parse(localStorage.getItem('userdetails'));
        const username = details.username;

        // console.log(username);

        const Stu = await axios.get(global.ngroklink + "/getstudentid", {params: {username: username}})
        // console.log(Stu);
        
        localStorage.setItem("currstudetails", JSON.stringify(Stu.data));
        // console.log(Stu);
        
        axios.get(global.ngroklink + "/gettasksbystudentid", {params: {studentID: Stu.data['studentID']}}).then((result) =>{
            setUsers([...result.data]);
            // console.log(result.data);
        })

    }


    function handleClicktasdetails(params) {
        navigate('requestdetails', { state: { data: Object.entries(params) } });
        localStorage.setItem("currreqdet", JSON.stringify(params));

    }

    return (

        <div className='Rlistmaincontainer'>

            <div className='listofrequests'>

                {
                    user.map((user)=>(
                        <button className={'request'} onClick={()=>handleClicktasdetails(user)}>
                            <span className="icon">
                                <i className="fas fa-bars-progress"></i>
                            </span>
                            {user.service}

                        </button>

                    ))
                }
            </div>

                <button className="addrequest" onClick={()=>navigate('addrequest')}>
                    <span className="icon">
                        <i className="fa-solid fa-clipboard"></i>
                    </span>
                    Add a new Request

                </button>

            <Outlet/>
        </div>
    );
}