import {Route, Routes} from "react-router-dom"

import AreaCriarChamado from "../pages/AreaCriarChamado"
import Login from "../pages/Login"
import Home from "../pages/Home"

import Ticket from "../pages/Home/Ticket"

export function GroupRouters() 
{
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/criarchamado" element={<AreaCriarChamado />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/ticket" element={<Ticket />} />
        </Routes>
    )
}