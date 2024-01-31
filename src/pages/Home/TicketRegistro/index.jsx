import { Section, Card,  AreaServicosTicket, Image} from "./styles"

import BottomSideBar from "../Components/BottomSideBar"

import MenuMobile from '../../../components/MenuMobile'
import IconUser from "../../../assets/icon-user.png"

export default function TicketRegistro() {
    const urlEl1 = "/home/ticket-registro" 
    const urlEl2 = "/home/ticket-cadastro"
    
    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar urlEl1={urlEl1} urlEl2={urlEl2}/>
                <AreaServicosTicket>
                    <Card>
                        <div>
                            <h3>TICKET ABERTO</h3>
                        </div>
                        <section>
                            <div>
                                <p>EQUIPAMENTO</p>
                                <p>COR</p>
                                <p>DATA</p>  
                            </div>
                            <Image src={IconUser}/>
                        </section>
                    </Card>
                </AreaServicosTicket>
            </Section>
        </>
    )
}