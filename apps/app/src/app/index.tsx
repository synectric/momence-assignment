import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Container, MainContent } from './components';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <MainContent />
    </Container>
  </ThemeProvider>
);

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme: { palette } }) => palette.background.main};
    font-family: 'Epilogue', sans-serif;
    margin: 0;
  }
`;
