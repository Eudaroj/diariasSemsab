import styled from 'styled-components'
import { BaseButton, DivInputBaseForm } from '../../styles'

export const FormMotoristaContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 1rem;
  margin-right: 6rem;
  margin-top: -4rem;
  padding: 1.5vw;
  border-radius: 8px;
  width: 40rem;
  height: 26rem;
  overflow: auto;

  background: ${(props) => props.theme['gray-900']};

  font-family: 'Roboto', sans-serif;

  label {
    width: 26rem;
    font-size: 1rem;
  }

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

export const NovoMotoristaInput = styled(DivInputBaseForm)``

export const NovoMotoristaButton = styled(BaseButton)`
  background: ${(props) => props.theme['green-500']};
`
