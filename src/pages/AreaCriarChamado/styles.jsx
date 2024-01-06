import styled from "styled-components";

export const Pag = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    border: 1px solid black;
`

export const Section = styled.div`
    margin-top: 50px;
    padding: 15px;

    width: 100%;
    max-width: 375px;
    height: 80%;
    max-height: 600px;

    color: white;
    background-color: #838383;
    border-radius: 5px;
    text-align: center;
    
    > div{
        height: 90%;

        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    input {
        height: 10%;
        max-height: 45px;
        width: 100%;
        border-radius: 5px;
        background-color: #BCBBBB;
    }

    button {
        background-color: #4F4F4F;
        color: white;
        width: 50%;
        height: 10%;
        max-height: 45px;
    }

    textarea {
        width: 100%;
        height: 100px;
        background-color: #BCBBBB;
    }

    #bloco-inputs {
        h4 {
            margin-top: 15px;
        }
    }

    
`