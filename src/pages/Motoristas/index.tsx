import { dbMotoristas } from '../../DataBase/motoristas'
import { MotoristasContainer } from './styles'

export function Motoristas() {
  return (
    <MotoristasContainer>
      <table>
        <thead>
          <tr>
            <th>Nome Completo</th>
            <th>Cargo</th>
            <th>CPF</th>
            <th>Mat.</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Banco</th>
            <th>Agência</th>
            <th>Conta</th>
          </tr>
        </thead>
        <tbody>
          {dbMotoristas.map((motorista) => {
            return (
              <tr key={motorista.matricula}>
                <td>{motorista.nome}</td>
                <td>{motorista.cargo}</td>
                <td>{motorista.cpf}</td>
                <td>{motorista.matricula}</td>
                <td>{motorista.endereco}</td>
                <td>{motorista.telefone}</td>
                <td>{motorista.email}</td>
                <td>{motorista.banco}</td>
                <td>{motorista.agencia}</td>
                <td>{motorista.conta}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </MotoristasContainer>
  )
}
