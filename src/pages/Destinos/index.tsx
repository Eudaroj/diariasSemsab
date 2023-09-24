import { dbDestinos } from '../../DataBase/destinos'
import { DestinosContainer } from './styles'

export function Destinos() {
  return (
    <DestinosContainer>
      <table>
        <thead>
          <tr>
            <th>Destinos de Viagem</th>
          </tr>
        </thead>
        <tbody>
          {dbDestinos.map((portaria, ind) => {
            return (
              <tr key={ind}>
                <td>{portaria}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </DestinosContainer>
  )
}
