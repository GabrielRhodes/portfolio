import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav id='nav-bar'>
        <Link to='/portfolio/'>
          <div>Portfolio</div>
        </Link>
        <div></div>
        <Link to='/portfolio/math'>
          <div>Math</div>
        </Link>
        <Link to='/portfolio/physics'>
          <div>Physics</div>
        </Link>
        <Link to='/portfolio/english'>
          <div>English</div>
        </Link>
        <Link to='/portfolio/history'>
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
    </div>
  )
}
