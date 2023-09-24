import styled from 'styled-components'

export const CadastrosContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0rem 4rem 1rem;
  padding: 0.5rem 2rem;
  border-radius: 8px;

  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};

  font-size: 1.5rem;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  button {
    width: 4rem;
    height: 3rem;
    border-radius: 8px;
    border: 0;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;

  padding: 2rem;
  background: ${(props) => props.theme['gray-900']};

  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;

  div {
    display: flex;
    gap: 6rem;
  }

  label {
    width: 5rem;
  }

  select,
  input {
    font-size: 1.2rem;
    /* font-weight: bold; */
    text-align: center;

    width: 20rem;
    border-radius: 8px;
  }
`
export const BaseButton = styled.button`
  width: 30%;
  height: 2rem;
  margin-top: 2rem;
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
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
`
