import { createGlobalStyle } from "styled-components";
import themeList from "../data/themeList";

const GlobalStyles = createGlobalStyle`
 :root{
    /* colors */
    --darkBlue_1: #3B447A;
    --darkBlue_2: #222B5F;
    --darkBlue_3: #0A0F19;
    --darkBlue_4: #101826;
    --mediumSlateBlue: #6C62E2;
    --lightBlue_1: #F3F1FE;
    --lightBlue_2: #ADBDE3;
    --white: #ffffff;
    --black: #000000;

    /* other */ 
    --header-height : 50px
 }
 html {
    font-size: 10px;
 }
 body{
    background-color: ${({theme: {theme}}) => theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
 }
 *, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 a{
    text-decoration: none;
    cursor: pointer;
 }
 ul, li {
    list-style: none;
 }
 .container{
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
 }
 img, svg{
    width: 100%;
    height: 100%;
 }
`;

export default GlobalStyles
