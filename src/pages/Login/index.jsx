import { Pag, Nav, Main } from "./styles"

export default function Login()
{
    return(
        <Pag>
            <Nav>
                <h1> HELPDESK </h1>
            </Nav>
            <Main>
                <div>
                    <h4>Faça o login para acessar a interface de gerenciamento!</h4>
                </div>

                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Login</button>
                </form>
            </Main>
        </Pag>
    )
}