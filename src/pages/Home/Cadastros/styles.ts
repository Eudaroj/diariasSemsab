import styled from 'styled-components'

export const CadastrosContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  overflow: visible;

  width: 70%;
  height: 30vh;
  margin: 4rem auto 3.5rem;
  padding: 0.5rem 2rem;
  border-radius: 8px;

  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};

  font-size: 1.5rem;
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto;

  span {
    padding-left: 1.5rem;
  }

  button {
    width: 11vw;
    height: 6vh;
    border-radius: 8px;
    border: 0;
    font-size: 1vw;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`

export const BaseButton = styled.button`
  width: 60%;
  height: 10%;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 2vh; */

  font-size: 2vh;
  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};
`

export const DivInputBaseForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5vh;

  width: 80%;
`
