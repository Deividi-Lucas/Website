import './style.scss'
import Header from '../../components/header'
import perfil_photo from '../../images/deividi_page.jpg'

export default function Main() {
  return (
    <div className="main_container">
      <Header />
      <img src={perfil_photo} alt="Mymainphoto" />
    </div>
  )
}
