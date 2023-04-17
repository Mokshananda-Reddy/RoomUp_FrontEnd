import "./addpatient.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebaraddpat/Pagebaraddpat";
import Pform from "../../components/pform/Pform";

export default function addnewpatient(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Pform/>
        </>        
    );
}