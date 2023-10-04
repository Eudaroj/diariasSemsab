import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Portaria } from '../../..'
import { dbDestinos } from '../../../../../DataBase/destinos'
import { dbMotoristas } from '../../../../../DataBase/motoristas'
import { dbPortarias } from '../../../../../DataBase/portarias'
import { FormContainer, NovaPortariaButton, NovaPortariaInput } from './styles'

const validacaoNovaPortariaSchema = zod.object({
  motorista: zod.string(),
  destino: zod.string(),
  dataViagem: zod.string(),
  duracao: zod.string(),
})

// interface novaPortariaDados {
//   motorista: string
//   destino: string
//   dataViagem: string
//   duracao: string
// }

type novaPortariaDados = zod.infer<typeof validacaoNovaPortariaSchema>

interface NovaPortariaForms {
  adiconarPortaria: (novaPortaria: Portaria) => void
}

export function NovaPortariaForm({ adicionarPortaria }: NovaPortariaForms) {
  const { register, handleSubmit, watch, reset } = useForm<novaPortariaDados>({
    resolver: zodResolver(validacaoNovaPortariaSchema),
    defaultValues: {
      motorista: '',
      destino: '',
      dataViagem: '',
      duracao: '',
    },
  })

  function handleNovaPortaria(data: novaPortariaDados) {
    const novaPortaria: Portaria = {
      id: String(dbPortarias.length + 1).padStart(3, '0'),
      motorista: data.motorista,
      destino: data.destino,
      dataViagem: data.dataViagem,
      duracao: data.duracao,
      linkMem: 'www.google.com.br',
      linkPor: 'www.google.com.br',
    }

    dbPortarias.push(novaPortaria)

    adicionarPortaria(novaPortaria)

    reset()
  }

  const formularioPreenchido = watch([
    'motorista',
    'destino',
    'dataViagem',
    'duracao',
  ])

  const isSubmitDisabled = formularioPreenchido.some(
    (input) => !!input === false,
  )

  return (
    <FormContainer name="form" onSubmit={handleSubmit(handleNovaPortaria)}>
      <NovaPortariaInput>
        <label htmlFor="motorista">Motorista</label>
        <select id="motorista" {...register('motorista')}>
          <option value="" disabled selected hidden>
            Selecione o Motorista
          </option>
          {dbMotoristas.map((motoristas) => {
            return (
              <option key={motoristas.matricula} value={motoristas.nome}>
                {motoristas.nome}
              </option>
            )
          })}
        </select>
      </NovaPortariaInput>

      <NovaPortariaInput>
        <label htmlFor="destino">Destino</label>
        <select id="destino" {...register('destino')}>
          <option value="" disabled selected hidden>
            Selecione o Destino
          </option>
          {dbDestinos.map((destino, ind) => {
            return (
              <option key={ind} value={destino}>
                {destino}
              </option>
            )
          })}
        </select>
      </NovaPortariaInput>

      <NovaPortariaInput>
        <label htmlFor="dataViagem">Data</label>
        <input type="date" id="dataViagem" {...register('dataViagem')} />
      </NovaPortariaInput>

      <NovaPortariaInput>
        <label htmlFor="duracao">Duração</label>
        <select id="duracao" {...register('duracao')}>
          <option value="" disabled selected hidden>
            Selecione a Duração
          </option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </NovaPortariaInput>

      <NovaPortariaButton type="submit" disabled={isSubmitDisabled}>
        Gerar Portaria
      </NovaPortariaButton>
    </FormContainer>
  )
}
