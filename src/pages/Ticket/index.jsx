import Home from '../Component/Home'

export default function Ticket()
{
    const objeto = localStorage.getItem('data')


    console.log(objeto);
    return(
        <div>
            <Home>
                
            </Home>
        </div>
    )
}