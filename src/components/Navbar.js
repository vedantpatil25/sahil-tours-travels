import './Navbar.css'
import { Link } from 'react-router-dom'
import navLogo from '../media/nav__logo.png'

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src={navLogo}
            alt="Sahil Tours And Travels Logo"
            className="nav-logo"
          />
        </Link>
      </div>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fa fa-bars"></i>
      </label>

      <ul className="list">
        <li id="active">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/book" id="d">
            Book
          </Link>
        </li>

        {/* Mobile-only direct links */}
        <li className="mobile-only">
          <Link to="/locations" id="d">
            Travel Safari
          </Link>
        </li>
        <li className="mobile-only">
          <Link to="/taxi-service" id="d">
            Taxi Service
          </Link>
        </li>

        {/* Desktop dropdown sections */}
        <li id="drop">
          <Link to="/locations" id="d">
            Travel Safari
          </Link>
          <ul>
            <li>
              <Link to="/locations/delhi" id="d">
                Delhi
              </Link>
            </li>
            <li>
              <Link to="/locations/bandhavgarh" id="d">
                Bandhavgarh National Park
              </Link>
            </li>
            <li>
              <Link to="/locations/kanha" id="d">
                Kanha Tiger Reserve
              </Link>
            </li>
            <li>
              <Link to="/locations/pench" id="d">
                Pench National Park
              </Link>
            </li>
            <li>
              <Link to="/locations/panna" id="d">
                Panna National Park
              </Link>
            </li>
            <li>
              <Link to="/locations" id="d">
                View all..
              </Link>
            </li>
          </ul>
        </li>
        
        {/* New Gallery Link */}
        <li>
          <Link to="/gallery" id="d">
            Gallery
          </Link>
        </li>
        
        <li>
          <Link to="/locations" id="d">
            Locations
          </Link>
        </li>
        <li id="drop">
          <Link to="/taxi-service" id="d">
            Taxi Service
          </Link>
          <ul>
            <li>
              <Link to="/taxi-service/local" id="d">
                Local Taxi
              </Link>
            </li>
            <li>
              <Link to="/taxi-service/outstation" id="d">
                Outstation
              </Link>
            </li>
            <li>
              <Link to="/taxi-service/airport" id="d">
                Airport Transfer
              </Link>
            </li>
            <li>
              <Link to="/taxi-service/wedding" id="d">
                Wedding Cars
              </Link>
            </li>
            <li>
              <Link to="/taxi-service/corporate" id="d">
                Corporate Travel
              </Link>
            </li>
            <li>
              <Link to="/taxi-service" id="d">
                View all..
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/contact" id="d">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
