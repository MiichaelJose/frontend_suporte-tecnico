import { Section } from "./styles"

import Img from "../../assets/img-home.png"
import MenuMobile from '../../components/MenuMobile'

import { useToken } from '../../components/Token/TokenContext';

export default function Ticket() {
    const { expiresIn } = useToken();

    return(
        <>
            <MenuMobile />

            <Section>
                <img src={Img} alt="" />
                <h1>Bem-Vindo ao HelpDesk {expiresIn}</h1>
                <h2>Explore o sistema através do menu!</h2>
            </Section>
        </>
    )
}
