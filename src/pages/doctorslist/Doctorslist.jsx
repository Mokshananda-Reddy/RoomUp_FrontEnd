import "./doctorslist.css";
import Sidebar from "../../components/sidebard/Sidebard";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebardoctor/Pagebardoctor";
import Dlist from "../../components/dlist/Dlist";

export default function doctorslist(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Dlist/>
        </>        
    );
}