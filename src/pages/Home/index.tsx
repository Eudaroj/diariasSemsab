import { useState } from 'react'
import { dbPortarias } from '../../DataBase/portarias'
import { Cadastros } from './Cadastros'
import { UltimasPortarias } from './UltimasPortarias'
import { HomeContainer } from './styles'

export interface Portaria {
  id: string
  motorista: string
  destino: string
  dataViagem: string
  duracao: string
  linkMem: string
  linkPor: string
}

export function Home() {
  const [portarias, setPortarias] = useState(dbPortarias)

  function adicionarPortaria(novaPortaria: Portaria) {
    setPortarias([...portarias, novaPortaria])
  }

  return (
    <HomeContainer>
      <Cadastros adicionarPortaria={adicionarPortaria} />
      <UltimasPortarias portarias={portarias} />
    </HomeContainer>
  )
}
