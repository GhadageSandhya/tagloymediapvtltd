import React from 'react';
// all images path
import activa from '../../src/Images/activa.jpg';
import bird from '../../src/Images/bird.jpg';
import book from '../../src/Images/book.jpg';
import city from '../../src/Images/city.jpg';
import flower from '../../src/Images/flower.jpg';
import laptop from '../../src/Images/laptop.jpg';
import nature from '../../src/Images/nature.jpg';
import taj from '../../src/Images/taj.jpg';
import sunset from '../../src/Images/sunset.jpg';
import night from '../../src/Images/night.jpg';
import hotel from '../../src/Images/hotel.jpg';
import beautifulflower from '../../src/Images/beautifulnature.jpg';
function ImagesComponent() {

  // images array
  const images = [
    {
      image: activa,
      title: 'Activa'
    },
    {
      image: bird,
      title: 'Bird'
    },
    {
      image: book,
      title: 'Book'
    },
    {
      image: city,
      title: 'City'
    },
    {
      image: flower,
      title: 'Flower'
    },
    {
      image: laptop,
      title: 'Laptop'
    },
    {
      image: nature,
      title: 'Nature'
    },
    {
      image: taj,
      title: 'Taj'
    },
    {
      image: night,
      title: 'Night'
    },
    {
      image: sunset,
      title: 'Sunset'
    },
    {
      image: beautifulflower,
      title: 'Beautifulflower'
    },
    {
      image: hotel,
      title: 'Hotel'
    }
  ]
  return (
    <div className='container' >
      <div className="row">
        <div className="col">
          {/* map() method for iteration */}
          <h3 className='imgtext'>Images</h3>
          {images.map((data, index) =>
            <img key={index} src={data.image} alt={data.title} className='img-fluid' loading="lazy" />
          )}
        </div>
      </div>
    </div>
  )
}

export default ImagesComponent


