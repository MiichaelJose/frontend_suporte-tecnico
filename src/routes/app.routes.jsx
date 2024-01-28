import {Route, Routes} from "react-router-dom"

import AreaCriarChamado from "../pages/Chamado"
import Login from "../pages/Login"
import Home from "../pages/Home"
import TicketRegistro from "../pages/Home/TicketRegistro"
import TicketCadastro from "../pages/Home/TicketCadastro"

export function GroupRouters() 
{
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/chamado" element={<AreaCriarChamado />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/ticket-registro" element={<TicketRegistro />} />
            <Route path="/home/ticket-cadastro" element={<TicketCadastro />} />
        </Routes>
    )
}