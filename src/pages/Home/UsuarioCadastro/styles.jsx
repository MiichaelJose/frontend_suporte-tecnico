import styled from "styled-components"

export const Section = styled.section`
    height: 83vh;
    overflow-y:auto ;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;

    /* Para navegadores baseados em WebKit (como Chrome e Safari) */
    &::-webkit-scrollbar {
        width: 5px;
        border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1c8;
        border-radius: 6px;
    }
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
    height: 80%;
    max-height: 600px;

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