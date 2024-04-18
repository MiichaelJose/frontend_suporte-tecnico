import styled from "styled-components"

export const Pag = styled.div`
    padding: 7px;

    width: 100%;
    max-width: 375px;
    height: 500px;

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

    textarea {
        width: 100%;
        height: 100px;
        background-color: #BCBBBB;
    }
`

/* button {
        background-color: #4F4F4F;
        color: white;
        width: 50%;
        height: 10%;
        max-height: 45px;
    }

   */