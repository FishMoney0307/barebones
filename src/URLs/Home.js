import React from 'react'
import './Home.css';
import Footer from '../Footer.js';
import Hero from '../Hero.js';
import Body from '../Body.js';

const Home = () => {
  return (
    <div className="background">
      <Hero/>
      <div className="Home">
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home