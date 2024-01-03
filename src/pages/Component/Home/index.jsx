import { useState } from 'react';

import { Header, AreaMenu, MenuLateral } from "./styles"

import LogoMenuAbrir from '../../../assets/menu.png';
import LogoMenuFechar from '../../../assets/close.png';

export default function Home()
{
    const [mostrarComponente, setMostrarComponente] = useState(false);

    function tela () {
        console.log(mostrarComponente);
        return <MenuLateral/>
    }

    const click = () => {
        setMostrarComponente(!mostrarComponente)
    }


    return(
        <>
            <Header>
                <div>
                    <h2>HELPDESK</h2>
                    <h3>SERVIÇOS</h3>
                </div>

                <img src={mostrarComponente ? LogoMenuFechar : LogoMenuAbrir} alt="logo-left-bar" onClick={() => click()}/>
            </Header>
            <AreaMenu>
                {mostrarComponente ? tela() : false }
            </AreaMenu>
        </>
    )
}