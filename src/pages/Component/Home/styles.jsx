import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 150px;
    max-height: 30%;
    border: 2px solid lightpink;
    position: fixed;
    text-align: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;

    > h1 {
        margin-top: 10px;
    }
`;

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    background-color: #e7b6e7df;
    align-items: center;
`;

export const Button = styled.button`
    width: 85px;
    height: 50px;

    background-color: white;
`;