import { useState } from 'react';

import { Main, Header, MenuLateral, Button, Opcoes } from "./styles"

import Logo from "../LogoEmpresa"

import LogoMenuAbrir from '../../../assets/menu.png';
import LogoMenuFechar from '../../../assets/close.png';

export default function Home()
{
    const [mostrarComponente, setMostrarComponente] = useState(false);

    function tela () {
        return(
            <MenuLateral>
                <Button to={"/home/ticket"}><h2>Tickets</h2></Button>
                
                <Button to={"/home/ticket"}><h2>Usuarios</h2></Button>

                <Button to={"/home"}><h2>Home</h2></Button>
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
                        <p>NOME</p>
                        <p>FUNCAO</p>
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