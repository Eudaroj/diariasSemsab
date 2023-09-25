import {
  FormMotoristaContainer,
  NovoMotoristaButton,
  NovoMotoristaInput,
} from './styles'

export function NovoMotoristaForm() {
  return (
    <FormMotoristaContainer>
      <NovoMotoristaInput>
        <label htmlFor="nome">Nome Completo</label>
        <input type="text" id="nome" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="cargo">Cargo</label>
        <input type="text" id="cargo" />
      </NovoMotoristaInput>

      <NovoMotoristaInput>
        <label htmlFor="cpf">CPF</label>
        <input type="number" id="cpf" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="matricula">Matrícula</label>
        <input type="number" id="matricula" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="endereco">Endereço</label>
        <input type="text" id="endereco" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="banco">Banco</label>
        <input type="text" id="banco" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="agencia">Agência</label>
        <input type="number" id="agencia" />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="conta">Conta</label>
        <input type="number" id="conta" />
      </NovoMotoristaInput>

      <NovoMotoristaButton type="submit">Cadastrar</NovoMotoristaButton>
    </FormMotoristaContainer>
  )
}
