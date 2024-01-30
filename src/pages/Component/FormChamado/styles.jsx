import styled from "styled-components"

export const Pag = styled.div`
    padding: 7px;

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