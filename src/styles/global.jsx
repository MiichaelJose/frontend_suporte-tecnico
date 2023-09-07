import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');
    
    * {
        margin: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4 {
        font-family: 'Titillium Web', sans-serif;
    }

    button {
        border: none;
        border-radius: 5px;
    }

    input {
        padding-left: 7px;
        font-weight: bold;
        font-size: 14px;
    }
`