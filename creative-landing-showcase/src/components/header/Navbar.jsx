import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/log.png";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isYellowSectionVisible, setIsYellowSectionVisible] = useState(true);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const hideYellowSection = () => setIsYellowSectionVisible(false);

  return (
    <div className="relative">
      {/* Yellow Background Section */}
      {isYellowSectionVisible && (
        <div className="fixed top-0 left-0 z-50 w-full bg-dYellow font-outfit">
          <div className="p-2 text-lg">
            <div className="flex items-center w-full max-w-screen-lg mx-auto">
              <div className="flex items-center justify-center w-11/12 space-x-4">
                <h1 className="font-bold text-dRed">
                  Renew, Refresh <span className="font-bold text-black">24!</span>
                </h1>
                <div className="items-center hidden h-6 border border-gray-400 md:block"></div>
                <div className="flex items-center space-x-20">
                  <h1>Save up to 40%! Hurry, offer ends June 15th.</h1>
                  <div>
                    <button className="flex items-center justify-center w-40 h-10 gap-2 text-center text-white bg-black rounded-lg">
                      Claim Offer
                      <span>
                        <FaArrowRight  />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end w-1/12 font-bold">
                <button onClick={hideYellowSection}>X</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className={`relative flex justify-between max-w-screen-lg mx-auto font-jakarta ${isYellowSectionVisible ? 'pt-[75px]' : 'pt-0'} transition-all duration-300`}>
        <div className="flex items-center w-4/12 space-x-8">
          <img src={logo} alt="Logo" className="w-32 h-8" />
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 text-sm font-bold text-black rounded-md"
            >
              Explore Courses
              <MdOutlineArrowDropDown className="inline w-4 h-4 ml-2" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 z-50 w-48 mt-2 text-sm font-bold bg-white border border-gray-300 rounded-md shadow-lg">
                <a href="#course1" className="block px-4 py-2 hover:bg-gray-100">Course 1</a>
                <a href="#course2" className="block px-4 py-2 hover:bg-gray-100">Course 2</a>
                <a href="#course3" className="block px-4 py-2 hover:bg-gray-100">Course 3</a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-4 font-bold sm:flex-row sm:space-x-10 sm:space-y-0 font-jakarta">
          <div className="flex items-center space-x-4">
            <button>Corporate Training</button>
            <button>Become an Instructor</button>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <button className="flex items-center gap-2">Login
              <span>
                <FaArrowRight className="" />
              </span>
            </button>
            <button className="h-12 border border-black rounded-lg w-36">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
