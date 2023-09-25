import styled from 'styled-components'

export const Pag = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    border: 1px solid black;
`

export const Nav = styled.div`
    width: fit-content;
    height: fit-content;
    margin-top: 15px;
    justify-content: center;
    color: white;

    >h1 {
        text-align: center;
    }
    >h3 {
        text-align: right;
    }
`
