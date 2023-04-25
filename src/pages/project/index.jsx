import Header from '../../components/header'
// import personal_site from '../../images/Website-personal.jpg'
import project_converter from '../../images/Converter-Cash.png'
import timer_project from '../../images/Timer.png'
import searchcep from '../../images/SearchCep.png'
import machine from '../../images/machine.png'
import poke from '../../images/PokeGadget.png'
import Post from '../../components/card'
import WhatToDo from '../../images/WhatToDo.png'
import GitPersonal from '../../images/GitPersonal.png'
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
          img={timer_project}
          alt="Timer_project"
          span="Temporizador"
          background={color.red}
        />
        <Post
          img={searchcep}
          alt="SearchCep"
          span="Procurador de Cep"
          link="https://search-cep-gamma.vercel.app/"
          background={color.yellow}
        />
        <Post
          img={machine}
          alt="MachineSpace"
          span="Machine Space"
          link="https://machine-space.vercel.app/"
          background={color.black}
        />
        <Post
          img={poke}
          alt="PokeGadget"
          span="PokeGadgets"
          link="https://poke-gadgets.vercel.app/"
          background={color.orange}
        />
        <Post
          img={WhatToDo}
          alt="WhatToDo"
          span="What to do"
          link="https://what-to-do-eight.vercel.app/"
          background={color.gray}
        />
        <Post
          img={GitPersonal}
          alt="GitPersonal"
          span="GitPersonal"
          background={color.roxo}
          link="https://git-personal.vercel.app/"
        />
      </div>
    </Main>
  )
}
