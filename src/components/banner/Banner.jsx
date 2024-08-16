import React from "react";
import backgroundImage from "../../assets/bg.png";
import home from "../../assets/home1.png";
import { FaBolt } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="container relative overflow-hidden">
      <div
        className="w-full transition-transform duration-500 ease-in-out bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col items-center max-w-screen-lg mx-auto mt-10 md:flex-row">
          {/* Section 1 */}
          <div className="order-2 space-y-6 transition-transform duration-300 ease-in-out md:w-6/12 md:order-1 hover:scale-105 hover:translate-x-1">
            <div className="mx-auto mb-4 text-xl text-center md:text-4xl w-96 md:w-full md:text-start md:mx-0">
              <h1 className="font-bold text-black transition-colors duration-300 ease-in-out font-jakarta hover:text-orange-500">
                Upskill from Anywhere with{" "}
                <span className="text-orange-400">Industry-Recognized</span> Learning
              </h1>
            </div>
            <div className="mx-auto mt-3 mb-4 text-lg font-jakarta w-96 text-start md:mx-0">
              <p className="transition-opacity duration-300 ease-in-out hover:opacity-80">
                Flexible, accredited courses to help you learn and advance from
                anywhere in the world.
              </p>
            </div>
            <div className="max-w-lg w-96">
              {/* Input field and button container */}
              <div className="flex items-center py-2 transition-shadow duration-300 ease-in-out border rounded-md hover:shadow-lg">
                <input
                  type="text"
                  placeholder="What will you be learning today?"
                  className="px-2 py-2 pr-16 text-black placeholder-gray-400 transition-all duration-300 ease-in-out rounded-md"
                />
                <div className="flex items-center">
                  <button className="flex items-center px-4 py-2 mr-2 text-lg text-white transition-transform duration-300 ease-in-out rounded-md bg-lGreen hover:scale-105 hover:bg-green-600">
                    Explore
                    <FaBolt className="ml-2 transition-transform duration-300 ease-in-out hover:scale-110" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center justify-center order-1 w-full mx-auto md:justify-start md:w-6/12 md:order-2 md:items-start md:mx-0">
            <img
              src={home}
              alt=""
              className="md:w-[400px] w-6/12 transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
