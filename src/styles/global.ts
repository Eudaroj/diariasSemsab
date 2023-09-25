import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: calc((2vw + 2vh) / 3.5);

    &::-webkit-scrollbar {
      width: 15px;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme['gray-900']};
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme['gray-700']};
      border-radius: 9px;
      border: 4px solid ${(props) => props.theme['gray-900']};;
    }
  }

  body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`
