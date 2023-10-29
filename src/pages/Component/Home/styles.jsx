import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    max-height: 30%;
    position: fixed;
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

/*export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    background-color: #e7b6e7df;
    align-items: center;
`;
*/

export const Button = styled.button`
    width: 85px;
    height: 50px;

    background-color: white;
`;