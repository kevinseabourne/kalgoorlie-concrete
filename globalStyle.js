import { createGlobalStyle } from "styled-components";
import regularFontWOFF2 from "./fonts/sfprodisplay-regular.woff2";
import regularFontWOFF from "./fonts/sfprodisplay-regular.woff";
import regularFontTTF from "./fonts/sfprodisplay-regular.ttf";
import regularFontSVG from "./fonts/sfprodisplay-regular.svg";
import mediumFontWOFF2 from "./fonts/sfprodisplay-medium.woff2";
import mediumFontWOFF from "./fonts/sfprodisplay-medium.woff";
import mediumFontTTF from "./fonts/sfprodisplay-medium.ttf";
import mediumFontSVG from "./fonts/sfprodisplay-medium.svg";
import semiBoldFontWOFF2 from "./fonts/sfprodisplay-semibold.woff2";
import semiBoldFontWOFF from "./fonts/sfprodisplay-semibold.woff";
import semiBoldFontTTF from "./fonts/sfprodisplay-semibold.ttf";
import semiBoldFontSVG from "./fonts/sfprodisplay-semibold.svg";
import boldFontWOFF2 from "./fonts/sfprodisplay-bold.woff2";
import boldFontWOFF from "./fonts/sfprodisplay-bold.woff";
import boldFontTTF from "./fonts/sfprodisplay-bold.ttf";
import boldFontSVG from "./fonts/sfprodisplay-bold.svg";

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "sfprodisplay-regular";
    font-weight: normal;
    font-style: normal;
    font-display: optional;
    src: url(${regularFontWOFF2}) format('woff2'),
       url(${regularFontWOFF}) format('font-woff'),
       url(${regularFontTTF})  format('truetype'),
       url(${regularFontSVG}) format('svg');
  }

  @font-face {
    font-family: "sfprodisplay-medium";
    font-weight: 500;
    font-style: normal;
    font-display: optional;
    src: url(${mediumFontWOFF2}) format('woff2'),
       url(${mediumFontWOFF}) format('font-woff'),
       url(${mediumFontTTF})  format('truetype'),
       url(${mediumFontSVG}) format('svg');
  }

  @font-face {
    font-family: "sfprodisplay-semibold";
    font-weight: 600;
    font-style: normal;
    font-display: optional;
    src: url(${semiBoldFontWOFF2}) format('woff2'),
       url(${semiBoldFontWOFF}) format('font-woff'),
       url(${semiBoldFontTTF}) format('truetype'),
       url(${semiBoldFontSVG}) format('svg');
  }


  @font-face {
    font-family: "sfprodisplay-bold";
    font-weight: bold;
    font-style: normal;
    font-display: optional;
    src: url(${boldFontWOFF2}) format('woff2'),
       url(${boldFontWOFF}) format('font-woff'),
       url(${boldFontTTF}) format('truetype'),
       url(${boldFontSVG}) format('svg');
  }


  body {
    margin: 0;
    font-family: "sfprodisplay-regular", Arial ,sans-serif;
    color: #272932;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0px;
    font-size: 16px;
    height: 100vh;
    background-color: black;
    scroll-behavior: smooth;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  *, ::before, ::after {
      box-sizing: border-box;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }

/* safari support to clear random 1px margin in inputs */
  input {
    margin: 0;
    font-family: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition: background-color 5000s ease-in-out 0s;
    width: 100% !important;
  }

  /* Error Message Styling */

  .Toastify__toast-container {
    width: 225px !important;
  }

  .Toastify__toast {
    min-height: 50px !important;
    font-family: "Roboto" !important;
    font-weight: 600 !important;
    border-radius: 7px !important;
    text-align: center;
  }

  .Toastify__toast--success {
    background-color: #18d047 !important;
  }

  .Toastify__toast--error {
    background-color: #ec5b5b !important;
  }

  .Toastify__progress-bar {
    height: 3.2px !important;
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    background-image: white;
  }

  .Toastify__close-button {
    color: white !important;
    display: none;
  }


  .DayPickerInput {
    width: 100%;
  }

  .DayPickerInput > input {
    padding: 13px 54px 14px 12px;
    font-size: 1rem;
    border-radius: 9px;
    outline: none;
    box-sizing: border-box;
    font-weight: 500;
    font-family: inherit;
    color: grey;
    width: 100%;
    border: none;
  }


.css-2b097c-container {
  width: 100%;
  border: none;
  border-radius: 9px;
}

.css-yk16xz-control {
  border: none !important;
  border-radius: 9px !important;
  font-size: 1rem !important;
  padding: 5.33px 5px;
  font-family: inherit;
}

 .css-1pahdxg-control {
     border-radius: 9px !important;
     font-size: 1rem !important;
     padding: 5.33px 5px;
     border: none !important;
     box-shadow: none !important;
 }

 .css-1pahdxg-control:hover {
     border: none;
     box-shadow: none;
 }

 .css-26l3qy-menu {
     font-size: 1rem;
 }

`;
