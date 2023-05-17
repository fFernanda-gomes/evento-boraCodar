import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        height: 100vh;
        width: 100%;
        background: linear-gradient(102.32deg, #030422 -2.74%, #090114 101.6%);

        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff;
    }
`