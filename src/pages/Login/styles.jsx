import styled from 'styled-components'

export const Pag = styled.div`
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    border: 1px solid black;
`

export const Section = styled.main`
    margin-top: 50px;
    padding: 15px;

    width: 100%;
    max-width: 375px;
    height: 70%;
    max-height: 500px;

    background-color: white;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    >p {
        margin-top: 25px;
    }   

    >section {
        width: 90%;
        height: 50%;
        flex-direction: column;
        display: flex;
        gap: 1.5rem;

        >input {
            height: 47px;
            width: 100%;
            border-radius: 5px;
            box-shadow: 1.9px 2px lightgray;
            padding-left: 20px;
            border: 0.4px solid lightgray;
        }

        >button {
            height: 55px;
            width: 125px;
            border-radius: 5px;
            font-weight:bold;
            margin-inline: auto;
        }
    }

    > div {
        display: flex;
        background-color: lightgray;
        border: 1rem;

        > img {
            width: 100px;
        }
    }
`