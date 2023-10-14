import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import { cards, projects } from "../../Data";
import CardsCat from '../../components/catCard/CardsCat'
import SimpleSlider from '../../components/slide/Slide';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <SimpleSlider slidesToShow={5} slidesToScroll={1}>
        {cards.map(card => (
          <CardsCat key={card.id} item={card} />
        ))}
      </SimpleSlider>

      <div className='features'>
        <div className='container'>

          <div className='item'>
            <h1>The best part? Everything.</h1>

            <div className='title'>
              <span><TaskAltOutlinedIcon /></span>Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className='title'>
              <span><TaskAltOutlinedIcon /></span>Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
            <div className='title'>
              <span><TaskAltOutlinedIcon /></span>Pay when you are happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
            <div className='title'>
              <span><TaskAltOutlinedIcon /></span>Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.
            </p>

          </div>
          <div className='item'>
            <video src='./videos/fiver-video.mp4' controls></video>
          </div>
        </div>
      </div>
      {/* another feature */}
      <div className='features dark'>
        <div className='container'>

          <div className='item'>
            <h1>fiver <span>Bussiness solutions</span> </h1>
            <h1>Advanced solutions and professional talent for businesses</h1>

            <div className='title'>
              <TaskAltOutlinedIcon /><span>Access top freelancers and professional business tools for any project</span>
            </div>
            <div className='title'>
              <TaskAltOutlinedIcon /><span>Build your own branded marketplace of certified experts</span>
            </div>
            <div className='title'>
              <TaskAltOutlinedIcon /><span>Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution</span>
            </div>
            <button>Learn more</button>
          </div>

          <div className='item '>
            <img src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png' alt='' />
          </div>
        </div>
      </div>
      <SimpleSlider slidesToShow={4} slidesToScroll={4}>
        {projects.map(project => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </SimpleSlider>
    </div>
  )
}

export default Home