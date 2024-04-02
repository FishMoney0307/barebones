import React from 'react'
import './About.css';
import './Home.css';
import Hero from '../Hero.js';
import Credits from './Credits.js';
import Footer from '../Footer.js';

const About = () => {
  return (
    <div className="background">
      <Hero />
      <div className="Home">
        <Credits />
        <Footer />
      </div>
    </div>

  )
}

export default About