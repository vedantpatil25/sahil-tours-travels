import './Home.css'
import { Link } from 'react-router-dom'
import bgvideo from '../media/tiger_bg.mp4'
import { Services } from '../components/Services'
import { BookSection } from '../components/BookSection'
import { PackageSection } from '../components/PackageSection'
import { ContInfo } from '../components/ContInfo'
import { Gallery } from '../components/Gallery'
import { Testimonials } from '../components/Testimonials/Testimonials'
import { Stats } from '../components/Stats/Stats'

export const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home" id="home">
          <div className="content">
            <h3>
              Begin your <span className="word-no-break">  <span id="diff">A</span>dventures </span> with us
            </h3>
            <p>Find Your Best Holiday In The Jungles Of India</p>
            <Link className="btn" to="/locations">
              <button className="exp-btn">Explore</button>
            </Link>
          </div>

          <div className="video-container">
            <video
              src={bgvideo}
              id="video-slider"
              loop
              autoPlay
              muted
              playsInline
            ></video>
          </div>

          <div className="info">
            <div className="mail">
              <i className="fas fa-envelope" id="ficons"></i>
              <p>
                <a href="mailto:sahil@sahiltoursandtravel.com">
                  sahil@sahiltoursandtravel.com{' '}
                </a>
              </p>
            </div>
            <div className="socialm">
              <i className="fab fa-instagram" id="ficons"></i>
              <a href="https://www.instagram.com/sahiltoursandtravels/">
                @sahiltoursandtravels
              </a>
            </div>
            <div className="call">
              <i className="fas fa-phone-alt" id="ficons"></i>
              <p>
                <a href="tel:7259987584">+91 72250 65920</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <BookSection />
      <hr id="line" />
      <Stats />
      <hr id="line" />
      <PackageSection />
      <hr id="line" />
      <Gallery isHomePage={true} />
      <hr id="line" />
      <Services />
      <hr id="line" />
      <ContInfo />
      <hr id="line" />
      <Testimonials />
      <hr id="line" />
    </>
  )
}
