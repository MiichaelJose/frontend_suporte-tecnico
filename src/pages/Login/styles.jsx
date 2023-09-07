import styled from 'styled-components'

export const Pag = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    display: flex;
    border: 1px solid black;
`

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    max-height: 10%;
    border: 2px solid lightpink;

    h1 {
        text-align: center;
        line-height: 70px;
    }
`

export const Main = styled.nav`
    width: 100%;
    height: 80%;
    border: 3px solid gray;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    > div {
        width: 300px;
        max-width: 90%;
        margin-top: 70px;
        text-align: center;
        letter-spacing: 1.3px;
    }

    form {
        width: 350px;
        max-width: 90%;
        height: 450px;
        max-height: 90%;
        display: flex;
        flex-direction: column;
        margin-top: 60px;

        input {
            margin-top: 35px;
            border-radius: 8px;
        }

        button {
            margin-top: 55px;
        }

        > input, button{
            height: 45px;
            border: 3px solid lightgray;
        }
    }
`