import { Main } from './style'
import logoEmail from '../../images/email.png'
import logoZap from '../../images/zap.png'
import logoLink from '../../images/linkedin.png'
import logoGit from '../../images/github.png'

export default function Footer() {
  return (
    <Main>
      <div className="Copy">
        <h2>Criado por Deividi Lucas</h2>
      </div>

      <div className="contact">
        <h3>Contatos</h3>
        <h5 style={{ alignItems: 'center', display: 'flex' }}>
          <img src={logoEmail} alt="email" style={{ height: '1rem' }} />
          Email: deividilucas21@gmail.com
        </h5>
        <h5 style={{ alignItems: 'center', display: 'flex' }}>
          <img src={logoZap} alt="Telefone" style={{ height: '1rem' }} />
          Telefone: (65) 99292-1634
        </h5>
        <h5 style={{ alignItems: 'center', display: 'flex' }}>
          <img src={logoLink} alt="Linkedin" style={{ height: '1rem' }} />
          https://www.linkedin.com/in/deividi-lucas-a60612254/
        </h5>
        <h5 style={{ alignItems: 'center', display: 'flex' }}>
          <img src={logoGit} alt="Github" style={{ height: '1rem' }} />
          https://www.github.com/Deividi-Lucas
        </h5>
      </div>
    </Main>
  )
}
