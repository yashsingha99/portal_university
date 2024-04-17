import React, { useState, useEffect } from 'react';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import './slider.css'

const Slider = () => {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 2000); // Change image every 4 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

  return (
    <div className="relative m-8 flex justify-center w-full h-full">
      <div className="relative w-3/4 h-full">
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10" onClick={goToPrevious}>
          &#10094;
        </button>
        <img style={{height: "600px"}} className="  rounded-md w-full mx-auto duration-1000 transition ease-in-out" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
