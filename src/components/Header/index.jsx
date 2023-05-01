import './style.scss'
import dev from '../../images/Dev.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <div className="photo_link">
          <Link to="/">
            <img src={dev} alt="dev" />
          </Link>
        </div>
        <div className="link">
          <Link to="/">Início</Link>
          <Link to="/project">Projetos</Link>
        </div>
      </nav>
    </header>
  )
}
