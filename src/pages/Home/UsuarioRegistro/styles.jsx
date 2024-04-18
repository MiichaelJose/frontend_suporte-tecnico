import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
`

export const AreaUsuarios = styled.div`
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
    
        > div:nth-child(1) {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        > div:nth-child(2) {
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            > div {
                width: 100%;
                justify-content: space-evenly;
                display: flex;
            }
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