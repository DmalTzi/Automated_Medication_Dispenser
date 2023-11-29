import React, { useState } from "react";
import { closeWindows} from "../../services/liffService.js";
import axios from "axios"
import "react-dropdown/style.css";
import NavbarComponent from "./../layouts/NavbarComponent.js"
import FooterComponent from "./../layouts/FooterComponent.js"
import Swal from "sweetalert2"
import { authToken } from "../../services/authorize.js";
import { useNavigate } from "react-router-dom";
import { report_line_msg_user } from "../../services/linemsg.js";

const ReportComponent = () => {
    document.title = "การรายงานปัญหา"
    const navigate = useNavigate()
    const [state, setState] = useState({
    topic: "",
    content: "",
    });

    const { topic, content } = state;

    const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
    };

    const submitForm=async(e)=>{
        return Promise.resolve()
    }

    return (
    <div>
        <NavbarComponent />
        <div className="mycontainer ">
        <form onSubmit={submitForm}>
            <div className="container-form mb-5">
            <div className="form-group">
                <h1>การรายงานปัญหา</h1>
            </div>
            <div className="one-form">
                <label htmlFor="">พบปัญหาการใช้งานที่ส่วนไหน</label>
                <input
                    type="text"
                    className="form-control"
                    value={topic} //change
                    onChange={inputValue("topic")} //change
                    placeholder="การรายงานปัญหา"
                />
            </div>
            <div className="one-form ">
                <label htmlFor="">ระบุปัญหา</label>
                <textarea
                    className="form-control w-100"
                    value={content} //change
                    onChange={inputValue("content")} //change
                    placeholder="กดยืนยันแล้ว ไม่สามารถส่งข้อความได้ และขึ้นแจ้งเตือน"
                />
            </div>
            <br />
            <input type="submit" className="btn btn-primary w-50" value={"ยืนยัน"}/>
            </div>
        </form>
        <FooterComponent/>
        </div>
    </div>
    );
};

export default ReportComponent;