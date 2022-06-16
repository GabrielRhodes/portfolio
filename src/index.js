import ReactDOM from 'react-dom/client'
import { Route, Routes, HashRouter } from 'react-router-dom'
import App from './App'
import { English, History, Home, Math, Physics } from './screens'
import './styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <Routes>
      <Route path='/portfolio/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='#/english' element={<English />} />
        <Route path='#/history' element={<History />} />
        <Route path='#/math' element={<Math />} />
        <Route path='#/physics' element={<Physics />} />
      </Route>
    </Routes>
  </HashRouter>
)
