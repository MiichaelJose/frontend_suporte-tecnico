import { useState } from 'react';

import { Main, Header, MenuLateral, Button, Opcoes } from "./styles"

import Logo from "../LogoEmpresa"

import LogoMenuAbrir from '../../assets/menu.png';
import LogoMenuFechar from '../../assets/close.png';

export default function Home()
{
    const [mostrarComponente, setMostrarComponente] = useState(false);

    function tela () {
        return(
            <MenuLateral>
                <Button to={"/home/ticket-registro"}><h3>TICKET</h3></Button>
                <Button to={"/home/usuario-cadastro"}><h3>USUARIO</h3></Button>
                <Button to={"/home"}><h3>HOME</h3></Button>
            </MenuLateral>
        )
    }

    const click = () => {
        setMostrarComponente(!mostrarComponente)
    }


    return(
        <>
            <Main>
                <Header> 
                    <Logo/>
                    <img src={mostrarComponente ? LogoMenuFechar : LogoMenuAbrir} alt="logo-left-bar" onClick={() => click()}/>
                </Header>
                <Opcoes>
                    <div>
                        <p>Mikaelly J. Silva</p>
                        <p>ADM</p>
                    </div>
                    <div id='bordaleft'>
                        <p>SAIR</p>
                    </div>
                </Opcoes>
            </Main>
            
            {mostrarComponente ? tela() : false }
        </>
    )
}