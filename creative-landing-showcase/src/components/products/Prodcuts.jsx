import React, { useState } from "react";
import backgroundImage2 from "../../assets/bg-2.png";
import productImage1 from "../../assets/p1.png";
import productImage2 from "../../assets/p2.png";
import productImage3 from "../../assets/PM3.png";
import productImage4 from "../../assets/PM4.png";
import productImage5 from "../../assets/PM5.png";
import productImage6 from "../../assets/p3.png";
import clock from "../../assets/clock.png";
import check from "../../assets/check.png";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, A11y } from "swiper/modules";

const Products = () => {
  const [items] = useState([
    "All courses",
    "Project Management",
    "Business Management",
    "Employability Skills",
    "Life Learning",
    "HR & Leadership",
  ]);

  const [swiperRef, setSwiperRef] = useState(null);

  const scrollRight = () => {
    if (swiperRef) swiperRef.slideNext();
  };

  const scrollLeft = () => {
    if (swiperRef) swiperRef.slidePrev();
  };

  return (
    <div className="container">
      <div
        className="flex h-auto bg-cover"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="max-w-screen-lg mx-auto mt-40">
          {/* Carousel */}
          <div className="relative flex items-center my-10">
            {/* Left Arrow */}
            <button
              className="absolute left-0 z-20 p-2 text-white bg-black rounded-full"
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
              className=" md:w-full w-[420px]" // Full width for the container
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="px-4 py-2 text-center bg-white border rounded-full font-jakarta ">
                    {item}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Right Arrow */}
            <button
              className="absolute right-0 z-20 p-2 text-white bg-black rounded-full"
              onClick={scrollRight}
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Grid Images Section */}
            
          <div className="max-w-screen-lg mx-auto overflow-hidden ">
          <div className="grid w-full grid-cols-1 gap-4 w md:grid-cols-3 ">
            {[
              productImage1,
              productImage2,
              productImage3,
              productImage4,
              productImage5,
              productImage6,
            ].map((image, index) => (
              <div
                key={index}
                className="px-4 py-2 space-y-5 bg-white rounded-lg font-jakarta "
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full"
                />
                <h1 className="font-bold ">
                  PRINCE2® 7 Practitioner: Interactive & Gamified Learning
                </h1>
                <div className="flex flex-row gap-3 text-sm rounded-md ">
                  <div className="flex h-5 rounded-lg w-28 bg-lBlue">
                    <img src={clock} alt="Clock" />
                    <h1>22 Modules</h1>
                  </div>
                  <div className="flex w-48 h-5 rounded-lg bg-lBlue ">
                    <img src={check} alt="Check" />
                    <h1>Professional Certificate</h1>
                  </div>
                </div>
                <div className="text-sm font-jakarta ">
                  <h1 className="">
                    The PRINCE2® 7 Practitioner Interactive & Gamified Learning
                    is designed for aspiring and current project managers.
                  </h1>
                </div>
                <h1>
                  From <span className="text-xl font-bold ">£199.99</span> /month
                </h1>
                <div className="flex flex-row items-center justify-between space-x-4 text-sm font-jakarta">
                  <h1 className="flex items-center space-x-2 font-bold font-jakarta">
                    <span>£1099</span>
                    <span className="font-normal line-through">£1455</span>
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

          </div>
        
          {/* Show More Section */}
          <div className="flex flex-col items-center justify-center w-full gap-5 mx-5 my-10 md:flex-row md:w-auto">
  <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center text-white bg-black rounded-lg md:w-auto">
    Show More
    <span>
      <FaArrowRight />
    </span>
  </button>
  <button className="w-full px-4 py-2 border border-black rounded-lg md:w-auto">
    View All
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Products;
