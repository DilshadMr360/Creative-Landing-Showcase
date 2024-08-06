import React, { useState } from 'react';
import backgroundImage2 from "../../assets/bg-2.png";
import productImage1 from "../../assets/PM1.png";
import productImage2 from "../../assets/PM2.png";
import productImage3 from "../../assets/PM3.png";
import productImage4 from "../../assets/PM4.png";
import clock from "../../assets/clock.png";
import check from "../../assets/check.png";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, A11y } from 'swiper/modules';

const Prodcuts = () => {
  const [items, setItems] = useState([
    'All courses',
    'Project Management',
    'Business Management',
    'Employability Skills',
    'Life Learning',
    'HR & Leadership'
  ]);

  const scrollRight = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const firstItem = newItems.shift();
      newItems.push(firstItem);
      return newItems;
    });
  };

  const scrollLeft = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      const lastItem = newItems.pop();
      newItems.unshift(lastItem);
      return newItems;
    });
  };

  return (
    <div className="container">
      <div
        className="flex h-auto bg-cover "
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="max-w-screen-lg mx-auto mt-40">
          {/* Carousel */}
          <div className="relative flex items-center">
            {/* Left Arrow */}
            <button onClick={scrollLeft} className="absolute left-0 z-10 p-2 text-white bg-black rounded-full">
              ←
            </button>

            {/* Slider Container */}
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              navigation={false}  // Disable default navigation
              pagination={false}  // Disable default pagination
              modules={[Navigation, Pagination, A11y]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4 py-2 bg-white border rounded-full">
                    {item}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Arrow */}
            <button onClick={scrollRight} className="absolute right-0 z-10 p-2 text-white bg-black ">
              →
            </button>
          </div>

          {/* Grid Images Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[productImage1, productImage2, productImage3, productImage4].map((image, index) => (
              <div key={index} className="px-4 py-2 space-y-5 bg-white rounded-lg font-jakarta">
                <img src={image} alt={`Product ${index + 1}`} />
                <h1 className="font-bold">
                  PRINCE2® 7 Practitioner: Interactive & Gamified Learning
                </h1>
                <div className="flex flex-row gap-3 text-sm rounded-md">
                  <div className="flex h-5 rounded-lg w-28 bg-lBlue">
                    <img src={clock} alt="Clock" />
                    <h1>22 Modules</h1>
                  </div>
                  <div className="flex w-48 h-5 rounded-lg bg-lBlue">
                    <img src={check} alt="Check" />
                    <h1>Professional Certificate</h1>
                  </div>
                </div>
                <div className="text-sm font-jakarta">
                  <h1>
                    The PRINCE2® 7 Practitioner Interactive & Gamified Learning is designed for aspiring and current project managers.
                  </h1>
                </div>
                <h1>
                  From <span className="text-xl font-bold">£199.99</span> /month
                </h1>
                <div className="flex flex-row items-center justify-between w-full space-x-4 text-sm font-jakarta">
                  <h1 className="flex items-center space-x-2 font-bold font-jakarta">
                    <span>£1099</span>
                    <span className="font-normal">1455</span>
                    <span>in full</span>
                  </h1>
                  <button className="flex items-center space-x-2 font-bold font-jakarta">
                    <span>View Details</span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Section */}
          <div className="flex items-center justify-center gap-5 my-10">
            <button className="flex items-center justify-center w-40 h-12 gap-2 text-center text-white bg-black rounded-lg">
              Show More
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="w-24 h-12 border border-black rounded-lg">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodcuts;
