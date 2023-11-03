import { Header, Main } from "./styles"

import Logo from '../../../assets/menu.png';

export default function Home()
{
    return(
        <>
            <Header>
                <div>
                    <h2>HELPDESK</h2>
                    <h3>SERVIÇOS</h3>
                </div>

                <img src={Logo} alt="oi" />
            </Header>
            <Main>

            </Main>
            <Footer>
                
            </Footer>
        </>
    )
}