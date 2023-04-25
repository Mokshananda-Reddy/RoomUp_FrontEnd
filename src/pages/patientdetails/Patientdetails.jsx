import "./patientdetails.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebarpatdet/Pagebarpatdet";
import Patinfo from "../../components/patinfo/Patinfo";

export default function currentpatientdetails(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Patinfo/>
        </>        
    );
}