import "./dash.css";
import '@fortawesome/fontawesome-free/css/all.css';
import React from 'react';
import axios from "axios"
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboardpanel() {
    
    const [allPatients,setAllPatients] = useState([])
    const [allDoctors,setAllDoctors] = useState([])

    useEffect(()=>{
        loadDoctors();
        loadPatients();
    },[])

    const loadDoctors=()=>{
        const head = {
            headers:{
                'ngrok-skip-browser-warning':'google-chrome',
                'Authorization': localStorage.getItem('jwt token')
            }
        }

        axios.get(global.ngroklink + "/doctors",head).then((result) =>{
            setAllDoctors(result.data.length);
        })

    };

    const loadPatients=()=>{
        const head = {
            headers:{
                'ngrok-skip-browser-warning':'google-chrome',
                'Authorization': localStorage.getItem('jwt token')
            }
        }

        axios.get(global.ngroklink + "/patients",head).then((result) =>{
            console.log(result.data)
            setAllPatients(result.data.length);
        })

    };

    return (
        <div className="Dashmaincontainer">

            <div className="chart1">
                
                <Doughnut data={{
                    labels:['Doctors','Patients'],
                    datasets:[
                        {
                            label: "Users Split", 
                            data:[allDoctors, allPatients],
                            backgroundColor: [
                                "#2EEE9D",
                                "#FFFDD0"
                            
                            ],
                            borderColor: [
                                "#2EEE9D",
                                "#FFFDD0"
                            ],
                            borderWidth: 1,
                        },
                    ]
                }} /> 

            </div>
        </div>
        
    );
}