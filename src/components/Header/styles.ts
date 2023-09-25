import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  border-radius: 8px;

  background: ${(props) => props.theme['green-500']};

  span {
    font-size: 2.5rem;
    font-weight: 700;
  }

  nav {
    display: flex;

    a {
      width: 4vw;
      height: 8vh;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};
      transition: all 0.2s linear;

      &:hover {
        background: ${(props) => props.theme['gray-700']};
      }

      &.active {
        background: ${(props) => props.theme['gray-700']};
      }
    }
  }
`
