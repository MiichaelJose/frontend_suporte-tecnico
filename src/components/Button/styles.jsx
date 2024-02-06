import styled from "styled-components";

import { Link } from "react-router-dom";

export const Main = styled(Link)`
    width: ${(props) => props.width};
    max-width: 100%;
    height: 35px;
    max-height: 45px;
    background-color: ${(props) => (props.backgroundcolor != undefined) ? props.backgroundcolor : "#4F4F4F"} ; 
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`