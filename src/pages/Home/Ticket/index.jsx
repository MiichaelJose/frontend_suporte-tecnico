import { Section, Opcoes, Button, Card,  AreaServicosTicket, Image} from "./styles"

import MenuMobile from '../../Component/MenuMobile'
import IconUser from "../../../assets/icon-user.png"


export default function Ticket() {
    return(
        <>
            <MenuMobile/>
            <Section>
                 <Opcoes>
                    <Button>registros</Button>
                    <Button>cadastrar</Button>
                </Opcoes>
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