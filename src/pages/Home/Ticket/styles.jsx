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

export const AreaServicosTicket = styled.div`
    height: 90%;
    display: flex;
    align-items:center ;
    flex-direction: column;
    background-color: #bebebe;
`

export const Card = styled.div`
    width: 400px;
    max-width: 100%;
    height: 150px;
    padding: 20px;
    margin-top: 5px;

    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    background-color: white;

    > div > p {
        text-align: center;
        font-weight: bold;
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between; 
    
        > div {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        > div > p:nth-child(1) {
            font-weight: bold;
        }

        > div > p:nth-child(3) {
            font-weight: lighter;
            font-style: italic;
        }
    }
`

export const Image = styled.img`
    width: 45px;
    height: 45px;
    cursor: pointer;
`