import { Section, Card,  AreaServicosTicket, Image} from "./styles"

import { config, urlLink } from "../../../config/config_script"

import BottomSideBar from "../Components/BottomSideBar"
import MenuMobile from '../../../components/MenuMobile'
import IconUser from "../../../assets/icon-user.png"
import Button from "../../../components/Button"

export default function TicketRegistro() {
    return(
        <>
            <MenuMobile/>
            <Section>
                <BottomSideBar>
                    <Button url={urlLink.urlticketreg} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarreg}/>
                    <Button url={urlLink.urlticketcad} background={config.buttoncolorbar} width={"100px"} text={config.buttontextbarcad}/>
                </BottomSideBar>
                <AreaServicosTicket>
                    <Card>
                        <div>
                            <h3>TICKET ABERTO</h3>
                        </div>
                        <section>
                            <div>
                                <p>COMPUTADOR</p>
                                <p>Preto</p>
                                <p>14-02-2024</p>  
                            </div>
                            <Image src={IconUser}/>
                        </section>
                    </Card>
                </AreaServicosTicket>
            </Section>
        </>
    )
}