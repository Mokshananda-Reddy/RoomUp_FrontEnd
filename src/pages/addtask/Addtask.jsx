import "./addtask.css";
import Sidebar from "../../components/sidebart/Sidebart";
import Topbar from "../../components/topbar/Topbar";
import Pagebar from "../../components/pagebaraddtas/Pagebaraddtas";
import Tform from "../../components/tform/Tform";

export default function addnewtask(){
    return (
        <>
            <Topbar/>
            <Pagebar/>
            <Sidebar/>
            <Tform/>
        </>        
    );
}