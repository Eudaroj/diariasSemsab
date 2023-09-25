import { dbDestinos } from '../../../../../DataBase/destinos'
import { dbMotoristas } from '../../../../../DataBase/motoristas'
import { FormContainer, NovaPortariaButton, NovaPortariaInput } from './styles'

export function NovaPortariaForm() {
  return (
    <FormContainer>
      <NovaPortariaInput>
        <label htmlFor="motorista">Motorista</label>
        <select name="motorista">
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
        <select name="destino">
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
        <label htmlFor="data">Data</label>
        <input type="date" name="data" />
      </NovaPortariaInput>
      <NovaPortariaInput>
        <label htmlFor="duracao">Duração</label>
        <select name="duracao">
          <option value="" disabled selected hidden>
            Selecione a Duração
          </option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </NovaPortariaInput>

      <NovaPortariaButton type="submit">Gerar Portaria</NovaPortariaButton>
    </FormContainer>
  )
}
