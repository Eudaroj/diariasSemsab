import styled from 'styled-components'

export const CadastrosContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
  overflow: visible;

  width: 70%;
  height: 15rem;
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
    width: 10rem;
    height: 3rem;
    border-radius: 8px;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  margin-right: 6rem;
  margin-top: -4rem;
  padding: 1rem;
  border-radius: 8px;
  width: 60%;
  height: 24rem;

  background: ${(props) => props.theme['gray-900']};

  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  label {
    width: 100%;
  }

  select,
  input {
    font-size: 1rem;
    text-align: center;

    width: 100%;

    font-size: 0.875rem;

    border: none;
    border-bottom: 2px solid ${(props) => props.theme['green-300']};
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }
`
export const BaseButton = styled.button`
  width: 60%;
  height: 2rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.2rem;
  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};
`

export const NovaPortariaButton = styled(BaseButton)`
  background: ${(props) => props.theme['green-500']};
`

export const LinhaFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export const DivInputBaseForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  width: 80%;
`
