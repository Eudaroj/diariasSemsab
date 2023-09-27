import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { dbDestinos } from '../../../../../DataBase/destinos'
import { dbMotoristas } from '../../../../../DataBase/motoristas'
import { FormContainer, NovaPortariaButton, NovaPortariaInput } from './styles'

const validacaoNovaPortariaSchema = zod.object({
  motorista: zod.string(),
  destino: zod.string(),
  dataViagem: zod.date(),
  duracao: zod.string(),
})

export function NovaPortariaForm() {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(validacaoNovaPortariaSchema),
  })

  function handleNovaPortaria(data) {
    console.log(data)
  }

  const motorista = watch('motorista')
  const destino = watch('destino')
  const dataViagem = watch('dataViagem')
  const duracao = watch('duracao')

  const isSubmitDisabled = motorista | destino | dataViagem | duracao

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

      <NovaPortariaButton type="submit" disabled={!isSubmitDisabled}>
        Gerar Portaria
      </NovaPortariaButton>
    </FormContainer>
  )
}
