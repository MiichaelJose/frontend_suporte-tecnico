import { Section, AreaCadastro } from "./styles"

import { config, urlLink } from "../../../config/config_script"

import MenuMobile from "../../../components/MenuMobile"
import FormChamado from "../../../components/FormChamado"
import Button from "../../../components/Button"

export default function TicketCadastro() {
    return(
        <>
            <MenuMobile>
                <Button url={urlLink.urlticketreg} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarreg}/>
                <Button url={urlLink.urlticketcad} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarcad}/>
            </MenuMobile>
            <Section>
                <AreaCadastro>
                    <FormChamado/>
                </AreaCadastro>  
            </Section>
        </>
    )
}