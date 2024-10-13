"use client";
import { useState, useEffect } from 'react';

const Slideshow = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
  <div>
      <div id='home' className="flex items-center justify-center w-full">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slideshow Image ${index + 1}`}
          className={`absolute pt-20 w-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      
    </div>
    <p className='flex justify-center'>Hello</p>
  </div>
  );
};

export default Slideshow;