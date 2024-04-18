import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Main = styled.main`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    background-color: ${props => props.theme.colors.black};
`;

export const Header = styled.header`
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 0.5em;
`;

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

export const BottomSideBar = styled.div`
    width: 500px;
    max-width: 100%;
    height: 7vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #525152;
`


export const MenuLateral = styled.div` 
    width: 50%;
    height: 70vh;
    background-color: #414143;
    position: fixed;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 7px 8px rgba(0, 0, 0, 0.1);
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



