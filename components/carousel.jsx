import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import teacher1 from '../img/t1.jpeg';
import teacher2 from '../img/teacher2.jpeg';
import teacher3 from '../img/teacher3.jpeg';
import teacher4 from '../img/teacher4.jpeg';
import teacher5 from '../img/teacher5.jpeg';

const data = [
  {
    name: "Karandeep",
    sub: 'YOGA',
    img: teacher1,
  },
  {
    name: "Asier",
    sub: 'ARTS & CRAFT',
    img: teacher2,
  },
  {
    name: "Marius Neilson",
    sub: 'ACADEMICS',
    img: teacher3,
  },
  {
    name: "Nichola",
    sub: 'LANGUAGE',
    img: teacher4,
  },
  {
    name: "Kirat",
    sub: 'MUSIC',
    img: teacher5,
  }
];

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {data.map((teacher, index) => (
        <div key={index} className='carousel-item'>
          <img src={teacher.img} alt={teacher.name} />
          <div className="text-container">
            <p className="t-name">{teacher.name}</p>
            <p className="t-sub">{teacher.sub}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SimpleCarousel;
