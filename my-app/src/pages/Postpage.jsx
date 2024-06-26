import React from 'react';
import { Navbar, Banner, Body, Footer, Post } from "../components"
import { useParams } from 'react-router-dom';

const Postpage = () => {
    const { id } = useParams();
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />  
      <Post id={id}/>    
      <Footer />
    </div>
  )
}

export default Postpage;