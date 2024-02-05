import { Section, AreaCadastro, FormUsuario } from "./styles"

import MenuMobile from '../../../components/MenuMobile'
import BottomSideBar from "../Components/BottomSideBar"

import Input from "../../../components/Input"

export default function UsuarioCadastro() {
    const urlEl1 = "/home/usuario-registro" 
    const urlEl2 = "/home/usuario-cadastro"

    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar urlEl1={urlEl1} urlEl2={urlEl2} />
                <AreaCadastro>
                    <FormUsuario>
                        <p>Cadastrar técnico</p>
                    
                        <div>
                            <p>Nome de Usuario</p>
                            <Input type="text" content={"100%"}/>   
                            <p>CPF</p>
                            <Input type="text" content={"70%"}/>
                            <p>Senha de primeiro acesso</p>
                            <Input type="text" content={"70%"}/>
                            <p>Função</p>
                            <Input type="text" content={"50%"}/>

                            <button>CADASTRAR</button>  
                        </div>
                    </FormUsuario>
                </AreaCadastro> 
            </Section>  
        </>
    )
}