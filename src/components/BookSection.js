import './BookSection.css'
import company_poster from '../media/company_poster.png'

import { Link } from 'react-router-dom'

export const BookSection = () => {
  return (
    <>
      <div className="container2">
        <section className="book" id="book">
          <h1>Book your Safari now!</h1>
          <div className="row">
            <div className="image">
              <img src={company_poster} id="flyimg" alt={'Bookings'} />
            </div>
            <div className="box">
              <h2>
                Book Your safari
                <hr />
              </h2>
              <p>One step away from your experience! What are you waiting for?</p>
              <Link to="/contact">
                <div className="btn">
                  <button className="book-btn">Book now</button>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
