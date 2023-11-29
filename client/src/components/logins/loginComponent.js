import { useState, useEffect } from "react"
import axios from "axios"
import NavbarComponent from "./../layouts/NavbarComponent.js"
import FooterComponent from "./../layouts/FooterComponent.js"
import { getUserId ,closeWindows, loginLIFF} from "./../../services/liffService.js"
import { authenticate } from "../../services/authorize.js"
import Swal from "sweetalert2"

const LoginComponent=()=>{
    document.title = "เข้าสู่ระบบ"

    const [state,setState] = useState({
        username:"",
        password:"",
    })

    const {username, password} = state

    const inputValue = name => event => {
        setState({...state,[name]:event.target.value})
   }

   const submitForm=async(e)=>{
    return Promise.resolve()
}

    useEffect(()=>{
        loginLIFF()
    },[])

    return(
        <div>
        <NavbarComponent/>
        <div className="container p-5 vh-80">
            <h1>เข้าสู่ระบบ</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>เลขประจำตัว</label>
                    <input type="text" className="form-control" 
                        required 
                        value={username} 
                        maxLength={5}
                        onChange={inputValue("username")}/>
                </div>
                <div className="form-group">
                    <label>รหัสผ่าน</label>
                    <input type="password" className="form-control"
                        required 
                        value={password} 
                        onChange={inputValue("password")}/>
                </div>
                <br/>
                <input type="submit" value="เข้าสู่ระบบ" className="btn btn-primary"/>
            </form>
        </div>
        <FooterComponent/>
        </div>
             
    )
}

export default LoginComponent