import React from 'react';
import { Navbar, Banner, Body, Footer, Posts, Test } from "../components"

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />  
      <Posts />    
      <Footer />
    </div>
  )
}

export default Homepage;