import styled from 'styled-components'

export const UltimasPortariasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex: 1;

  font-size: 2vh;
  /* margin: 5vh 1rem 0; */

  table {
    flex: 1;
    border-collapse: collapse;
    margin-top: 0.5rem;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 0.8rem 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 2.5vh;

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
      padding: 0.4rem 1rem;
      font-size: 2vh;
      line-height: 1.5;
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
