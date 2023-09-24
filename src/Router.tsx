import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Destinos } from './pages/Destinos'
import { Diarias } from './pages/Diarias'
import { Home } from './pages/Home'
import { Motoristas } from './pages/Motoristas'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/diarias" element={<Diarias />} />
        <Route path="/motoristas" element={<Motoristas />} />
        <Route path="/destinos" element={<Destinos />} />
      </Route>
    </Routes>
  )
}
