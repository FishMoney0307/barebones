import React from 'react'
import './Home.css';
import Footer from '../Footer.js';
import Hero from '../Hero.js';
import Body from '../Body.js';

const Home = () => {
  return (
    <div style={{backgroundColor: "#3b0a04"}}>
      <Hero/>
      <div className="App">
        <Body />
        <Footer />
      </div>
    </div>
  )
}

export default Home