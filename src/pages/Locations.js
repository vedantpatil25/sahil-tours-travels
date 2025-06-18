import "./Locations.css";
import tiger1 from '../media/tiger1.jpg'
import barasingha1 from '../media/barasingha1.jpg'
import tiger2 from '../media/tiger2.png'
import leopard1 from '../media/leopard1.jpg'
import goa from "../media/goa.jpg";
import { PackageCard } from "../components/PackageCard";
import { Searchbox } from "../components/Searchbox";
import { useState, useEffect } from "react";

export const Locations = () => {
           
  const packageInfoRow1 = [
    {
      place: "delhi",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Praesentium repellat repudiandae iste veritatis cumque vitae!",
      img: goa,
      price: "4000-5000 INR",
    },
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
  ];

  const [searchField, setSearchField] = useState("");
  const [places, setPlaces] = useState(packageInfoRow1);
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  useEffect(() => {
    const newfilteredPlaces = places.filter((place) => {
      return place.place.toLocaleLowerCase().includes(searchField);
    });

    setFilteredPlaces(newfilteredPlaces);
  }, [places, searchField]);

  const handleOnChange = (e) => {
    const search = e.target.value.toLocaleLowerCase();
    setSearchField(search);
  };
  return (
    <>
      <section className="packages">
        <div className="package-container">
          <h2>
            All Locations
            <hr />
          </h2>
          <Searchbox handleOnChange={handleOnChange} />

          <div className="p-row">
            {filteredPlaces.map((element) => {
              return (
                <PackageCard
                  placeName={element.place}
                  img={element.img}
                  info={element.info}
                  price={element.price}
                  location={element.place}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
