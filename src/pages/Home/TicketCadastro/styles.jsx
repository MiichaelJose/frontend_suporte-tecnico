import styled from "styled-components"

export const Section = styled.div`
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
    padding-top: 15px;
    height: 90%;
`