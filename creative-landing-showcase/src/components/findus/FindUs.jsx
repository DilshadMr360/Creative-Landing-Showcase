import React, { useState, useEffect } from 'react';
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FindUs = () => {
  const items = [
    { img: f1, title: 'Project Management', description: 'Start a project management career with our industry-recognized, accredited online courses.' },
    { img: f2, title: 'Business & Management', description: 'Gain essential business skills with our Ofqual-regulated Business and Management Training.' },
    { img: f3, title: 'Teaching & Education', description: 'Enhance your teaching career with accredited courses for diverse, rewarding opportunities.' },
    { img: f4, title: 'Accounting & Finance', description: 'Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.' },
    { img: f5, title: 'Office & Admin Reception', description: 'Excel in office administration and receptionist roles with our accredited, career-advancing programs.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    // Function to update itemsPerPage based on screen size
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };

    // Initial call to set the correct itemsPerPage
    updateItemsPerPage();

    // Add event listener to handle window resize
    window.addEventListener('resize', updateItemsPerPage);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalItems = items.length;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < totalItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate the progress percentage
  const progressPercentage = ((currentIndex + itemsPerPage) / totalItems) * 100;

  return (
    <div className='container'>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col items-center justify-center mx-auto space-y-10 text-xl font-bold text-center font-jakarta'>
          <h1 className='w-4/12 mt-10'>Find Your Perfect Fit: Dive into Our Diverse Categories</h1>
          <p className='mx-5 text-sm font-normal md:mx-0 md:w-6/12 '>Explore a variety of categories covering diverse topics, empowering you to expand your skills and knowledge base effectively.</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex flex-col items-center max-w-screen-lg mx-5 mt-10  md:mx-auto">
        {/* Content */}
        <div className={`grid w-full grid-cols-1 sm:grid-cols-4 gap-4 mb-4 font-jakarta`}>
          {items.slice(currentIndex, currentIndex + itemsPerPage).map((item, index) => (
            <div key={index} className="p-4 space-y-4 bg-white rounded-lg shadow">
              <img src={item.img} alt="" />
              <p className='text-xl font-bold'>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation and Progress */}
        <div className="flex items-center justify-between w-full max-w-xs">
          {/* Navigation Buttons */}
          <button
            className="p-2 text-white bg-black rounded-full disabled:opacity-50"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </button>

          {/* Progress Bar */}
          <div className="relative w-64 h-1 mx-2 overflow-hidden bg-gray-300 rounded-full">
            <div
              className="absolute h-full bg-black rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <button
            className="p-2 text-white bg-black rounded-full disabled:opacity-50"
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= totalItems}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
