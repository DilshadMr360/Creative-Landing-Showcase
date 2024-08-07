import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import backgroundImage2 from "../../assets/testimonail-bg.png";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
import t5 from "../../assets/t5.png";
import t6 from "../../assets/t6.png";
import t7 from "../../assets/t7.png";
import t8 from "../../assets/t8.png";
import stars from "../../assets/stars.png";
import coma from "../../assets/coma.png";

const Testimonial = () => {
  const items = [
    {
      img: t1,
      title: "Steven",
      country: "United Kingdom",
      description:
        "Massive shout out out to Ashley from the Mentor Support Service. Ashley provided lots of important advice",
      img2: stars,
      bg: "bg-blue-200",
    },
    {
      img: t2,
      title: "Business & Management",
      country: "United Kingdom",
      description:
        "Gain essential business skills with our Ofqual-regulated Business and Management Training.",
      img2: stars,
      bg: "bg-yellow-100", 
    },
    {
      img: t3,
      title: "Teaching & Education",
      country: "United Kingdom",
      description:
        "Enhance your teaching career with accredited courses for diverse, rewarding opportunities.",
      img2: stars,
      bg: "bg-yellow-300", 

    },
    {
      img: t4,
      title: "Accounting & Finance",
      country: "United Kingdom",
      description:
        "Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.",
      img2: stars,
      bg: "bg-blue-200", 
    },
    {
      img: t5,
      title: "AS",
      country: "United Kingdom",
      description:
        "Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.",
      img2: stars,
      bg: "bg-yellow-200", 
    },
    {
      img: t6,
      title: "ASance",
      country: "United Kingdom",
      description:
        "Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.",
      img2: stars,
      bg: "bg-yellow-300", 
    },
    {
      img: t7,
      title: "ASan2",
      country: "United Kingdom",
      description:
        "Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.",
      img2: stars,
      bg: "bg-teal-500", 
    },
    {
      img: t8,
      title: "Asan3",
      country: "United Kingdom",
      description:
        "Gain comprehensive accounting skills with accredited courses covering finance, taxes, and software.",
      img2: stars,
      bg: "bg-orange-500", 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
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

  const progressPercentage = ((currentIndex + itemsPerPage) / totalItems) * 100;

  return (
    <div className="container">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center justify-center gap-2 mx-auto text-xl font-bold text-center font-jakarta">
          <h1>Client Testimonials</h1>
          <p className="w-6/12 text-sm font-normal">
            Hear Heart-warming Stories from Our Valued Customers Sharing Their
            Experience and Success with Our Services
          </p>
        </div>
      </div>

      {/* Testimonial */}

      <div
        className="flex h-auto bg-cover "
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="flex flex-col items-center w-full mt-20 ">
          {/* Content */}
          <div className="grid w-full grid-cols-1 gap-4 mb-4 md:grid-cols-4">
            {/* Loop through items */}
            {items
              .slice(currentIndex, currentIndex + itemsPerPage)
              .map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col p-4 space-y-8 rounded-lg font-jakarta ${item.bg}`} // Apply background color from item object
                >
                  <div className="flex items-center gap-2">
                    <img src={item.img} alt="" className="w-16" />
                    <div className="flex flex-col">
                      <h1 className="font-bold">{item.title}</h1>
                      <h1>{item.country}</h1>
                    </div>
                  </div>
                  <img src={coma} alt="" className="w-5" />
                  <p>{item.description}</p>
                  <img src={stars} alt="" className="w-20" />
                </div>
              ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between w-full max-w-xs ">
            <button
              className="p-2 text-black bg-white rounded-full disabled:opacity-50"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft />
            </button>

            {/* Progress Bar */}
            <div className="relative w-64 h-1 mx-2 overflow-hidden bg-gray-500 rounded-full">
              <div
                className="absolute h-full bg-white rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <button
              className="p-2 text-black bg-white rounded-full disabled:opacity-50"
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

export default Testimonial;
