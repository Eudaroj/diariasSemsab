import styled from 'styled-components'

export const DestinosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;

  margin: 1rem auto;
  width: 50%;

  table {
    flex: 1;
    border-collapse: collapse;
    margin: 1.5rem 0rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.2rem;
      /* line-height: 1.6; */
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;
      font-size: 0.875rem;
      text-align: center;

      &:nth-child(1) {
        width: 30%;
        text-align: left;
        font-size: 1rem;
      }
    }

    tr {
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
