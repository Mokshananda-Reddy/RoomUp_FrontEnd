import "./doctordetails.css";
import Sidebar from "../../components/sidebard/Sidebard";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebardocdet/Pagebardocdet";
import Docinfo from "../../components/docinfo/Docinfo";

export default function currentdoctordetails(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Docinfo/>
        </>        
    );
}