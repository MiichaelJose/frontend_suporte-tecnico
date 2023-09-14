import { Header, Nav, Button } from "./styles"

export default function Home()
{
    return(
        <>
            <Header>
                <h1>HELPDESK</h1>

                <Nav>
                    <Button>Cadastrar</Button>
                    <Button>Usuarios</Button>
                </Nav>
            </Header>
        </>
    )
}