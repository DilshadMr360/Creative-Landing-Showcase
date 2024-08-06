import React, { useState } from 'react';
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.png";

const FindUs = () => {
  const items = [
    { img: f1, title: '10+ Years of Experience', description: 'Industry expert tutors with real-world experience in your chosen field' },
    { img: f2, title: 'Expert Tutors', description: 'Get guidance from professionals with years of experience' },
    { img: f3, title: 'Comprehensive Courses', description: 'Wide range of courses to choose from' },
    { img: f4, title: 'Flexible Learning', description: 'Learn at your own pace with flexible schedules' },
    { img: f5, title: 'Certification', description: 'Receive industry-recognized certifications upon completion' },
  ];

  const itemsPerPage = 4; // Number of items to show at a time
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (items.length - itemsPerPage + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + (items.length - itemsPerPage + 1)) % (items.length - itemsPerPage + 1)
    );
  };

  return (
    <div className='container'>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col items-center justify-center gap-2 mx-auto text-xl font-bold text-center font-jakarta'>
          <h1 className='w-4/12'>Find Your Perfect Fit: Dive into Our Diverse Categories</h1>
          <p className='w-6/12 text-sm font-normal'>Explore a variety of categories covering diverse topics, empowering you to expand your skills and knowledge base effectively.</p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center mt-6 overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
              width: `${items.length * 100}%`
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="flex-none w-full p-4 md:w-1/4">
                <div className="shadow-[#e7e4e4] shadow-lg font-jakarta rounded-xl space-y-5 py-5 pl-2 w-full">
                  <img src={item.img} alt="Experience Icon" />
                  <h1 className="text-2xl font-bold font-jakarta">{item.title}</h1>
                  <h1 className="text-sm">{item.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar & Navigation */}
        <div className="flex items-center justify-center mt-4 space-x-4">
          {/* Left Arrow */}
          <button onClick={prevSlide} className="p-2 text-white bg-black rounded-full">
            ←
          </button>

          {/* Progress Bar */}
          <div className="relative w-full h-2 overflow-hidden bg-gray-200 rounded-full">
            <div
              className="absolute h-full transition-all duration-300 bg-black"
              style={{ width: `${((currentIndex + itemsPerPage) / items.length) * 100}%` }}
            />
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide} className="p-2 text-white bg-black rounded-full">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
