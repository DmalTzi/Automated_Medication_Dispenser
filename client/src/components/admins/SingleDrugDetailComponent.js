import { useState,useEffect } from "react";
import NavbarComponent from "./../layouts/NavbarComponent.js"
import FooterComponent from "./../layouts/FooterComponent.js"
import {useLocation, Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2"
import axios from "axios"
import { authToken } from "../../services/authorize.js";
import { pain_unaccept_line_msg_user } from "../../services/linemsg.js";

const SingleDrugDetailComponent = () =>{
    document.title = "ข้อมูลการขอยารายบุคล"
    const propsData = useLocation().state
    const navigate = useNavigate()
    const [datas, setDatas] = useState([])

    const checkDrugBySymptom =async(symptom)=>{
      return Promise.resolve()
    }

    const checkDrugTypeBySymptom = async(symptom)=>{
      return Promise.resolve()
    }

    const unaccept = async(detail_id,username) =>{
      return Promise.resolve()
    }

    const accept = async(detail_id,serial,name,username,symptom) =>{
      return Promise.resolve()
    }

    const roleCheck =(role) =>{
      return Promise.resolve()
    }

    const checkStatus = (statue) => {
      return Promise.resolve()
    }

    const aboutCheck =  (about)=>{
      return Promise.resolve()
  }

    useEffect(()=>{
      const FindOneData=async()=>{
        return Promise.resolve()
    }
      FindOneData()
      // eslint-disable-next-line
    },[])

  return (
    <div>

      <NavbarComponent />
      <div className="mycontainer flex-column-reverse p-2 mt-5 pb-5">
        {datas.map((data) => (
          <div className="row w-75 card-info">
            {aboutCheck(data.about) ?
              <div className="p-3">
                <div>
                  {roleCheck(data.username) ?
                    <h5 style={{ borderBottom: "1px solid silver", color: "black" }}>{data.usernameInfo[0].username}, {data.usernameInfo[0].name}</h5>
                    :
                    <h5 style={{ borderBottom: "1px solid silver", color: "black" }}>{data.usernameInfo[0].username}, {data.usernameInfo[0].name}, ชั้น {data.usernameInfo[0].room[0]}/{data.usernameInfo[0].room[2]}, เลขที่ {data.usernameInfo[0].number}</h5>
                  }
                  <div className="sub-info">
                    <p className="m-0">อายุ : {data.drugInfo[0].age}</p>
                    <p className="m-0">น้ำหนัก : {data.drugInfo[0].weight}</p>
                    <p className="m-0">อาการ : {data.drugInfo[0].symptom}</p>
                    {(["แพ้อากาศ", "แพ้ผื่นคัน", "น้ำมุกไหล"].includes(data.drugInfo[0].symptom)) ?
                      <>
                        <p className="m-0">มีประวัติการแพ้คลอเฟนิรามีนหรือไม่ : {data.drugInfo[0].allergic}</p>
                        <p className="m-0">เป็นโรคหอบหืด กระเพาะอาหาร ลำไส้อุดตัน ปัสสาวะไม่ออก หรือ โรคต่อลูกหมากโตหรือไม่ : {data.drugInfo[0].relevant}</p>
                        <p className="m-0">ประวัติการรับประทานย้าแก้แพ้ : {data.drugInfo[0].eatenago}</p>
                      </>
                      :
                      (["ท้องอืด ท้องเฟ้อ", "จุกเสียด"].includes(data.drugInfo[0].symptom)) ?
                        <>
                          <p className="m-0">มีประวัติการแพ้ไซเมทิโคนหรือไม่ : {data.drugInfo[0].allergic}</p>
                          <p className="m-0">เป็นโรคไทรอยด์ ภาวะฟีนิลคีโตนในปัสสาวะ มีการตั้งครรภ์หรือไม่ : {data.drugInfo[0].relevant}</p>
                          <p className="m-0">ประวัติการรับประทานยาแก้ท้องเสีย : {data.drugInfo[0].eatenago}</p>
                        </>
                        :
                        (["ปวดประจำเดือน"].includes(data.drugInfo[0].symptom)) ?
                          <>
                            <p className="m-0">ระดับความปวด : {data.drugInfo[0].painlv}</p>
                            <p className="m-0">อาการที่เกิดร่วมนอกจากอาการปวด : {data.drugInfo[0].cosymptom}</p>
                            <p className="m-0">มีประวัติการแพ้กรดเมฟีน่มิกหรือไม่ : {data.drugInfo[0].allergic}</p>
                            <p className="m-0">เป็นโรคตับหรือโรคไต หรือไม่ : {data.drugInfo[0].relevant}</p>
                            <p className="m-0">ก่อนหน้านี้ได้ทานยาแก้ปวดประจำเดือนแล้วกี่ชั่วโมง : {data.drugInfo[0].eatenago}</p>
                          </>
                          :
                          <>
                            <p className="m-0">ระดับความปวด : {data.drugInfo[0].painlv}</p>
                            <p className="m-0">อาการที่เกิดร่วมนอกจากอาการปวด : {data.drugInfo[0].cosymptom}</p>
                            <p className="m-0">มีประวัติการแพ้ยาพาราเซตามอลหรือไม่ : {data.drugInfo[0].allergic}</p>
                            <p className="m-0">เป็นโรคตับหรือโรคไต หรือไม่ : {data.drugInfo[0].relevant}</p>
                            <p className="m-0">ก่อนหน้านี้ได้ทานยาพาราเซตามอลมาแล้วกี่ชั่วโมง : {data.drugInfo[0].eatenago}</p>
                          </>
                    }


                    <p className="m-0">สถานการรับยา : {`${data.detailInfo[0].receivestatus}`}</p>
                    <p className="m-0">สถานะการอนุมัติ : {data.detailInfo[0].acceptstatus}</p>
                    <p className="m-0">Serial Number : {data.detailInfo[0].serialnumber}</p>
                  </div>
                  <p className="sub-info-time">{new Date(data.detailInfo[0].createdAt).toLocaleString()}</p>
                </div>
                {checkStatus(data.detailInfo[0].acceptstatus) &&
                  <div className="d-flex justify-content-center flex-column">
                    <Link className="btn btn-outline-success " onClick={() => accept(data.detail_id, data.detailInfo[0].serialnumber, data.usernameInfo[0].name, data.username, data.drugInfo[0].symptom)}>อนุมัติ</Link>
                    <Link className="btn btn-outline-danger mt-3" onClick={() => unaccept(data.detail_id, data.username)}>ไม่อนุมัติ</Link>
                  </div>}
              </div>
              : null}
          </div>
        ))}
        <FooterComponent />
      </div>

    </div>
  );
}

export default SingleDrugDetailComponent