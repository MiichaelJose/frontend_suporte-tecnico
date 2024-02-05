import { Section } from "./styles"

import Img from "../../assets/img-home.png"

import MenuMobile from '../../components/MenuMobile'

export default function Ticket()
{
    return(
        <>
            <MenuMobile />

            <Section>
                <img src={Img} alt="" />
                <h1>Bem-Vindo ao HelpDesk</h1>
                <h2>Explore o sistema através do menu!</h2>
            </Section>
        </>
    )
}
