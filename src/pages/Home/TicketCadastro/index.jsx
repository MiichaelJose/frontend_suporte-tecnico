import { Section, AreaCadastro } from "./styles"

import { config, urlLink } from "../../../config/config_script"

import MenuMobile from "../../../components/MenuMobile"
import BottomSideBar from "../Components/BottomSideBar"
import FormChamado from "../../../components/FormChamado"
import Button from "../../../components/Button"

export default function TicketCadastro() {
    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar>
                    <Button url={urlLink.urlticketreg} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarreg}/>
                    <Button url={urlLink.urlticketcad} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarcad}/>
                </BottomSideBar>
                <AreaCadastro>
                    <FormChamado/>
                </AreaCadastro>  
            </Section>
        </>
    )
}