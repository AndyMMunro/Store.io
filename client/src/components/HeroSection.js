import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/friendswalking.mp4' autoPlay loop muted />
      <h1>Clothing and Gear</h1>
      <p>Git on it</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Shop Now
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;