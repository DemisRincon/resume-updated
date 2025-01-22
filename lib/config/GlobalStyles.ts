import { createGlobalStyle } from "styled-components";
import defaultTheme from "./defaultTheme";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin-ext"], weight: "200" });
const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: ${poppins};
    }
 
    h1, h2, h3, h4, h5 {
        font-size: 2rem;
        font-weight: 600;
        color: ${defaultTheme.colors.white};
        text-align: center;
        max-width: 80%;
        margin: 1rem;
    }
    
    h2{
        font-size: 1.75rem;
    }
    
    h3{
        font-size: 1.5rem;
    }
    
    h4{
        font-size: 1.25rem;
    }

    h5{
        font-size: 1rem;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    li{
        text-align: start;
    }

    a{
        text-decoration: none;
        color: ${defaultTheme.colors.white};
    }
`;

export default GlobalStyles;
