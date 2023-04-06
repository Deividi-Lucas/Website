import './style.scss'
import Header from '../../components/header'
// import personal_site from '../../images/Website-personal.jpg'
import project_converter from '../../images/Converter-Cash.png'
import timer_project from '../../images/Timer.png'
import searchcep from '../../images/SearchCep.png'

export default function Project() {
  return (
    <div className="Project">
      <Header />
      <main>
        <div className="site">
          {/* <div className="projectSite">
            <img
              src={personal_site}
              alt="personal-site"
              className="website_project"
            />
            <span>Website-pessoal</span>
          </div> */}

          <div className="projectConverter">
            <img
              src={project_converter}
              alt="projeto_converta_cash"
              className="ConverterCash"
            />
            <span>Convertor de dinheiro</span>
          </div>

          <div className="SearchCepProject">
            <img
              src={searchcep}
              alt="Projeto_SearchCep"
              className="SearchCep"
            />
            <span>Procurador de Cep</span>
          </div>

          <div className="TimerProject">
            <img src={timer_project} alt="Projeto_timer" className="timer" />
            <span>Temporizador</span>
          </div>
        </div>
      </main>
    </div>
  )
}
