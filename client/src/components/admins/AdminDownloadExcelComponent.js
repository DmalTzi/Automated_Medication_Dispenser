import NavbarComponent from "./../layouts/NavbarComponent.js"
import FooterComponent from "./../layouts/FooterComponent.js"
import axios from "axios"
import { authToken } from "../../services/authorize.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminDownloadExcekComponent =()=>{

    document.title = "การดาวน์โหลดข้อมูล Excel"
    const navigate = useNavigate()
    const apiDownloadExcel = async(category)=>{
        return Promise.resolve()
    }

    const downloadExcelFile = async(response,category)=>{
        return Promise.resolve()
    }

    return(
    <div>
        <NavbarComponent/>
        <div className="mycontainer-select m-2 pt-5 pb-5 ">
            <div className="form-group w">
                <h1 className="alerts">ไม่สามารถใช้งานได้ชั่วคราว</h1>
                <h1>เมนูการดาวน์โหลด Excel</h1>
            </div>
            <div className="two-blog ps-5 pe-5 pt-3">
                <button className="btn btn-success mybtn" onClick={()=>apiDownloadExcel("drug")}>ดาวน์โหลดข้อมูลการขอยา</button>
            </div>
            <div className="two-blog ps-5 pe-5 pt-3">
                <button className="btn btn-success mybtn" onClick={()=>apiDownloadExcel("appointment")}>ดาวน์โหลดข้อมูลการขอนัดพบ</button>
            </div>
            <div className="two-blog ps-5 pe-5 pt-3">
                <button className="btn btn-success mybtn" onClick={()=>apiDownloadExcel("emergency")}>ดาวน์โหลดข้อมูลการแจ้งเหตุด่วน</button>
            </div>
            <div className="two-blog ps-5 pe-5 pt-3">
                <button className="btn btn-success mybtn" onClick={()=>apiDownloadExcel("report")}>ดาวน์โหลดข้อมูลการรายงานปัญหา</button>
            </div>
            
            <FooterComponent />
            </div>
    </div>
    )
}

export default AdminDownloadExcekComponent