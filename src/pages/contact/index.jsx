import Header from '../../components/header'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import './style.scss'

export default function Contact() {
  return (
    <div className="Contact">
      <Header />
      <div className="container_contact">
        <h1>Contact</h1>

        <div className="linkedin_icon">
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

        <div className="github_icon">
          <a
            href="https://github.com/Deividi-Lucas"
            target={'_blank'}
            rel={'noreferrer'}
          >
            <img src={github} alt="github" id="github" className="github" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}
