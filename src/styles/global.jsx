import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        font-size: 12px;
        background-color: ${props => props.theme.colors.black };
    }

    h1, h2, h3, h4 {
        font-family: 'Bebas Neue', sans-serif;
    }
    
    p {
        font-size: 1.18em;
    }

    input, button, textarea {
        outline: none;
        border: none;
    }

    input, textarea   {
        padding-left: 15px;
    }
`