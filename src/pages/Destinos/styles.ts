import styled from 'styled-components'

export const DestinosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;
  padding-top: 2rem;

  margin: 1.8rem auto;

  table {
    flex: 1;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1.2rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.2rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    td {
      padding: 1rem;
      font-size: 1.2rem;
      width: 40rem;

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
