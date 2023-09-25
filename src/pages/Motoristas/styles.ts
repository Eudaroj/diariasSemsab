import styled from 'styled-components'

export const MotoristasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex: 1;
  overflow: auto;

  margin: 3vh 0rem;

  table {
    flex: 1;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 2.3vh;
      /* line-height: 1.6; */

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5vh;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5vh;
      }
    }

    td {
      padding: 2vh;
      font-size: 2vh;
      text-align: center;

      &:nth-child(1) {
        width: 15vw;
        text-align: left;
      }
    }

    tr {
      border-bottom: 1px solid ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
    }
  }
`
