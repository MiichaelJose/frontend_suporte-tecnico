
import { Section, Opcoes, Button, Card,  AreaServicosTicket} from "./styles"

import MenuMobile from '../../Component/MenuMobile'

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

                    <div>

                        
                    </div>


                </AreaServicosTicket>
            </Section>
        </>
    )
}