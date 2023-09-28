import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { dbMotoristas } from '../../../../../DataBase/motoristas'
import {
  FormMotoristaContainer,
  NovoMotoristaButton,
  NovoMotoristaInput,
} from './styles'

const validacaoNovoMotoristaSchema = zod.object({
  nome: zod.string().min(15, { message: 'Preencha o Nome Completo' }),
  cargo: zod.string().min(5),
  cpf: zod.string().min(11),
  matricula: zod.string().min(3),
  endereco: zod.string().optional(),
  telefone: zod.string().optional(),
  email: zod.string().optional(),
  banco: zod.string(),
  agencia: zod.string(),
  conta: zod.string(),
})

type motoristaDados = zod.infer<typeof validacaoNovoMotoristaSchema>

export function NovoMotoristaForm() {
  const { register, handleSubmit, watch, reset } = useForm<motoristaDados>({
    resolver: zodResolver(validacaoNovoMotoristaSchema),
    defaultValues: {
      nome: '',
      cargo: '',
      cpf: '',
      matricula: '',
      endereco: '',
      telefone: '',
      email: '',
      banco: '',
      agencia: '',
      conta: '',
    },
  })

  const formularioPreenchido = watch([
    'nome',
    'cargo',
    'cpf',
    'matricula',
    'banco',
    'agencia',
    'conta',
  ])

  const isSubmitDisabled = formularioPreenchido.some(
    (input) => !!input === false,
  )

  function handleNovoMotorista(data: motoristaDados) {
    const novoMotorista: motoristaDados = {
      nome: data.nome,
      cargo: data.cargo,
      cpf: data.cpf,
      matricula: data.matricula,
      endereco: data.endereco,
      telefone: data.telefone,
      email: data.email,
      banco: data.banco,
      agencia: data.agencia,
      conta: data.conta,
    }

    dbMotoristas.push(novoMotorista)

    reset()
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
        <input type="number" id="telefone" {...register('telefone')} />
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

      <NovoMotoristaButton type="submit" disabled={isSubmitDisabled}>
        Cadastrar
      </NovoMotoristaButton>
    </FormMotoristaContainer>
  )
}
