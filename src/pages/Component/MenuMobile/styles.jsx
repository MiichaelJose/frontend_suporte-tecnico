import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Header = styled.header`
    width: 100%;
    height: 100px;
    max-height: 10vh;
    align-items: center;
    justify-content: space-around;
    display: flex;
    padding: 0.8em;

    position: static;
`;


export const MenuLateral = styled.div` 
    width: 100vw;
    height: 90vh;
    position: fixed;
    background-color: #414143;

    position: fixed;
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