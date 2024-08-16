import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logo-01.png";
import { MdOutlineArrowDropDown, MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isYellowSectionVisible, setIsYellowSectionVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDesktopDropdown = () =>
    setDesktopDropdownOpen(!desktopDropdownOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);
  const hideYellowSection = () => setIsYellowSectionVisible(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="relative">
     {/* Yellow Background Section */}
{isYellowSectionVisible && (
  <div className="fixed top-0 left-0 z-50 w-full transition-opacity duration-500 ease-in-out bg-dYellow font-outfit">
    <div className="p-2 text-lg">
      <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto md:flex-row">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:w-11/12 md:space-y-0 md:space-x-4">
          <h1 className="font-bold text-center md:text-left text-dRed">
            Renew, Refresh{" "}
            <span className="font-bold text-black">24!</span>
          </h1>
          <div className="items-center hidden h-6 border border-gray-400 md:block"></div>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-20">
            <h1 className="text-center md:text-left">
              Save up to 40%! Hurry, offer ends June 15th.
            </h1>
            <div className="text-center md:text-left">
              <button className="flex items-center justify-center w-40 h-10 gap-2 mx-auto text-white transition-transform duration-300 transform bg-black rounded-lg md:mx-0 hover:scale-105">
                Claim Offer
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 md:w-1/12 md:mt-0">
          <button
            onClick={hideYellowSection}
            className="transition-opacity duration-300 hover:text-dRed"
          >
            X
          </button>
        </div>
      </div>
    </div>
  </div>
)}



      {/* Main Navbar */}
      <div
        className={`relative flex justify-between max-w-screen-lg mx-auto font-jakarta mt-2 ${
          isYellowSectionVisible ? "md:pt-[75px] pt-[230px]" : "pt-0"
        } transition-all duration-300`}
      >
        {/* Mobile Menu Toggle Icon */}
        <button
          onClick={toggleMobileMenu}
          className="block p-4 transition-transform duration-300 sm:hidden hover:scale-110"
        >
          {mobileMenuOpen ? (
            <MdClose className="w-6 h-6" />
          ) : (
            <MdMenu className="w-6 h-6" />
          )}
        </button>

        {/* Logo and Dropdown */}
        <div className="flex items-center w-4/12 space-x-8">
          <img src={logo} alt="Logo" className="w-32 transition-transform duration-300 transform hover:scale-105" />
          <div className="relative">
            <button
              onClick={toggleDesktopDropdown}
              className="hidden px-4 py-2 text-sm font-bold text-black transition-colors duration-300 rounded-md hover:bg-gray-200 md:block"
            >
              Explore Courses
              <MdOutlineArrowDropDown className="inline w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:rotate-180" />
            </button>
            {desktopDropdownOpen && (
              <div className="absolute right-0 z-50 w-48 mt-2 text-sm font-bold bg-white border border-gray-300 rounded-md shadow-lg">
                <a
                  href="#course1"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  Course 1
                </a>
                <a
                  href="#course2"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  Course 2
                </a>
                <a
                  href="#course3"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  Course 3
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items for Larger Screens */}
        <div className="flex-col hidden space-y-4 font-bold sm:flex sm:flex-row sm:space-x-10 sm:space-y-0 font-jakarta">
          <div className="flex items-center space-x-4">
            <button className="transition-colors duration-300 hover:text-dRed">Corporate Training</button>
            <button className="transition-colors duration-300 hover:text-dRed">Become an Instructor</button>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <button className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              Login
              <span>
                <FaArrowRight className="" />
              </span>
            </button>
            <button className="h-12 transition-transform duration-300 border border-black rounded-lg w-36 hover:scale-105">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {mobileMenuOpen && (
        <div className="inset-0 top-0 z-40 transition-transform duration-300 transform translate-y-0 bg-white border-t border-gray-300 sm:hidden font-jakarta">
          <div className="flex flex-col p-4 space-y-4 font-bold">
            <button className="w-full text-left transition-colors duration-300 hover:text-dRed">Corporate Training</button>
            <button className="w-full text-left transition-colors duration-300 hover:text-dRed">Become an Instructor</button>
            <button className="flex items-center justify-between w-full text-left transition-colors duration-300 hover:text-dRed">
              Login
              <FaArrowRight className="" />
            </button>
            <button className="w-full h-12 transition-transform duration-300 border border-black rounded-lg hover:scale-105">
              Register
            </button>
            <button
              onClick={toggleMobileDropdown}
              className="flex items-center justify-between w-full text-left transition-colors duration-300 hover:text-dRed"
            >
              Explore Courses
              <MdOutlineArrowDropDown className="w-4 h-4 transition-transform duration-300 transform group-hover:rotate-180" />
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2 text-sm font-bold">
                <a
                  href="#course1"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  Course 1
                </a>
                <a
                  href="#course2"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  Course 2
                </a>
                <a
                  href="#course3"
                  className="block px-4 py-2 transition-colors duration-300 hover:bg-gray-100"
                >
                  Course 3
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
