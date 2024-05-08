import React from 'react';
import Navbar from './Navbar';
import hero_image from '../assets/hero_image.png';
import hero_image_back from '../assets/hero_image_back.png';
import Heart from '../assets/heart.png';
import Calories from '../assets/calories.png';
import './Hero.css';


const Hero = () => {
  return (
    <div className="Hero">
      
      <div className='left-side'>
        <Navbar />
        <div className='the-best-ad'>
          <div></div>
          <span>the best fitness ad in town</span>
        </div>


        <div className='Hero-text'>
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>I am here to help you live your life to the fullest</span>
          </div>
        </div>

        <div className='figures'>
          <div><span>+140</span>
            <span>Expert Coaches</span></div>
          <div><span>+970</span><span>Members Joined</span></div>
          <div><span>+50</span><span>Fitness Programs</span></div>
        </div>

        <div className='Hero-btns'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>

      </div>
      <div className='right-side'>
        <button className='btn'>Join Now</button>

        <div className='heart-rate'>
          <img src={Heart} alt="" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_image} alt='hero image' className='hero-image' />
        <img src={hero_image_back} alt='hero image back' className='hero-image-back' />



      </div>


      <div className='calories'>
        <img src={Calories} alt='' />

        <div>
          <span>Calories Burned</span>
          <span>220 KCal</span>
        </div>
      </div>

    </div>
  );
}

export default Hero;
