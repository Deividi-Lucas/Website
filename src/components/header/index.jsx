import './style.scss'
import dev from '../../images/Dev.png'

export default function Header() {
  return (
    <header>
      <img src={dev} alt="dev" />
      <li>
        <a href="https://github.com/Deividi-Lucas">Sobre mim</a>
        <a href="https://google.com">Contato</a>
        <a href="https://facebook.com">Projetos</a>
      </li>
    </header>
  )
}
