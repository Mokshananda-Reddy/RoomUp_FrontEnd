import "./adddoctor.css";
import Sidebar from "../../components/sidebard/Sidebard";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebaradddoc/Pagebaradddoc";
import Dform from "../../components/dform/Dform";

export default function addnewdoctor(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Dform/>
        </>        
    );
}