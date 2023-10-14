import React from 'react'
import PropTypes from 'prop-types';
import './GigCard.scss'
import { Link } from 'react-router-dom';
// import AiFillStar, { AiFillHeart } from "react-icons/ai/index";
const GigCard = ({ item }) => {
  return (
    <Link to='/gig/123' className='link'>
      <div className='gigCard'>
        <img src={item.img} alt='' />
        <div className='info'>
          <div className='user'>
            <img src={item.pp} alt='' />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className='star'>
            <img src='./images/star.com.png'/>
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className='details'>
          <img src='./images/Heart.png' alt=''/>
          <div className='price'>
            <span>STARTING AT </span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  )
}
GigCard.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default GigCard