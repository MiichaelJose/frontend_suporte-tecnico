import { Section, AreaCadastro } from "./styles"

import MenuMobile from '../../../components/MenuMobile'
import BottomSideBar from "../Components/BottomSideBar"

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
                            
                        </div>
                    </FormUsuario>
                </AreaCadastro> 
            </Section>  
        </>
    )
}