import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     body {
        width: 100%;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0 !important;
        color: black;
        background: rgba(210, 213, 219, 0.14);
        overflow-x: hidden;
    }

    html {
        height: 100%;
        padding: 0 !important;
        overflow-x: hidden;
    }

    body {
        font-family: 'MuseoModerno', cursive;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #root {
        height: 100%;
    }

    .blue {
        color: #0397d9;
    }

    .primary {
        color: #007e78;
    }

    .accent {
        color: #6f967e;
    }

    .white {
        color: white;
    }

`;

export default GlobalStyle;
