import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import SimpleSlider from '../../components/slide/Slide'
// import CardsCat from '../../components/catCard/CardsCat'
const Home = () => {
  return (
    <div className='home'>
     <Featured/>  
     <TrustedBy/>
     <SimpleSlider/>
    </div>
  )
}

export default Home