import "./dlist.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react";

export default function Dlist() {
    
    const navigate = useNavigate()
    const [user,setUsers] = useState([]);

    useEffect(()=>{
        loadDoctors();
    },[])

    const loadDoctors=()=>{
        const head = {
            headers:{
                'ngrok-skip-browser-warning':'google-chrome',
                'Authorization': localStorage.getItem('jwt token')
            }
        }

        axios.get(global.ngroklink + "/doctors",head).then((result) =>{
            //console.log(result.data);
            setUsers(result.data);
        })

    };

    function handleClickdocdetails(params) {
        navigate('doctordetails', { state: { data: Object.entries(params) } });
        // console.log(Object.entries(params));
        localStorage.setItem("currdocdet", JSON.stringify(params));

    }

    return (
        <div className="Dlistmaincontainer">

            <div className="listofdoctors">
                {
                    user.map((user)=>(
                        <button className='doctor' onClick={()=>handleClickdocdetails(user)}>
                            <span className="icon">
                                <i className="fas fa-stethoscope"></i>
                            </span>
                            {user.username}
                            <div className="Lastseentext">
                                {/* Lastseen */}
                            </div>
                        </button>

                    ))
                }

            </div>

            <button className="adddoctor" onClick={()=>navigate('adddoctor')}>
                    <span className="icon">
                        <i className="fas fa-user-plus"></i>
                    </span>
                    Add a new Doctor

            </button>
            
            <Outlet/>
        </div>
        
    );
}