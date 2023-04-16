import './style.scss'
import Header from '../../components/header'
// import personal_site from '../../images/Website-personal.jpg'
import project_converter from '../../images/Converter-Cash.png'
import timer_project from '../../images/Timer.png'
import searchcep from '../../images/SearchCep.png'
import machine from '../../images/machine.png'
import poke from '../../images/PokeGadget.png'
import Post from '../../components/card'
import { color } from '../../utils/color'


export default function Project() {
  return (
    <div className="Project">
      <Header />
      <main>
      <Post img={project_converter} alt='Converter Cash' span='Converter Cash' link='https://converter-cash.vercel.app/' background={color.green}/>
      <Post img={timer_project} alt='Timer_project' span='Temporizador' background={color.red}/>
      <Post img={searchcep} alt='SearchCep' span='Procurador de Cep' link='https://search-cep-gamma.vercel.app/'background={color.yellow}/>
      <Post img={machine} alt='MachineSpace' span='Machine Space' link='https://machine-space.vercel.app/'/>
      <Post img={poke} alt='PokeGadget' span='PokeGadgets' link='https://poke-gadgets.vercel.app/'background={color.orange}k/>
      </main>
    </div>
  )
}
