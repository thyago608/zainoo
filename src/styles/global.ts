import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --black:#000000;
        --gray:#717171;
        --gray-light:#E9E9E9;
    }

    body{
        font-family: "Poppins", sans-serif;
        font-weight: 100;
    }
    
    a{
        text-decoration: none;
        color: inherit;
    }

    ul{
        list-style:none;
    }

    img{
        width: 100%;
        height: 100%;
    }
    html{
        @media(max-width: 800px){
            font-size: 87.5%;  //14px
        }
        @media(max-width: 1120px){
            font-size: 93.75%; //15px
        }
    }
`;
