import './style.scss'
import Header from '../../components/header'
import personal_site from '../../images/Website-personal.jpg'

export default function Project() {
  return (
    <div className="Project">
      <Header />
      <main>
        <div className="site">
          <div className="projectSite">
            <img
              src={personal_site}
              alt="personal-site"
              className="website_project"
            />
            <span>Website-pessoal</span>
          </div>
        </div>
      </main>
    </div>
  )
}
