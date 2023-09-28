import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { dbDestinos } from '../../../../../DataBase/destinos'
import {
  FormDestinoContainer,
  NovoDestinoButton,
  NovoDestinoInput,
} from './styles'

const validacaoNovoDestinoSchema = zod.object({
  destino: zod.string(),
})

type novoDestinoDados = zod.infer<typeof validacaoNovoDestinoSchema>

export function NovoDestinoForm() {
  const { register, handleSubmit, watch, reset } = useForm<novoDestinoDados>({
    resolver: zodResolver(validacaoNovoDestinoSchema),
    defaultValues: {
      destino: '',
    },
  })

  const formularioPreenchido = watch('destino')

  const isSubmitDisabled = !formularioPreenchido

  function handleNovoDestino(data: novoDestinoDados) {
    const novoDestino: string = data.destino

    dbDestinos.push(novoDestino)
    console.log(dbDestinos)
    reset()
  }

  return (
    <FormDestinoContainer onSubmit={handleSubmit(handleNovoDestino)}>
      <NovoDestinoInput>
        <label htmlFor="destino">Destino</label>
        <input
          type="text"
          id="destino"
          placeholder="Digite no padrão: Cidade/UF"
          {...register('destino')}
        />
      </NovoDestinoInput>

      <NovoDestinoButton type="submit" disabled={isSubmitDisabled}>
        Cadastrar
      </NovoDestinoButton>
    </FormDestinoContainer>
  )
}
