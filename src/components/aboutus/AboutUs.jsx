import React from "react";
import ab1 from "../../assets/ab1.png";
import ab2 from "../../assets/ab2.png";
import ab3 from "../../assets/ab3.png";
import live from "../../assets/live.png";
import web from "../../assets/web.png";
import backgroundImage2 from "../../assets/bg5.png";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  const items = [
    {
      img: ab1,
      title: "Pearson BTEC Level 3 Award in Education and Training (RQF)",
      description:
        "If you aspire to become a teacher, but don’t have the hours to put in to gain a recognised qualification, we ...",
      price: "£369.00",
    },
    {
      img: ab2,
      title: "ITIL 4 Foundation OF ComPutign and Network",
      description:
        "PRINCE2® 7 Foundation Gamified Certification comprises innovative additions and improvements. T..",
      price: "£769.00",
    },
    {
      img: ab3,
      title: "Foundation Certificate in Business Analysis",
      description:
        "If you want to take a step forward in a career in business analysis, the Foundation Certificate is a great place to ...",
      price: "£1049.00",
    },
  ];

  return (
    <div className="container">
      <div
        className="flex h-auto bg-cover"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="max-w-screen-lg mx-auto ">
          <div className="flex items-center justify-center mx-auto mb-10 space-y-10 text-xl font-bold text-center font-jakarta">
            <div className="flex flex-col items-center justify-center gap-2 mx-auto mt-10 text-xl font-bold text-center font-jakarta">
              <h1 className="transition-colors duration-500 md:w-8/12 hover:text-orange-600">
                Our experts design tailored courses to solve workforce challenges
                and drive business success.
              </h1>
            </div>
          </div>

          {/* Grid Images Section */}
          <div className="grid grid-cols-1 gap-4 mx-5 md:grid-cols-3 md:mx-auto">
            {items.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 space-y-5 transition-transform transform bg-white rounded-lg font-jakarta hover:scale-105"
              >
                <img src={item.img} alt={item.title} />
                <h1 className="font-bold">{item.title}</h1>
                <div className="flex flex-row gap-3 text-sm rounded-md">
                  <div className="flex h-5 rounded-lg w-28 bg-lBlue">
                    <img src={live} alt="Clock" />
                    <h1>22 Modules</h1>
                  </div>
                  <div className="flex w-48 h-5 rounded-lg bg-lBlue">
                    <img src={web} alt="Check" />
                    <h1>Professional Certificate</h1>
                  </div>
                </div>
                <div className="text-sm font-jakarta">
                  <h1>{item.description}</h1>
                </div>
                <h1>
                  From <span className="text-xl font-bold">{item.price}</span> /month
                </h1>
              </div>
            ))}
          </div>

          {/* Show More Section */}
          <div className="flex flex-col items-center justify-center w-10/12 gap-5 mx-auto my-10 md:flex-row md:w-auto">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center text-white transition-colors duration-500 bg-black rounded-lg md:w-auto hover:bg-gray-800">
              Show More
              <span>
                <FaArrowRight />
              </span>
            </button>
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-center text-black transition-colors duration-500 border border-black rounded-lg md:w-auto hover:bg-gray-200">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
