import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className='app__aboutus app__bg flex__center section__padding'
    id='about'
  >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter' />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon img' />
        <p className='p__opensans'>
          Mollit Deserunt Fugiat Enim Fugiat Esse Deserunt Ad Nostrud. Anim Ut
          Commodo Sit Exercitation Pariatur Aute Do Officia Nisi Aliquip Dolor
          Dolor Aliquip Duis. Non Laborum Qui Duis Esse Id Officia Voluptate
          Aliquip Dolore Dolor. Nisi Et Amet Culpa Lorem Esse Deserunt Ad Id
          Velit Adipisicing Magna Labore Excepteur.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon img' />
        <p className='p__opensans'>
          Mollit Deserunt Fugiat Enim Fugiat Esse Deserunt Ad Nostrud. Anim Ut
          Commodo Sit Exercitation Pariatur Aute Do Officia Nisi Aliquip Dolor
          Dolor Aliquip Duis. Non Laborum Qui Duis Esse Id Officia Voluptate
          Aliquip Dolore Dolor. Nisi Et Amet Culpa Lorem Esse Deserunt Ad Id
          Velit Adipisicing Magna Labore Excepteur.
        </p>
        <button type='button' className='custom__button'>
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
