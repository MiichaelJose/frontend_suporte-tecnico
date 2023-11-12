import { Main, Section } from './styles'

import Nav from '../Component/Nav'

export default function Funcionario()
{
    return(
        <Main>
            <Nav> </Nav>
            <Section>
                <h4>preencha os campos a seguir para acessar tela de chamados</h4>
                
                <div>
                    <div>
                        <h4>CPF</h4>
                        <input type="text" />
                    </div>
                    
                    <div id='bloco-inputs'>
                        <h4>DEPARTAMENTO</h4>
                        <input type="text" /> 

                        <h4>SERIAL EQUIPAMENTO</h4>
                        <input type="text" />  
                    </div>

                    <div>
                        <h4>DESCRIÇÃO</h4>
                        <textarea></textarea>
                    </div>

                    <button>ACIONAR</button>
                </div>
            </Section>
        </Main>
    )
}