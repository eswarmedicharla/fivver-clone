import React from 'react'
import './catCard.scss'
import { Link } from 'react-router-dom'
const CatCard = (item) => {
  return (
    <Link to="/gigs/123">
      <div className='catCard'>
        <img src={item.img}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
      </div>
    </Link>
  )
}

export default CatCard