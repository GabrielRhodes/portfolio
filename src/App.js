import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <nav id='nav-bar'>
        <Link to='/'>
          <div>Portfolio</div>
        </Link>
        <div></div>
        <Link to='math'>
          <div>Math</div>
        </Link>
        <Link to='physics'>
          <div>Physics</div>
        </Link>
        <Link to='english'>
          <div>English</div>
        </Link>
        <Link to='history'>
          <div>History</div>
        </Link>
        <a
          href='https://drive.google.com/drive/folders/1Jx_au4QK8MAkGfqLR83El3_Nw2Rh9oZi?usp=sharing'
          target='_blank'
          rel='noreferrer'
        >
          Drive
        </a>
      </nav>
      <Outlet />
    </div>
  )
}
