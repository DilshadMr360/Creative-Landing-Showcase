import React, { useState } from 'react';

const Slider = () => {
 

  return (
    <div className='container'>
    <div className='max-w-screen-lg mx-auto border border-red-500'>
  {/* Carousel */}
<div className="relative flex items-center w-10/12 mx-auto my-10 md:w-full">

{/* Left Arrow */}
<button
  className="absolute left-0 z-20 p-2 text-white transition-transform duration-300 ease-in-out bg-black rounded-full hover:scale-110"
  onClick={scrollLeft}
  style={{ top: "50%", transform: "translateY(-50%)" }}
>
  <FaChevronLeft />
</button>

{/* Slider Container */}
<Swiper
  onSwiper={setSwiperRef}
  spaceBetween={10}
  slidesPerView={1} // Default to 1 slide per view on all screens
  navigation={false}
  pagination={false}
  modules={[Navigation, Pagination, A11y]}
  breakpoints={{
    640: {
      slidesPerView: 1, // 1 item on screens <= 640px
    },
    768: {
      slidesPerView: 2, // 2 items on screens > 640px and <= 768px
    },
    1024: {
      slidesPerView: 3, // 3 items on screens > 768px and <= 1024px
    },
    1280: {
      slidesPerView: 4, // 4 items on screens > 1024px and above
    },
  }}
  className="w-full" // Full width for the container
>
  {items.map((item, index) => (
    <SwiperSlide key={index}>
      <div className="px-4 py-2 text-center transition-transform duration-300 ease-in-out bg-white border rounded-full font-jakarta hover:scale-105">
        {item}
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Right Arrow */}
<button
  className="absolute right-0 z-20 p-2 text-white transition-transform duration-300 ease-in-out bg-black rounded-full hover:scale-110"
  onClick={scrollRight}
  style={{ top: "50%", transform: "translateY(-50%)" }}
>
  <FaChevronRight />
</button>
</div>

    </div>
    </div>
  );
};

export default Slider;
