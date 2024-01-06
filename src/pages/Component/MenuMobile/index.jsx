import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Header, MenuLateral, Button } from "./styles"

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
            <Header>
                <Logo/>

                <img src={mostrarComponente ? LogoMenuFechar : LogoMenuAbrir} alt="logo-left-bar" onClick={() => click()}/>
            </Header>
            
            {mostrarComponente ? tela() : false }
           
        </>
    )
}