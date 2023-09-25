import styled from 'styled-components'

export const PortariasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  overflow: auto;
  flex: 1;
  margin: 1.8rem 0rem;

  table {
    /* flex: 1; */
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.2rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1rem;
      }
    }

    td {
      padding: 1.2rem;
      font-size: 1.2rem;
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
