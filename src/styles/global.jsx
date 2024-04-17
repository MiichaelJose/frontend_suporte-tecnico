import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        height: 100%;
        font-size: 12px;
        background-color: ${props => props.theme.colors.black};
    }

    h1, h2, h3, h4 {
        font-family: 'Bebas Neue', sans-serif;
    }
    
    p {
        font-size: 0.85rem;
    }

    input, button, textarea {
        outline: none;
        border: none;
    }

    input, textarea   {
        padding-inline: 0.4rem;
    }

    input {
        border-radius: 0.2rem;
    }

    .info {
        font-size: 0.7rem;
        font-style: italic;
    }
`