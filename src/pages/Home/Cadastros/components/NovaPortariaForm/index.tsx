import { useState } from 'react'
import { dbDestinos } from '../../../../../DataBase/destinos'
import { dbMotoristas } from '../../../../../DataBase/motoristas'
import { dbPortarias } from '../../../../../DataBase/portarias'
import { FormContainer, NovaPortariaButton, NovaPortariaInput } from './styles'

export function NovaPortariaForm() {
  const [motorista, setMotorista] = useState('')
  const [destino, setDestino] = useState('')
  const [dataViagem, setDataViagem] = useState('')
  const [duracao, setDuracao] = useState('')

  const handleMotorista = (event: any) => {
    setMotorista(event.target.value)
    console.log(event.target.value)
  }
  const handleDestino = (event: any) => {
    setDestino(event.target.value)
  }
  const handleDataViagem = (event: any) => {
    setDataViagem(event.target.value)
  }
  const handleDuracao = (event: any) => {
    setDuracao(event.target.value)
  }

  const gerarPortaria = () => {
    dbPortarias.push({
      id: String(dbPortarias.length + 1).padStart(3, '0'),
      motorista,
      destino,
      dataViagem,
      duracao,
      linkMem: 'www.google.com',
      linkPor: 'www.google.com',
    })

    console.log(dbPortarias)

    setMotorista('default')
    setDestino('')
    setDataViagem('')
    setDuracao('')
  }

  console.log(dbPortarias)

  return (
    <FormContainer>
      <NovaPortariaInput>
        <label htmlFor="motorista">Motorista</label>
        <select name="motorista" onChange={handleMotorista}>
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
        <select name="destino" onChange={handleDestino}>
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
        <input type="date" name="data" onChange={handleDataViagem} />
      </NovaPortariaInput>
      <NovaPortariaInput>
        <label htmlFor="duracao">Duração</label>
        <select name="duracao" onChange={handleDuracao}>
          <option value="" disabled selected hidden>
            Selecione a Duração
          </option>
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </NovaPortariaInput>

      <NovaPortariaButton
        type="button"
        onClick={gerarPortaria}
        onReset={FormContainer}
      >
        Gerar Portaria
      </NovaPortariaButton>
    </FormContainer>
  )
}
