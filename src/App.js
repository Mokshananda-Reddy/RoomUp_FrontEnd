import Login from "./pages/login/Login"
import Patientslist from "./pages/patientslist/Patientslist";
import Doctorslist from "./pages/doctorslist/Doctorslist";
import Taskslist from "./pages/tasklist/Tasklist";
import Addpatient from "./pages/addpatient/Addpatient";
import Adddoctor from "./pages/adddoctor/Adddoctor";
import Addtask from "./pages/addtask/Addtask";
import Notfound from "./pages/notfound/Notfound"
import Doctordetails from "./pages/doctordetails/Doctordetails";
import Patientdetails from "./pages/patientdetails/Patientdetails";
import Taskdetails from "./pages/taskdetails/Taskdetails";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from "./components/auth";
import { RequrieAuth } from "./components/RequrieAuth";



function App()
{

  return (
	<AuthProvider>

	  <Login/> 
	
	  <Routes>

		  <Route path="/" element={<Login />} />

		  <Route path="/dashboard" element={<RequrieAuth><Dashboard /></RequrieAuth>} />

		  <Route path="patientslist" element={<RequrieAuth><Patientslist /></RequrieAuth>}>
			<Route path="addpatient" element={<RequrieAuth><Addpatient /></RequrieAuth>} />
			<Route path="patientdetails" element={<RequrieAuth><Patientdetails /></RequrieAuth>} />
		  </Route>

		  <Route path="doctorslist" element={<RequrieAuth><Doctorslist /></RequrieAuth>}>
			<Route path="adddoctor" element={<RequrieAuth><Adddoctor /></RequrieAuth>} />
			<Route path="doctordetails" element={<RequrieAuth><Doctordetails /></RequrieAuth>} />
		  </Route>

		  <Route path="taskslist" element={<RequrieAuth><Taskslist /></RequrieAuth>}>
			<Route path="addtask" element={<RequrieAuth><Addtask /></RequrieAuth>} />
			<Route path="taskdetails" element={<RequrieAuth><Taskdetails /></RequrieAuth>} />
		  </Route>

		  <Route path="*" element={<Notfound />} />    

	  </Routes>
	  
	</AuthProvider>
	
  );
}

export default App;