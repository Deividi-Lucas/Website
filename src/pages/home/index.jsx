import './style.scss'
import Header from '../../components/Header'
import perfil_photo from '../../images/deividi_page.jpg'
import { About, Main } from './style'
import Footer from '../../components/Footer'
import { color } from '../../utils/color'
export default function Home() {
  return (
    <div className="main_container">
      <Header />
      <Main>
        <div style={{ textShadow: '1px 3px 0.5rem black' }}>
          <img src={perfil_photo} alt="Mymainphoto" className="perfil-main" />
          <h1>Deividi Lucas</h1>
          <h4>De Cuiaba-MT</h4>
        </div>
        <About
          style={{
            color: `${color.quarternary}`
          }}
        >
          <h2>Sobre mim</h2>
          <p>
            Olá, sou Deividi Lucas, sou brasileiro, Tenho atualmente 20 anos.
            Atualmente trabalho como Auxiliar Administrativo em uma empresa no
            ramo da engenharia, mexendo com a infraestrutura de rede, sistema de
            automação. Por tanto tive interesse em mexer com programação a
            partir de 2021, por causa de um evento escolar do ensino médio,
            neste evento foi apresentando uma faculdade na área de tecnologia de
            informação e apresentado a grade curricular. Na qual estava descrito
            a área de programação e uma linguagem 'python', desde já venho
            estudando sobre programação desde de dezembro de 2021. A primeira
            linguagem na qual eu tive contado foi python, porém não mantive um
            estudo por muito tempo. Nesta caminhada de estudo resolvi adquirir
            conhecimento no Front-end pelo qual um colega de trabalho indicou.
            Agora mantenho estudando sobre Front-end desenvolvendo em HTML | CSS
            | JAVASCRIPT
          </p>
        </About>
      </Main>
      <Footer />
    </div>
  )
}
