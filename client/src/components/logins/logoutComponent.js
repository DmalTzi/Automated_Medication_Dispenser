import {useEffect} from "react"
import axios from "axios"
import { authToken } from "../../services/authorize"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { closeWindows } from "../../services/liffService"


const LogoutComponent = () =>{
    const navigate = useNavigate()
    useEffect(()=>{
        return Promise.resolve()
        fetchData()
      // eslint-disable-next-line
    })

}

export default LogoutComponent