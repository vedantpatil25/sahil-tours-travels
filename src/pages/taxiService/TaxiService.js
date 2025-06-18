import './TaxiService.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { TaxiServiceCard } from '../../components/TaxiServiceCard'

export const TaxiService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const taxiServices = [
    {
      id: 1,
      title: "Local Taxi Service",
      description: "Comfortable and reliable local transportation within the city. Perfect for daily commutes, shopping trips, and local sightseeing.",
      features: ["24/7 Available", "Experienced Drivers", "Clean Vehicles", "Affordable Rates"],
      price: "Starting from ₹10/km",
      icon: "🚗"
    },
    {
      id: 2,
      title: "Outstation Taxi",
      description: "Long-distance travel made easy with our outstation taxi services. Explore nearby cities and tourist destinations comfortably.",
      features: ["One Way & Round Trip", "Multiple Vehicle Options", "Driver Accommodation", "Fuel Included"],
      price: "Starting from ₹12/km",
      icon: "🛣️"
    },
    {
      id: 3,
      title: "Airport Transfer",
      description: "Hassle-free airport pickup and drop services. Never miss a flight with our punctual and reliable airport transfer service.",
      features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance", "24/7 Service"],
      price: "Starting from ₹500",
      icon: "✈️"
    },
    {
      id: 4,
      title: "Wedding Car Rental",
      description: "Make your special day even more memorable with our premium wedding car rental services. Luxury vehicles for your big day.",
      features: ["Luxury Cars", "Decoration Available", "Professional Chauffeur", "Multiple Hours Package"],
      price: "Starting from ₹2000/day",
      icon: "💒"
    },
    {
      id: 5,
      title: "Corporate Travel",
      description: "Professional transportation solutions for corporate clients. Reliable service for business meetings, conferences, and events.",
      features: ["Corporate Rates", "Invoice Facility", "Multiple Bookings", "Priority Service"],
      price: "Contact for Rates",
      icon: "🏢"
    },
    {
      id: 6,
      title: "Tourist Packages",
      description: "Explore local attractions and tourist spots with our specially designed tourist packages. Guided tours with comfortable transportation.",
      features: ["Local Guide", "Multiple Destinations", "Flexible Timing", "Group Discounts"],
      price: "Starting from ₹1500/day",
      icon: "🗺️"
    }
  ];

  return (
    <>
      <div className="taxi-hero">
        <div className="hero-content">
          <h1>
            <span className="highlight">R</span>eliable <span className="highlight">T</span>axi <span className="highlight">S</span>ervices
          </h1>
          <p>Your trusted partner for comfortable and safe transportation</p>
          <Link to="/book" className="cta-button">
            Book Now
          </Link>
        </div>
      </div>

      <div className="taxi-container">
        <div className="section-header">
          <h2>
            <span className="highlight">O</span>ur <span className="highlight">S</span>ervices
            <hr className="title-line" />
          </h2>
          <p>Choose from our wide range of taxi services tailored to meet your needs</p>
        </div>

        <div className="services-grid">
          {taxiServices.map((service) => (
            <TaxiServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="why-choose-us">
          <h2>
            <span className="highlight">W</span>hy <span className="highlight">C</span>hoose <span className="highlight">U</span>s?
            <hr className="title-line" />
          </h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Safe & Secure</h3>
              <p>All our drivers are verified and vehicles are regularly maintained for your safety</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>24/7 Service</h3>
              <p>Round the clock availability for all your transportation needs</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h3>Affordable Rates</h3>
              <p>Competitive pricing with no hidden charges. Transparent billing</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Professional Drivers</h3>
              <p>Experienced and courteous drivers who know the city well</p>
            </div>
          </div>
        </div>

        <div className="taxi-contact">
          <h2>
            <span className="highlight">R</span>eady to <span className="highlight">B</span>ook?
            <hr className="title-line" />
          </h2>
          <p>Contact us now for immediate booking or any queries</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91-7225065920</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>sahiltoursandtravels@gmail.com</span>
            </div>
          </div>
          <Link to="/book" className="main-cta-btn">
            Book Your Ride Now
          </Link>
        </div>
      </div>
    </>
  )
}