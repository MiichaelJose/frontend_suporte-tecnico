import { Section, AreaCadastro } from "./styles"

import MenuMobile from "../../../components/MenuMobile"
import BottomSideBar from "../Components/BottomSideBar"
import FormChamado from "../../../components/FormChamado"

export default function TicketCadastro() 
{
    const urlEl1 = "/home/ticket-registro" 
    const urlEl2 = "/home/ticket-cadastro"

    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar urlEl1={urlEl1} urlEl2={urlEl2}/>
                <AreaCadastro>
                    <FormChamado/>
                </AreaCadastro>  
            </Section>
        </>
    )
}