import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif; 
    }

    body{
        width: 100vw;
        height: 100vh;
    }
`;
