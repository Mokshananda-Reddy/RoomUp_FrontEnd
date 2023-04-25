import "./plist.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react";

export default function Plist() {
    
    const navigate = useNavigate()
    const [user,setUsers] = useState([])

    useEffect(()=>{
        loadPatients();
    },[])

    const loadPatients=()=>{
        const head = {
            headers:{
                'ngrok-skip-browser-warning':'google-chrome'
            }
        }
        axios.get(global.ngroklink + "/patients",head).then((result) =>{
            //console.log(result.data);
            setUsers(result.data);
        })
    }

    function handleClickpatdetails(params) {
        navigate('patientdetails', { state: { data: Object.entries(params) } });
        // console.log(Object.entries(params));
        localStorage.setItem("currpatdet", JSON.stringify(params));

    }

    return (
        <div className="Plistmaincontainer">

            <div className="listofpatients">

                {
                    user.map((user)=>(

                        <button className={'patient'} onClick={()=>handleClickpatdetails(user)}>
                            <span className="icon">
                                <i className="fas fa-user"></i>
                            </span>
                            {user.username}
                            <div className="Lastseentext">
                                {/* Lastseen */}
                            </div>
                        </button>

                    ))
                }
            </div>  
              
            <button className="addpatient" onClick={()=>navigate('addpatient')}>
                <span className="icon">
                    <i className="fas fa-user-plus"></i>
                </span>
                Add a new Patient

            </button>
            
            <Outlet/>
        </div>
        
    );
}