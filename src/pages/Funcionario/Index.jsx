import { Main , Section} from "./styles"

import Nav from "../Component/Nav"

export default function Funcionario() {
    return(
        <Main>
            <Nav> </Nav>
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
        </Main>
    )
}