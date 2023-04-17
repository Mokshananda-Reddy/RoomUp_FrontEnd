import "./plist.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';


export default function Plist() {
    
    const navigate = useNavigate()

    return (
        <div className="Plistmaincontainer">

            <div className="listofpatients">

                <button className="user1">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    p1
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>

                <button className="user2">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    p2
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>

                <button className="user3">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    p3
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>
                
                <button className="user4">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    p4
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>
                
                <button className="user5">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    p5
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>
                
                <button className="user6">
                    <span className="icon">
                        <i className="fas fa-user"></i>
                    </span>
                    p6
                    <div className="Lastseentext">
                        Lastseen
                    </div>

                </button>
                
                <button className="adduser" onClick={()=>navigate('addpatient')}>
                    <span className="icon">
                        <i className="fas fa-user-plus"></i>
                    </span>
                    Add a new Patient

                </button>

            </div>
            <Outlet/>
        </div>
        
    );
}