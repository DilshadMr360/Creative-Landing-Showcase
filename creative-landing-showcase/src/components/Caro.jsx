import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Caro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = 20;

  const handleNext = () => {
    if (currentIndex + 1 < totalItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progressPercentage = ((currentIndex + itemsPerPage) / totalItems) * 100;

  return (
    <div className='container'>
      <div className='max-w-screen-lg mx-auto '>
        <div className="flex flex-col items-center">
          {/* Content */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {Array.from({ length: itemsPerPage }).map((_, index) => {
              const itemIndex = currentIndex + index;
              if (itemIndex < totalItems) {
                return (
                  <div key={index} className="p-4 bg-white rounded-lg shadow">
                    {/* Replace with actual content */}
                    <p>Content {itemIndex + 1}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* Progress Bar and Navigation Buttons */}
          <div className="flex items-center justify-between w-full max-w-xs">
            <button
              className="p-2 text-white bg-black rounded-full disabled:opacity-50"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft />
            </button>
            <div className="relative w-full h-2 mx-4 overflow-hidden bg-gray-300 rounded-full">
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
    </div>
  );
};

export default Caro;
