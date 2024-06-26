import React from 'react';
import { Navbar, Banner, Body, Footer, Posts, Test } from "../components"

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Banner />  
      <Posts />    
      <Footer />
    </div>
  )
}

export default Homepage;