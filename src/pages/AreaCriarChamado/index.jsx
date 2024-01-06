import { Pag , Section} from "./styles"

import Logo from "../Component/LogoEmpresa"

export default function Funcionario() {
    return(
        <Pag>
            <Logo/>
            <Section>
                <p>preencha os campos a seguir para acessar tela de chamados</p>
                
                <div>
                    <h4>CPF</h4>
                    <input type="text" />
                    
                    <h4>DEPARTAMENTO</h4>
                    <input type="text" /> 

                    <h4>SERIAL EQUIPAMENTO</h4>
                    <input type="text" />  

                    <h4>DESCRIÇÃO</h4>
                    <textarea></textarea>

                    <button>ACIONAR</button>
                </div>
            </Section>
        </Pag>
    )
}