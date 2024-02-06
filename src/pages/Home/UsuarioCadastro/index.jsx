import { Section, AreaCadastro, FormUsuario } from "./styles"

import { config, urlLink } from "../../../config/config_script"

import MenuMobile from '../../../components/MenuMobile'
import BottomSideBar from "../Components/BottomSideBar"
import Input from "../../../components/Input"
import Button from "../../../components/Button"

export default function UsuarioCadastro() {
    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar>
                    <Button url={urlLink.urluserreg} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarreg}/>
                    <Button url={urlLink.urlusercad} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarcad}/>
                </BottomSideBar>
                <AreaCadastro>
                    <FormUsuario>
                        <div>
                            <p>Nome de Usuario</p>
                            <Input type="text" width={config.width100}/>   
                            <p>CPF</p>
                            <Input type="text" width={config.width70}/>
                            <p>Senha de primeiro acesso</p>
                            <Input type="text" width={config.width70}/>
                            <p>Função</p>
                            <Input type="text" width={config.width50}/>

                            <Button width={"50%"} text={config.buttontextform}/> 
                        </div>
                    </FormUsuario>
                </AreaCadastro> 
            </Section>  
        </>
    )
}