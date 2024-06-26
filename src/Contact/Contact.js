import React from 'react'
import Hero from '../Hero.js';
import Footer from '../Footer.js';
import '../About/About.css';
import '../Home/Home.css';
import CB from './ContactBody.js';

const Contact = () => {
  return (
    <div className="background">
      <Hero />
      <div className="Home">
        <CB />
        <Footer />
      </div>
    </div>
  )
}

export default Contact