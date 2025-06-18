import './PackageSection.css'
import { Link } from 'react-router-dom'
import { PackageCard } from './PackageCard'
import tiger1 from '../media/tiger1.jpg'
import barasingha1 from '../media/barasingha1.jpg'
import tiger2 from '../media/tiger2.png'
import leopard1 from '../media/leopard1.jpg'

export const PackageSection = () => {
  const packageInfoRow2 = [
    {
      place: 'Bandhavgarh National Park',
      info:
        'The land of the Bengal tiger, Bandhavgarh is known for its high density of tigers and diverse wildlife.',
      img: tiger1,
      price: '4000-5000 INR',
    },
    {
      place: 'Kanha Tiger Reserve',
      info:
        'The Hub of Baraisa, Kanha is one of the largest national parks in India. It is home to a large population of tigers and other wildlife.',
      img: barasingha1,
      price: '4000-5000 INR',
    },
    {
      place: 'Pench National Park',
      info:
        'The Mowgli Land, Pench is famous for its rich biodiversity and scenic beauty. It is a great place for wildlife enthusiasts.',
      img: leopard1,
      price: '4000-5000 INR',
    },
    {
      place: 'Panna National Park',
      info:
        'Panna is known for its stunning landscapes and rich wildlife. It is a great place for birdwatching and wildlife photography.',
      img: tiger2,
      price: '4000-5000 INR',
    },
  ]
  return (
    <>
      <div className="container3">
        <section className="packages" id="packages">
          <h1>Tiger Reserves</h1>
          <div className="outerbox">
            <div className="row2">
              {packageInfoRow2.map((element) => {
                return (
                  <PackageCard
                    placeName={element.place}
                    img={element.img}
                    info={element.info}
                    price={element.price}
                    location={element.place}
                  />
                )
              })}
            </div>
            <div className="morebtn">
              <Link to="/locations">
                <button className="more-btn">Explore all</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
