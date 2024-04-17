import styled from "styled-components";

import { Link } from 'react-router-dom';


export const Main = styled.main`
    width: 100%;
    height: 100%;
    max-height: 20vh;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: static;
`;

export const Header = styled.header`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 0.5em;
`;

export const MenuLateral = styled.div` 
    width: 100vw;
    height: 80vh;
    background-color: #414143;

    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    overflow: hidden;
`

export const Button = styled(Link)`
    color: white;
    text-align: center;
    width: 100px;
    padding-bottom: 1rem;
    border-bottom: 1px solid white;
    text-decoration: none;
    cursor: pointer;
`

export const Opcoes = styled.div`
    height: 7vh;
    width: 100%;
    align-items: center;
    padding: 0.8em;
    display: flex;
    justify-content:space-between;
    background-color: white;
    font-weight: bold;

    #bordaleft {
        border-left: 3px solid black;
        padding: 5px;
        cursor: pointer;
    }
`

