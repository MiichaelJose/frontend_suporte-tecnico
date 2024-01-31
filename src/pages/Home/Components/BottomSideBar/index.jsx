import { Pag, Button } from "./styles"

export default function BottomSideBar({urlEl1, urlEl2}) {
    console.log(urlEl1);
    
    return(
        <Pag>
            <Button to={urlEl1}>registro</Button>
            <Button to={urlEl2}>cadastro</Button>
        </Pag>
    )
}