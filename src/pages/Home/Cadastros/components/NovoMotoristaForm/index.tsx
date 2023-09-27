import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import {
  FormMotoristaContainer,
  NovoMotoristaButton,
  NovoMotoristaInput,
} from './styles'

const validacaoNovoMotoristaSchema = zod.object({
  nome: zod.string().min(15, 'Preencha o Nome Completo'),
  cargo: zod.string(),
  cpf: zod.string().min(11),
  matricula: zod.string().min(3),
  endereco: zod.string(),
  telefone: zod.string().min(11),
  email: zod.string(),
  banco: zod.string(),
  agencia: zod.string(),
  conta: zod.string(),
})

export function NovoMotoristaForm() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(validacaoNovoMotoristaSchema),
  })

  function handleNovoMotorista(data) {
    console.log(data)
  }

  return (
    <FormMotoristaContainer onSubmit={handleSubmit(handleNovoMotorista)}>
      <NovoMotoristaInput>
        <label htmlFor="nome">Nome Completo</label>
        <input type="text" id="nome" {...register('nome')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="cargo">Cargo</label>
        <input type="text" id="cargo" {...register('cargo')} />
      </NovoMotoristaInput>

      <NovoMotoristaInput>
        <label htmlFor="cpf">CPF</label>
        <input type="number" id="cpf" {...register('cpf')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="matricula">Matrícula</label>
        <input type="number" id="matricula" {...register('matricula')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="endereco">Endereço</label>
        <input type="text" id="endereco" {...register('endereco')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="telefone">Telefone</label>
        <input type="tel" id="telefone" {...register('telefone')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register('email')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="banco">Banco</label>
        <input type="text" id="banco" {...register('banco')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="agencia">Agência</label>
        <input type="number" id="agencia" {...register('agencia')} />
      </NovoMotoristaInput>
      <NovoMotoristaInput>
        <label htmlFor="conta">Conta</label>
        <input type="number" id="conta" {...register('conta')} />
      </NovoMotoristaInput>

      <NovoMotoristaButton type="submit">Cadastrar</NovoMotoristaButton>
    </FormMotoristaContainer>
  )
}
