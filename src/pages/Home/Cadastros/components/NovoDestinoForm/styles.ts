import styled from 'styled-components'
import { BaseButton, DivInputBaseForm } from '../../styles'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  margin-right: 5vw;
  margin-top: -4rem;
  padding: 1.5vw;
  border-radius: 8px;
  width: 30vw;
  height: 50vh;

  background: ${(props) => props.theme['gray-900']};

  font-family: 'Roboto', sans-serif;
  font-size: 2.5vh;

  label {
    width: 20vw;
  }

  select,
  input {
    text-align: center;
    width: 20vw;

    font-size: 1.8vh;

    border: none;
    border-bottom: 2px solid ${(props) => props.theme['green-300']};
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};
  }
`

export const NovoDestinoInput = styled(DivInputBaseForm)``

export const NovoDestinoButton = styled(BaseButton)`
  background: ${(props) => props.theme['green-500']};
`
