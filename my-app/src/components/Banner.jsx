import React from 'react';
import { useState, useEffect } from 'react';

const Banner = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
      const offset = window.scrollY;
      const newOpacity = Math.max(0, 1 - offset / 300);
      setOpacity(newOpacity);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className="banner pt-20 bg-yellow-900 text-white h-96 w-full flex items-center" style={{ opacity }}>
            <div className='text-3xl mx-10'><h1>What will you DIY?</h1></div>
            <div className="flex justify-center mt-4 pl-24">
                <input
                type="text"
                className="text-black border-2 border-gray-300 bg-white h-10 px- pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Search..."
                />
                <button className="ml-2 border-2 border-gray-300 text-white h-10 px-5 rounded-lg">
                Search
                </button>
            </div>
        </div>
    );
}

export default Banner;