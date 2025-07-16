import './Testimonials.css'

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Amazing safari experience at Bandhavgarh! Sahil Tours made our trip unforgettable. We spotted 3 tigers and the guide was incredibly knowledgeable.',
      emoji: '👨'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Delhi, India',
      rating: 5,
      text: 'Best wildlife tour ever! The arrangements were perfect and the accommodation was excellent. Highly recommend for families.',
      emoji: '👩'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 4,
      text: 'Fantastic experience at Kanha National Park. Professional service and great value for money. The jungle safari was thrilling!',
      emoji: '👨‍💼'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'Incredible wildlife photography opportunities! Sahil Tours understood our needs perfectly. Captured amazing shots of tigers and leopards.',
      emoji: '👩‍💻'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      text: 'Outstanding service from booking to the end of trip. The team is very professional and the safari guides are experts in wildlife tracking.',
      emoji: '👨‍🦱'
    },
    {
      id: 6,
      name: 'Kavya Nair',
      location: 'Kochi, Kerala',
      rating: 4,
      text: 'Beautiful experience at Pench National Park. Well organized tour with comfortable stays. Perfect for nature lovers and adventure seekers.',
      emoji: '👩‍🦰'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fas fa-star ${index < rating ? 'filled' : 'empty'}`}
      ></i>
    ))
  }

  return (
    <div className="container6">
      <section className="testimonials" id="testimonials">
        <h2>What Our Travelers Say</h2>
        <p className="testimonials-subtitle">
          Real experiences from our satisfied customers
        </p>

        <div className="testimonials-container">
          <div className="testimonials-scroll">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <span className="avatar-emoji">{testimonial.emoji}</span>
                  </div>
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="location">{testimonial.location}</p>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator">
          <p>← Scroll to see more reviews →</p>
        </div>
      </section>
    </div>
  )
}
