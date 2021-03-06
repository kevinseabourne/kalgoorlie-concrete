import App from "next/app";
import Header from "../components/header";
import AppContext from "../context/appContext";
import { GlobalStyle } from "../globalStyle";
import styled, { ThemeProvider } from "styled-components";
import logger from "../pages/api/logger";
import { ToastContainer } from "react-toastify";

logger.init();

const theme = {
  regular: "sfprodisplay-regular",
  medium: "sfprodisplay-medium",
  semiBold: "sfprodisplay-semibold",
  bold: "sfprodisplay-bold",
  white: "#FFFFFF",
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppContext.Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Main id="main">
          <ToastContainer />
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MyApp;

const Main = styled.main``;
