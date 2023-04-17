import "./dlist.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';


export default function Dlist() {
    
    const navigate = useNavigate()

    return (
        <div className="Dlistmaincontainer">

            <div className="listofdoctors">

                <button className="user1">
                    <span className="icon">
                        <i className="fas fa-stethoscope"></i>
                    </span>
                    d1
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>

                <button className="user2">
                    <span className="icon">
                        <i className="fas fa-stethoscope"></i>
                    </span>
                    d2
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>

                <button className="user3">
                    <span className="icon">
                        <i className="fas fa-stethoscope"></i>
                    </span>
                    d3
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>
                
                <button className="user4">
                    <span className="icon">
                        <i className="fas fa-stethoscope"></i>
                    </span>
                    d4
                    <div className="Lastseentext">
                        Lastseen
                    </div>
                </button>
                
                <button className="user5">
                    <span className="icon">
                        <i className="fas fa-stethoscope"></i>
                    </span>
                    d5
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>
                
                <button className="user6">
                    <span className="icon">
                        <i className="fas fa-stethoscope"></i>
                    </span>
                    d6
                    <div className="Lastseentext">
                        Lastseen
                    </div>       

                </button>

                <button className="adduser" onClick={()=>navigate('adddoctor')}>
                    <span className="icon">
                        <i className="fas fa-user-plus"></i>
                    </span>
                    Add a new Doctor

                </button>

            </div>
            <Outlet/>
        </div>
        
    );
}