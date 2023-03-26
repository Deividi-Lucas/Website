import Header from '../../components/header'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import './style.scss'

export default function Contact() {
  return (
    <div className="Contact">
      <Header />
      <h1>Contact</h1>
      <div className="contact_icon">
        <div className="contact_linkedin">
          <a
            href="https://www.linkedin.com/in/deividi-lucas-a60612254/"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="linkedin"
              id="linkedin"
            />
            <span>Linkedin</span>
          </a>
        </div>

        <div className="contact_github">
          <a
            href="https://github.com/Deividi-Lucas"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <img src={github} alt="github" id="github" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}
