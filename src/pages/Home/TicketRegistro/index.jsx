import { Section, Card,  AreaServicosTicket, Image} from "./styles"

import BottomSideBar from "../Components/BottomSideBar"

import MenuMobile from '../../Component/MenuMobile'
import IconUser from "../../../assets/icon-user.png"

export default function TicketRegistro() {
    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar/>
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