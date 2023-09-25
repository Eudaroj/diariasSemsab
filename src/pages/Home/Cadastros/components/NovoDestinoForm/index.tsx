import {
  FormDestinoContainer,
  NovoDestinoButton,
  NovoDestinoInput,
} from './styles'

export function NovoDestinoForm() {
  return (
    <FormDestinoContainer>
      <NovoDestinoInput>
        <label htmlFor="destino">Destino</label>
        <input type="text" placeholder="Digite no padrão: Cidade/UF" />
      </NovoDestinoInput>

      <NovoDestinoButton type="submit">Cadastrar</NovoDestinoButton>
    </FormDestinoContainer>
  )
}
