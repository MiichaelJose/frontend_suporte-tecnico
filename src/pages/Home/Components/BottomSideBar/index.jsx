import { Pag, Button } from "./styles"

export default function BottomSideBar() {
    return(
        <Pag>
            <Button to={"/home/ticket-registro"}>registro</Button>
            <Button to={"/home/ticket-cadastro"}>cadastro</Button>
        </Pag>
    )
}