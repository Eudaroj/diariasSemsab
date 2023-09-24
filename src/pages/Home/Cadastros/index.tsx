import { CirclesThreePlus, ListPlus, UserPlus } from 'phosphor-react'
import { dbDestinos } from '../../../DataBase/destinos'
import { dbMotoristas } from '../../../DataBase/motoristas'
import {
  CadastrosContainer,
  FormContainer,
  LinhaFormContainer,
  NovaPortariaButton,
} from './styles'

export function Cadastros() {
  return (
    <div>
      <CadastrosContainer>
        <span>Cadastros</span>
        <nav>
          <button type="button">
            <ListPlus size={24} />
          </button>
          <button type="button">
            <UserPlus size={24} />
          </button>
          <button type="button">
            <CirclesThreePlus size={24} />
          </button>
        </nav>
      </CadastrosContainer>

      <FormContainer>
        <LinhaFormContainer>
          <div>
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
          </div>
          <div>
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
          </div>
        </LinhaFormContainer>

        <LinhaFormContainer>
          <div>
            <label htmlFor="data">Data</label>
            <input type="date" name="data" />
          </div>
          <div>
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
          </div>
        </LinhaFormContainer>

        <NovaPortariaButton type="submit">Gerar Portaria</NovaPortariaButton>
      </FormContainer>
    </div>
  )
}
