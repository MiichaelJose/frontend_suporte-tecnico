import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #8E8CE4;
    }

    h1, h2, h3, h4 {
        font-family: 'Bebas Neue', sans-serif;
    }
    
    p {
        font-size: 1.17rem;
    }

    input, button {
        outline: none;
        border: none;
    }
`