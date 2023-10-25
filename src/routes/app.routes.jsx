import {Route, Routes} from "react-router-dom"

import Login from "../pages/Login"
import Ticket from "../pages/Ticket"

export function GroupRouters() 
{
    return(
        <Routes>
            <Route path="/" element={<Ticket />} />
        </Routes>
    )
}