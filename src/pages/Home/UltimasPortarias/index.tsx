import { NavLink } from 'react-router-dom'

import { FileArrowDown } from 'phosphor-react'
import { portarias } from '../../../DataBase/portarias'
import { CabecalhoContainer, UltimasPortariasContainer } from './styles'

export function UltimasPortarias() {
  const ultimasCincoPortarias = portarias.slice(-5).reverse()

  return (
    <div>
      <UltimasPortariasContainer>
        <CabecalhoContainer>
          <span>Últimas Portarias</span>
          <NavLink to="/diarias" title="Ver todas as Portarias">
            Ver todas
          </NavLink>
        </CabecalhoContainer>
        <table>
          <thead>
            <tr>
              <th>Portaria</th>
              <th>Motorista</th>
              <th>Destino</th>
              <th>Data da Viagem</th>
              <th>Duração</th>
              <th>Link Mem</th>
              <th>Link Por</th>
            </tr>
          </thead>
          <tbody>
            {ultimasCincoPortarias.map((portaria) => {
              return (
                <tr key={portaria.id}>
                  <td>{portaria.id}</td>
                  <td>{portaria.morotista}</td>
                  <td>{portaria.destino}</td>
                  <td>{portaria.dataViagem}</td>
                  <td>{portaria.duracao}</td>
                  <td>
                    <a href={portaria.linkMem}>
                      <FileArrowDown size={18} />
                    </a>
                  </td>
                  <td>
                    <a href={portaria.linkPor}>
                      <FileArrowDown size={18} />
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </UltimasPortariasContainer>
    </div>
  )
}
