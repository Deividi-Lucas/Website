import Header from '../../components/Header'
// import personal_site from '../../images/Website-personal.jpg'
import project_converter from '../../images/Converter-Cash.png'
import searchcep from '../../images/SearchCep.png'
import Post from '../../components/Card'
import { color } from '../../utils/color'
import { Main } from './style'

export default function Project() {
  return (
    <Main>
      <Header />
      <div>
        <Post
          img={project_converter}
          alt="Converter Cash"
          span="Converter Cash"
          link="https://converter-cash.vercel.app/"
          background={color.green}
        />

        <Post
          img={searchcep}
          alt="SearchCep"
          span="Procurador de Cep"
          link="https://search-cep-gamma.vercel.app/"
          background={color.yellow}
        />
      </div>
    </Main>
  )
}
