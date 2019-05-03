import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`;
