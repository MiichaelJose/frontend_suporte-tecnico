import {Route, Routes} from "react-router-dom"

import Login from "../pages/Login"

export function GroupRouters() 
{
    return(
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}