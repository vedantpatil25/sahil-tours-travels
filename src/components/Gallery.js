import './Gallery.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import your images
import delhiImg from '../media/tiger1.jpg'
import bandhavgarhImg from '../media/tiger2.png'
import kanhaImg from '../media/tiger3.png'
import penchImg from '../media/booking.png'
import pannaImg from '../media/company_poster.png'

export const Gallery = ({ isHomePage = false }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    {
      id: 1,
      title: 'Delhi Wildlife Sanctuary',
      image: delhiImg,
      description: 'Urban wildlife experiences in the heart of India',
    },
    {
      id: 2,
      title: 'Bandhavgarh National Park',
      image: bandhavgarhImg,
      description: 'Home to the highest density of tigers in India',
    },
    {
      id: 3,
      title: 'Kanha Tiger Reserve',
      image: kanhaImg,
      description: "Inspiration for Rudyard Kipling's Jungle Book",
    },
    {
      id: 4,
      title: 'Pench National Park',
      image: penchImg,
      description: 'Pristine wilderness and diverse wildlife',
    },
    {
      id: 5,
      title: 'Panna National Park',
      image: pannaImg,
      description: 'Diamond mines and tiger conservation success',
    },
    {
      id: 6,
      title: 'Tiger Spotting at Bandhavgarh',
      image: bandhavgarhImg,
      description: 'Majestic tigers in their natural habitat',
    },
    {
      id: 7,
      title: 'Kanha Meadows',
      image: kanhaImg,
      description: 'Vast grasslands and sal forests',
    },
    {
      id: 8,
      title: 'Pench River Safari',
      image: penchImg,
      description: 'Riverside wildlife encounters',
    },
  ]

  // Show only first 4 items on home page
  const displayItems = isHomePage ? galleryItems.slice(0, 6) : galleryItems

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className={`container5 ${isHomePage ? 'home-gallery' : ''}`}>
      <section className="gallery" id="gallery">
        <h2>{isHomePage ? 'Safari Gallery Preview' : 'Explore Our Safari Destinations'}</h2>
        <p className="gallery-subtitle">
          {isHomePage 
            ? 'Get a glimpse of our amazing safari destinations' 
            : 'Discover the breathtaking beauty of India\'s wildlife sanctuaries'
          }
        </p>

        <div className={`gallery-grid ${isHomePage ? 'home-grid' : ''}`}>
          {displayItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="image-container" onClick={() => openModal(item)}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/400x300/FF8C42/FFFFFF?text=Safari+Image'
                  }}
                />
                <div className="image-overlay">
                  <div className="view-btn">
                    <i className="fas fa-search-plus"></i>
                    View Full
                  </div>
                </div>
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Button - Fixed Structure */}
        {isHomePage && (
          <div className="gallery-cta">
            <Link to="/gallery">
              <button className="gallery-explore-btn">
                <i className="fas fa-images"></i>
                View Full Gallery
              </button>
            </Link>
          </div>
        )}

        {/* Modal for full-size image */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
