import { ChalkboardTeacher, House, ListDashes, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>Diárias SEMSAB</span>

      <nav>
        <NavLink to="/" title="Início">
          <House size={30} />
        </NavLink>
        <NavLink to="/diarias" title="Diárias">
          <ListDashes size={30} />
        </NavLink>
        <NavLink to="/motoristas" title="Motoristas">
          <ChalkboardTeacher size={30} />
        </NavLink>
        <NavLink to="/destinos" title="Destinos">
          <MapPin size={30} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
