import styled from 'styled-components'

export const UltimasPortariasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;

  margin: 2rem 1rem 0;

  table {
    flex: 1;
    border-collapse: collapse;
    margin-top: 1.5rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

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
      line-height: 0.3;
      text-align: center;

      &:nth-child(2) {
        width: 30%;
        text-align: left;
      }
    }

    tr {
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
    }
  }

  a {
    color: ${(props) => props.theme['gray-100']};
  }
`

export const CabecalhoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
