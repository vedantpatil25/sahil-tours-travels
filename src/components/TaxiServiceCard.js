import './TaxiServiceCard.css'
import { Link } from 'react-router-dom'

export const TaxiServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <span>{service.icon}</span>
      </div>
      <div className="service-content">
        <h3>{service.title}</h3>
        <p className="service-description">{service.description}</p>
        
        <div className="service-features">
          <h4>Features:</h4>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check"></i>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="service-price">
          <span className="price-label">Price:</span>
          <span className="price-value">{service.price}</span>
        </div>
        
        <div className="service-actions">
          <Link to="/book" className="book-btn">
            Book Now
          </Link>
          <Link to="/contact" className="info-btn">
            Get Info
          </Link>
        </div>
      </div>
    </div>
  )
}
