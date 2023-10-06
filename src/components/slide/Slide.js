import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../../Data";
import CardsCat from "../catCard/CardsCat";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5 ,
    slidesToScroll: 1
  };
  return (
    <div className="slider">
      <div className="container">
        <Slider {...settings}>
          {cards.map(card => (
            <CardsCat item={card} key={card.id}/>
          ))}
        </Slider>
      </div>
    </div>
  );
}