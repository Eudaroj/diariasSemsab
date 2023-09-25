import { FormContainer, NovoDestinoButton, NovoDestinoInput } from './styles'

export function NovoDestinoForm() {
  return (
    <FormContainer>
      <NovoDestinoInput>
        <label htmlFor="destino">Destino</label>
        <input type="text" placeholder="Digite no padrão: Cidade/UF" />
      </NovoDestinoInput>

      <NovoDestinoButton type="submit">Cadastrar</NovoDestinoButton>
    </FormContainer>
  )
}
