import { Link } from "react-router-dom"
import NavbarComponent from "./layouts/NavbarComponent.js"
import FooterComponent from "./layouts/FooterComponent.js"

const SelectComponent =()=>{
    return(
    <div>
        <NavbarComponent/>
        <div className="mycontainer-select m-2 pt-5 pb-5 ">
            <div className="form-group w">
                <h1>อาการ</h1>
            </div>
            <div className="two-blog">
                <Link className="btn btn-danger mybtn" to={"/pain/form"}>ปวดหัว</Link>
            </div>
            <div className="two-blog">
                <Link className="btn btn-danger mybtn" to={'/diarrhea/form'}>ท้องอืด ท้องเฟ้อ จุกเสียด</Link>
            </div>
            <div className="two-blog">
                <Link className="btn btn-danger mybtn" to={'/allergic/form'}>แพ้อากาศ แพ้ผื่นคัน น้ำมูกไหล</Link>
            </div>
            <div className="two-blog">
                <Link className="btn btn-danger mybtn" to={"/men/form"}>ปวดประจำเดือน</Link>
            </div>
            <FooterComponent />
            </div>
    </div>
    )
}

export default SelectComponent