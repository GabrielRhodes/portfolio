import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { English, History, Home, Math, Physics } from './screens'
import './styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/portfolio/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/portfolio/english' element={<English />} />
        <Route path='/portfolio/history' element={<History />} />
        <Route path='/portfolio/math' element={<Math />} />
        <Route path='/portfolio/physics' element={<Physics />} />
      </Route>
    </Routes>
  </BrowserRouter>
)