import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import {Footer} from './components/Footer/Footer';
import {VideoPlayer} from './components/VideoPlayer/VideoPlayer';


function App() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="our program" title="What We Offer" />
        <Programs />
        <About setPlayVideo={setPlayVideo} />
        <Title title="Campius Photos" subtitle="Gallery" />
        <Campus />
        <Title title="What Students says" subtitle="Testimonials" />
        <Testimonials />
        <Title title="Get In Touch" subtitle="Contact us" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo} />
    </>
  )
}

export default App
