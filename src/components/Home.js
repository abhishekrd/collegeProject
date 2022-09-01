import React from 'react'
import Institution from './Institution'
import Navigation from './Navbar';
import Footer from "./Footer.js";

const Home = () => {
  return (
    <div className='App'>
      <Institution />
    <Navigation />
    <Footer />
    
    </div>
    
    
  )
}

export default Home