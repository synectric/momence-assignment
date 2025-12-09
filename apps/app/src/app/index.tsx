import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { Container, MainContent } from './components';
import { theme } from './theme';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <MainContent />
      </Container>
    </ThemeProvider>
  </QueryClientProvider>
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
