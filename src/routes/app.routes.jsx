import {Route, Routes} from "react-router-dom"

import Funcionario from "../pages/Funcionario"
import Login from "../pages/Login"
import Ticket from "../pages/Ticket"


export function GroupRouters() 
{
    return(
        <Routes>
            <Route path="/" element={<Funcionario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ticket" element={<Ticket />} />
        </Routes>
    )
}