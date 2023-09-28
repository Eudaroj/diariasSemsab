import { CirclesThreePlus, ListPlus, UserPlus } from 'phosphor-react'
import { useState } from 'react'
import { NovaPortariaForm } from './components/NovaPortariaForm'
import { NovoDestinoForm } from './components/NovoDestinoForm'
import { NovoMotoristaForm } from './components/NovoMotoristaForm'
import { CadastrosContainer, NavContainer } from './styles'

export function Cadastros({ adicionarPortaria }) {
  const [formularioAtual, setFormularioAtual] = useState('Portaria')

  const renderizarFormulario = () => {
    switch (formularioAtual) {
      case 'Portaria':
        return <NovaPortariaForm adicionarPortaria={adicionarPortaria} />
      case 'Motorista':
        return <NovoMotoristaForm />
      case 'Destino':
        return <NovoDestinoForm />
      default:
        return null
    }
  }

  return (
    <div>
      <CadastrosContainer>
        <NavContainer>
          <button type="button" onClick={() => setFormularioAtual('Portaria')}>
            <ListPlus size={24} />
            Nova Portaria
          </button>
          <button type="button" onClick={() => setFormularioAtual('Motorista')}>
            <UserPlus size={24} />
            Novo Motorista
          </button>
          <button type="button" onClick={() => setFormularioAtual('Destino')}>
            <CirclesThreePlus size={24} />
            Novo Destino
          </button>
        </NavContainer>

        {renderizarFormulario()}
      </CadastrosContainer>
    </div>
  )
}
