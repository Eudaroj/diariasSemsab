import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 80vw;
  height: calc(100vh - 2rem);
  margin: 1rem auto;
  padding: 1rem 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`
