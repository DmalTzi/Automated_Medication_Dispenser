import React, { useState } from "react";
import { closeWindows } from "../../services/liffService.js";
import axios from "axios"
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import NavbarComponent from "../layouts/NavbarComponent.js.js"
import FooterComponent from "../layouts/FooterComponent.js"
import Swal from "sweetalert2"
import { authToken } from "../../services/authorize.js";
import { useNavigate } from "react-router-dom";
import { painform_line_msg_user } from "../../services/linemsg.js";


const AllergicFormComponent = () => {
    document.title = "แบบฟอร์มกรอกอาการ"
    const navigate = useNavigate()
    const [state, setState] = useState({
        age: "",
        weight: "",
    });

    const { age, weight } = state;

    // symptom
    const symptomOptions = ["แพ้อากาศ","แพ้ผื่นคัน","น้ำมูกไหล"];
    const [symptom, setSelectSymptoms] = useState(symptomOptions[0]);
    const handleDropdownSymptom = (selected) => {
        setSelectSymptoms(selected.value);
    };

    const allergicOption = ["ไม่มี", "มี"];
    const [allergic, setSelectAllergic] = useState(allergicOption[0]);
    const handleDropdownAllergic = (selected) => {
        setSelectAllergic(selected.value);
    };

    const relevantOption = ["ไม่เป็น", "เป็น"];
    const [relevant, setSelectRelevant] = useState(relevantOption[0]);
    const handleDropdownRelavant = (selected) => {
        setSelectRelevant(selected.value);
    };

    const eatenAgoOption = ['ยังไม่ได้รับประทานยา', 'รับประทานมาแล้ว 1 ชั่วโมง', 'รับประทานมาแล้ว 2 ชั่วโมง', 'รับประทานมาแล้ว 3 ชั่วโมง', 'รับประทานมาแล้ว 4 ชั่วโมง'];
    const [eatenago, setSelectEatenAgo] = useState(eatenAgoOption[0]);
    const handleDropdownEatenAgo = (selected) => {
        setSelectEatenAgo(selected.value);
    };

    const inputValue = (name) => (event) => {
        setState({ ...state, [name]: event.target.value });
    };

    const submitForm = async (e) => {
        return Promise.resolve()
    }

    return (
        <div>
            <NavbarComponent />
            <div className="mycontainer mt-5 pb-5">
                <form onSubmit={submitForm}>
                    <div className="container-form mb-5">
                        <div className="form-group ">
                            <h1>แบบฟอร์มกรอกอาการ</h1>
                        </div>
                        <div className="two-form">
                            <div className="one-form">
                                <label className="form-range">อายุ(ปี)</label>
                                <input
                                    type="number"
                                    className="form-control w-100"
                                    value={age}
                                    onChange={inputValue("age")}
                                    min='0'
                                    max='100'
                                    required
                                />
                            </div>
                            <div className="one-form">
                                <label className="form-range">น้ำหนัก(กิโลกรัม)</label>
                                <input
                                    type="number"
                                    className="form-control w-100"
                                    value={weight}
                                    onChange={inputValue("weight")}
                                    min='0'
                                    max='150'
                                    required
                                />
                            </div>
                        </div>
                        <div className="one-form">
                            <label htmlFor="">อาการ</label>
                            <Dropdown
                                options={symptomOptions}
                                onChange={handleDropdownSymptom}
                                value={symptom}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="one-form">
                            <label htmlFor="">มีประวัติการแพ้คลอเฟนิรามีนหรือไม่</label>
                            <Dropdown
                                options={allergicOption}
                                onChange={handleDropdownAllergic}
                                value={allergic}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="one-form">
                            <label htmlFor="">เป็นโรคหอบหืด กระเพาะอาหาร ลำไส้อุดตัน <br/>ปัสสาวะไม่ออก หรือ โรคต่อมลูกหมากโตหรือไม่</label>
                            <Dropdown
                                options={relevantOption}
                                onChange={handleDropdownRelavant}
                                value={relevant}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="one-form">
                            <label htmlFor="">ประวัติการรับประทานยาท้องอืด ท้องเฟ้อ</label>
                            <Dropdown
                                options={eatenAgoOption}
                                onChange={handleDropdownEatenAgo}
                                value={eatenago}
                                placeholder="Select an option"
                            />
                        </div>
                        <div className="one-form">
                            <h4 className="alerts">ข้อความระวัง!!!</h4>
                            <ul>
                                <li className="alerts">ไม่ควรรับประทานยาเกินวันละ 6 เม็ด</li>
                                <li className="alerts">ไม่ควรใช้ยาติดต่อกันนานเกิน 7 วัน</li>
                                <li className="alerts">ยานี้อาจทำให้เกิดอาการง่วงซึม</li>
                                <input type="checkbox" className="form-check-input p-2" required /> <label className="alerts"><h5>รับทราบ</h5></label>
                            </ul>
                        </div>
                        <br />
                        <input type="submit" className="btn btn-primary w-50" value={"ยืนยัน"} />
                    </div>
                </form>
                <FooterComponent />
            </div>
        </div>
    );
};

export default AllergicFormComponent;