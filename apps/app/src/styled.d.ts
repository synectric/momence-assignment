import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      background: {
        main: string;
        content: string;
        accent: string;
        accentDark: string;
      };
      border: string;
    };
  }
}
