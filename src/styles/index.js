import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     body {
        width: 100%;
        height: auto;
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
        font-family: 'Roboto', Arial, sans-serif,
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .heading {
        font-size: 30px;
        padding: 0 10px;
    }

    .active {
        background: #FFD300 !important;
    }

    .completed {
        background: #00A400 !important;
    }

    .canceled {
        background: #FF3333 !important;
    }

    .chip {
        min-width: 90px;
        color: white;
    }

    .blue {
        color: #0397d9;
    }

    .green {
        color: #00A400;
    }

    .red {
        color: #FF5075;
    }

    .primary: {
        color: #3D4451;
    }

    .white {
        color: white;
    }

    .react-pagination-js-border-bottom {
        text-align: center;
    }

    .page {
        font-size: 18px;
    }

    .react-pagination-js-border-bottom ul {
        line-height: inherit !important;
    }

    body .react-pagination-js-border-bottom .is-active {
        font-size: 15px;
        border: 1px solid;
        height: auto;
        padding: 3px 7px;
        margin: 15px 0;
    }

`;

export default GlobalStyle;
