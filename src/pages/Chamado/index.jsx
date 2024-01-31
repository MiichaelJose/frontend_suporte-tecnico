import { Pag } from "./styles"

import Logo from "../../components/LogoEmpresa"
import FormChamado from "../../components/FormChamado"

export default function Funcionario() {
    const text = "preencha os campos a seguir para acessar tela de chamados"  

    return(
        <Pag>
            <Logo/>
            <FormChamado text={text}/>
        </Pag>
    )
}