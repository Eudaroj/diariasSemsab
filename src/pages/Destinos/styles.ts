import styled from 'styled-components'

export const DestinosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;
  padding-top: 6vh;

  margin: 3vh auto;

  table {
    flex: 1;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 2vh;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 2.3vh;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    td {
      padding: 2vh;
      font-size: 2vh;
      width: 36vw;

      /* &:nth-child(1) {
        width: 30%;
        text-align: left;
        font-size: 1rem;
      } */
    }

    tr {
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
