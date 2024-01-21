import styled from "styled-components";

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
export const Opcoes = styled.div`
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

export const Button = styled.button`
    width: 100px;
    height: 35px;
    text-align: center;
    background-color: #8a8a8a6b;
    color: white;
`

export const Card = styled.div`
    width: 400px;
    max-width: 100%;
    height: 150px;

    padding: 5px;
    margin-top: 5px;
    background-color: red;
`

export const AreaServicosTicket = styled.div`
    height: 90%;
    background-color: pink;
`