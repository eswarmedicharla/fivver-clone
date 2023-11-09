import React from 'react'
import './Gig.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from '../../components/slide/Slide'
const Gig = () => {

  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <span className='breadCrums'>FIVVER GRAPHICS & DESIGN</span>
          <h1>I will create quick custom ai art using midjourney advanced</h1>
          <div className='username'>
            <img className="pp" src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG' alt='' />
            <span>Jhon Doe</span>
            <div className='stars'>
              <img src='./images/star.com.png' alt='' />
              <img src='./images/star.com.png' alt='' />
              <img src='./images/star.com.png' alt='' />
              <img src='./images/star.com.png' alt='' />
              <img src='./images/star.com.png' alt='' />
              <span>5</span>
            </div>
          </div>
          <SimpleSlider slidesToShow={1} slidesToScroll={3} className="slider" >

            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            {/* <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />

            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            /> */}
          </SimpleSlider>
          <h2>About this gig</h2>
          <p>I create one-of-a-kind AI images using Midjourney.
            I have put in countless hours to effectively master this software,
            and thats why I am the ideal designer for your project. You no longer
            need to spend hours searching for the right image or try to make a design from scratch. With your words, I am able to generate a wide variety of styles, themes,
            and colour palettes that reflect your idea of a perfect masterpiece. You get to be the artist - no experience necessary! Whether its for a business presentation, social media content,
            or a personal project, my platform offers a quick and easy solution
            to all your art needs. Upgrade your creativity with my services.
            Send me a message anytime! I am here.</p>

          <div className='seller'>
            <h2> About the seller</h2>
            <div className='user'>
              <img src='https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c5323d1e3c30bbac2c31a905b5bd8cb2-1675191168940/22bca898-8c41-4832-be06-ac78f7d044a4.PNG' alt='' />
              <div className='info'>
                <span>Johan deo</span>
                <div className='stars'>
                  <img src='./images/star.com.png' alt='' />
                  <img src='./images/star.com.png' alt='' />
                  <img src='./images/star.com.png' alt='' />
                  <img src='./images/star.com.png' alt='' />
                  <img src='./images/star.com.png' alt='' />
                  <span>5</span>
                </div>
                <button>Contact me</button>
              </div>
            </div>
            <div className='box'>
              <div className='items'>
                <div className='item'>
                  <span className='title'>From</span>
                  <span className='desc'>USA</span>
                </div>
                <div className='item'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Jan 2023</span>
                </div>
                <div className='item'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>1 hour</span>
                </div>
                <div className='item'>
                  <span className='title'>Languages</span>
                  <span className='desc'>English, German, Spanish</span>
                </div>
              </div>
              <hr />
              <p>Hi there & welcome to my shop. I am ai_lani - a digital artist who creates fully customizable images based on your specific needs and vision. You send me the photo or description, and I will present to you a one of a kind - AI generated piece of art.
                If you have any questions, send me a message anytime   </p>
            </div>
          </div>
          <div className='reviews'>
            <h2>Reviews</h2>
            <div className='item'>
              <div className='user'>
                <img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/582abdd2296e79a36d42ab847dc74632-1680388139172/895d8ac5-3c3e-481c-b650-96aed81afcbf.jpg' className='pp' />
                <div className='info'>
                  <span>Jhon doe</span>
                  <div className='country'>
                    <img src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png' alt='' />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <span>5</span>
              </div>
              <p>AI LANI is an absolute joy! She is a world-class, Hollywood-caliber
                talent! Although I have never met her physically, AI LANI is a
                beautiful, artistic spirit. You can feel her humanity, love,
                and soul through her work and her communications.
              </p>
              <div className='helpfull'>
                <span>Helpful?</span>
                <img src='./images/like.png' alt='' />
                <span>yes?</span>
                <img src='./images/dislike.png' alt='' />
                <span>No?</span>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/582abdd2296e79a36d42ab847dc74632-1680388139172/895d8ac5-3c3e-481c-b650-96aed81afcbf.jpg' className='pp' />
                <div className='info'>
                  <span>Jhon doe</span>
                  <div className='country'>
                    <img src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png' alt='' />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <span>5</span>
              </div>
              <p>AI LANI is an absolute joy! She is a world-class, Hollywood-caliber
                talent! Although I have never met her physically, AI LANI is a
                beautiful, artistic spirit. You can feel her humanity, love,
                and soul through her work and her communications.
              </p>
              <div className='helpfull'>
                <span>Helpful?</span>
                <img src='./images/like.png' alt='' />
                <span>yes?</span>
                <img src='./images/dislike.png' alt='' />
                <span>No?</span>
              </div>
            </div>
            <hr />
            <div className='item'>
              <div className='user'>
                <img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/582abdd2296e79a36d42ab847dc74632-1680388139172/895d8ac5-3c3e-481c-b650-96aed81afcbf.jpg' className='pp' />
                <div className='info'>
                  <span>Jhon doe</span>
                  <div className='country'>
                    <img src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png' alt='' />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className='stars'>
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <img src='./images/star.com.png' alt='' />
                <span>5</span>
              </div>
              <p>AI LANI is an absolute joy! She is a world-class, Hollywood-caliber
                talent! Although I have never met her physically, AI LANI is a
                beautiful, artistic spirit. You can feel her humanity, love,
                and soul through her work and her communications.
              </p>
              <div className='helpfull'>
                <span>Helpful?</span>
                <img src='./images/like.png' alt='' />
                <span>yes?</span>
                <img src='./images/dislike.png' alt='' />
                <span>No?</span>
              </div>
            </div>
          </div>
        </div>

        <div className='right'>
          <div className='price'>
            <h3>Basic package</h3>
            <h2>₹2,185</h2>
          </div>
          <p>1 Full concept + edit + 2K High resolution Unlimited revisions</p>
          <div className='details'>
            <div className='item'>
              <img src='./images/clock.png' alt='' />
              <span>4 days Delivery</span>
            </div>
            <div className='item'>
              <img src='./images/recycle.png' alt='' />
              <span>Unlimited Revisions</span>
            </div>
          </div>
          <div className='features'>
            <div className='item'>
              <img src='./images/check_mark.png' />
              <span>1 image</span>
            </div>
            <div className='item'>
              <img src='./images/check_mark.png' />
              <span>Prompt creation</span>
            </div>
            <div className='item'>
              <img src='./images/check_mark.png' />
              <span>Prompt delivery</span>
            </div>
            <div className='item'>
              <img src='./images/check_mark.png' />
              <span>Artwork delivery</span>
            </div>
            <div className='item'>
              <img src='./images/check_mark.png' />
              <span>Image upscaling</span>
            </div>
          </div>
          <button>Continue</button>

        </div>
      </div>
    </div>
  )
}

export default Gig