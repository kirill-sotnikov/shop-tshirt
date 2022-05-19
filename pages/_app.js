import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F2F2F2;
    font-family:Inter;
    padding-bottom:300px;
  }
  p,h1{
      padding:0;
      margin:0;
  }
`;

const theme = {
  colors: {
    textTitleDark: "#302626",
    textDark: "#352C2C",
    shadowDark: "#C8C8C8",
    backgroundBody: "#F2F2F2",
    borderDark: "#CAC8C8",
    sizeDark: "#D7B6B6",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
