import { Section, AreaCadastro } from "./styles"

import MenuMobile from "../../Component/MenuMobile"
import BottomSideBar from "../Components/BottomSideBar"
import FormChamado from "../../Component/FormChamado"

export default function TicketCadastro() 
{
    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar/>
                <AreaCadastro>
                    <FormChamado/>
                </AreaCadastro>  
            </Section>
        </>
    )
}