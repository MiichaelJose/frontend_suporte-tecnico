import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    max-height: 10vh;
    // position: relative;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    display: flex;

    > div {
        width: fit-content;
        height: fit-content;
        color: white;
        
        >h3 {
            text-align: right;
        }
    }
`;

export const AreaMenu = styled.div` 
    width: 100%;
    height: 90vh;
`

export const MenuLateral = styled.div` 
    width: 70vw;
    height: 100%;
    margin-left: auto;
    
    background-color: #838383;
`

export const Button = styled.button`
    width: 85px;
    height: 50px;

    background-color: white;
`;