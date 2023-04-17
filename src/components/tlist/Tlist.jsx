import './tlist.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Tlist() {

    const navigate = useNavigate()

    return (

        <div className='Tlistmaincontainer'>

            <div className='listoftasks'>

                <button className='task1'>
                    <span className="icon">
                        <i className="fas fa-bars-progress"></i>
                    </span>
                    T1

                </button>

                <button className='task2'>
                    <span className="icon">
                        <i className="fas fa-bars-progress"></i>
                    </span>
                    T2

                </button>

                <button className='task3'>
                    <span className="icon">
                        <i className="fas fa-bars-progress"></i>
                    </span>
                    T3

                </button>

                <button className='task4'>
                    <span className="icon">
                        <i className="fas fa-bars-progress"></i>
                    </span>
                    T4

                </button>

                <button className='task5'>
                    <span className="icon">
                        <i className="fas fa-bars-progress"></i>
                    </span>
                    T5

                </button>

                <button className='task6'>
                    <span className="icon">
                        <i className="fas fa-bars-progress"></i>
                    </span>
                    T6

                </button>

                <button className="addtask" onClick={()=>navigate('addtask')}>
                    <span className="icon">
                        <i className="fa-solid fa-clipboard"></i>
                    </span>
                    Add a new Task

                </button>

            </div>
            <Outlet/>
        </div>
    );
}