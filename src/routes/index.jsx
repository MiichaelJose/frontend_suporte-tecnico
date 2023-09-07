import {BrowserRouter} from "react-router-dom"

import {GroupRouters} from "./app.routes"

export function Routes()
{
    return(
        <BrowserRouter>
            <GroupRouters/>
        </BrowserRouter>
    )
}