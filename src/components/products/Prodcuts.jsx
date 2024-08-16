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

  const products = [
    {
      id: 1,
      title: "Gamified Learning",
      image: productImage1,
      modules: 22,
      certificate: "Professional Certificate",
      description:
        "The PRINCE2® 7 Practitioner Interactive & Gamified Learning is designed for aspiring and current project managers.",
      price: "£199.99",
      originalPrice: "£1455",
      discountedPrice: "£1099",
    },
    {
      id: 2,
      title: "Business Management Essentials",
      image: productImage2,
      modules: 18,
      certificate: "Diploma",
      description:
        "Learn the essentials of business management with this comprehensive course.",
      price: "£149.99",
      originalPrice: "£1299",
      discountedPrice: "£999",
    },
    {
      id: 3,
      title: "Advanced Project Management",
      image: productImage3,
      modules: 30,
      certificate: "Advanced Certificate",
      description:
        "Master the advanced techniques in project management with this in-depth course.",
      price: "£299.99",
      originalPrice: "£1599",
      discountedPrice: "£1299",
    },
    {
      id: 4,
      title: "Life Learning Skills",
      image: productImage4,
      modules: 12,
      certificate: "Certificate",
      description:
        "Develop essential life skills to enhance personal and professional growth.",
      price: "£99.99",
      originalPrice: "£599",
      discountedPrice: "£499",
    },
    {
      id: 5,
      title: "Employability Skills ",
      image: productImage5,
      modules: 20,
      certificate: "Career Certificate",
      description:
        "Equip yourself with the necessary skills to excel in today's job market.",
      price: "£179.99",
      originalPrice: "£899",
      discountedPrice: "£699",
    },
    {
      id: 6,
      title: "HR & Leadership Mastery",
      image: productImage6,
      modules: 25,
      certificate: "Leadership Certificate",
      description:
        "Gain the expertise to lead teams effectively and manage human resources with confidence.",
      price: "£249.99",
      originalPrice: "£1399",
      discountedPrice: "£1199",
    },
  ];

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
        <div className="max-w-screen-lg mx-auto mt-20 ">
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
              className="md:w-full w-[420px]" // Full width for the container
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

          {/* Grid Images Section */}
          <div className="max-w-screen-lg p-4 mx-auto overflow-hidden ">
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="px-4 py-2 mx-5 space-y-5 transition-transform duration-300 ease-in-out bg-white rounded-lg font-jakarta hover:scale-105 md:mx-0"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                  <h1 className="font-bold">{product.title}</h1>
                  <div className="flex flex-row gap-2 text-sm rounded-md">
                    <div className="flex h-5 gap-1 rounded-lg w-28 bg-lBlue">
                      <img src={clock} alt="Clock" />
                      <h1>{product.modules} Modules</h1>
                    </div>
                    <div className="flex w-48 h-5 rounded-lg bg-lBlue">
                      <img src={check} alt="Check" />
                      <h1>{product.certificate}</h1>
                    </div>
                  </div>
                  <div className="text-sm font-jakarta">
                    <h1>{product.description}</h1>
                  </div>
                  <h1>
                    From <span className="text-xl font-bold">{product.price}</span> /month
                  </h1>
                  <div className="flex flex-row items-center justify-between space-x-4 text-sm font-jakarta">
                    <h1 className="flex items-center space-x-2 font-bold font-jakarta">
                      <span>{product.discountedPrice}</span>
                      <span className="font-normal line-through">{product.originalPrice}</span>
                      <span>in full</span>
                    </h1>
                    <button className="flex items-center space-x-2 font-bold transition-transform duration-300 ease-in-out font-jakarta hover:scale-105">
                      <span>View Details</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Show More Section */}
          <div className="flex flex-col items-center justify-center w-10/12 gap-5 mx-auto my-10 md:flex-row md:w-auto">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center text-white transition-transform duration-300 ease-in-out bg-black rounded-lg md:w-auto hover:scale-105">
              Show More
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center text-black transition-transform duration-300 ease-in-out border border-black rounded-lg md:w-auto hover:scale-105">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
