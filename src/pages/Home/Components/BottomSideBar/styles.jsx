import styled from "styled-components";

import { Link } from 'react-router-dom';

export const Pag = styled.div`
    width: 500px;
    max-width: 100%;
    height: 100px;
    max-height: 10%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #525152;
`

export const Button = styled(Link)`
    width: 100px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8a8a8a6b;
    color: white;
    text-decoration: none;
`