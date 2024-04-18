import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
`

export const AreaCadastro = styled.div`
    width: 100%;
    height: 90%;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormUsuario = styled.div`
    width: 100%;
    max-width: 375px;
    height: 500px;

    background-color: #838383;
    border-radius: 5px;
    color: white;
    padding: 7px;

    text-align: center;
    
    > div {
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: left;
    }

    button {
        background-color: #4F4F4F;
        color: white;
        width: 50%;
        height: 10%;
        max-height: 45px;
    }
`