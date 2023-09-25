import styled from 'styled-components'
import { BaseButton, DivInputBaseForm } from '../../styles'

export const FormDestinoContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-right: 6rem;
  margin-top: -4rem;
  padding: 2rem;
  border-radius: 8px;
  width: 40rem;
  height: 26rem;

  background: ${(props) => props.theme['gray-900']};

  font-family: 'Roboto', sans-serif;

  label {
    width: 26rem;
    font-size: 1rem;
  }

  select,
  input {
    text-align: center;
    width: 26rem;

    font-size: 1.2rem;

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
