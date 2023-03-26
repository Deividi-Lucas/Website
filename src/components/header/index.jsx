import './style.scss'
import dev from '../../images/Dev.png'

export default function Header() {
  return (
    <header>
      <img src={dev} alt="picture" />
      <li>
        <a href="#">Sobre mim</a>
        <a href="#">Contato</a>
        <a href="#">Projetos</a>
      </li>
    </header>
  )
}
