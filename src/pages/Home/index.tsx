import { Cadastros } from './Cadastros'
import { UltimasPortarias } from './UltimasPortarias'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Cadastros />
      <UltimasPortarias />
    </HomeContainer>
  )
}
