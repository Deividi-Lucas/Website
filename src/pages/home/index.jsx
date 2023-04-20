import './style.scss'
import Header from '../../components/header'
import perfil_photo from '../../images/deividi_page.jpg'
import { About, Main } from './style'
export default function Home() {
  return (
    <div className="main_container">
      <Header />
      <Main>
        <div>
        <img src={perfil_photo} alt="Mymainphoto" className="perfil-main" />
        <h1>Deividi Lucas</h1>
        <h4>From Cuiaba-MT</h4>
        </div>
        <About>
          <h2>Sobre mim</h2>
          <p>
            Olá, sou Deividi Lucas, sou brasileiro, Tenho atualmente 19 anos.
            Atualmente trabalho no Exército brasileiro como Auxiliar de Ti,
            mexendo com a infraestrutura de rede. Por tanto tive interesse em
            mexer com programação a partir de 2021, por causa de um evento escolar
            do ensino médio, neste evento foi apresentando uma faculdade na área
            de tecnologia de informação e apresentado a grade curricular. Na qual
            estava descrito a área de programação e uma linguagem 'python', desde
            já venho estudando sobre programação desde de dezembro de 2021. A
            primeira linguagem na qual eu tive contado foi python, porém não
            mantive um estudo por muito tempo. Nesta caminhada de estudo resolvi
            adquirir conhecimento no Front-end pelo qual um colega de trabalho
            indicou. Agora mantenho estudando sobre Front-end desenvolvendo em
            HTML | CSS | JAVASCRIPT
          </p>
        </About>
      </Main>
    </div>
  )
}
