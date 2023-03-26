import './style.scss'
import dev from '../../images/Dev.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={dev} alt="dev" />
        </Link>

        <li>
          <Link to="/about">Sobre mim</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/projetos">Projetos</Link>
        </li>
      </nav>
    </header>
  )
}
