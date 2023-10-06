import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import './CardsCat.scss'
const CardsCat = ({ item }) => {
  return (
    <Link to="/gigs/123">
      <div className='cardsCat'>
        <img src={item.img} alt='' />
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
      </div>
    </Link>
  )
}
CardsCat.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
};
export default CardsCat;