import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import './Slide.scss'
export default function SimpleSlider({children,slidesToShow,slidesToScroll }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ,
    slidesToScroll: slidesToScroll
  };
  return (
    <div className="slider">
      <div className="container">
        <Slider {...settings}>
           {children}
        </Slider>
      </div>
    </div>
  );
}
SimpleSlider.propTypes = {
  children: PropTypes.node.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  slidesToScroll: PropTypes.number.isRequired
};