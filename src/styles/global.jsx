import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    body {
        background-color: ${props => props.theme.colors.black };
    }

    h1, h2, h3, h4 {
        font-family: 'Bebas Neue', sans-serif;
    }
    
    p {
        font-size: 1.1rem;
    }

    input, button, textarea {
        outline: none;
        border: none;
    }
`