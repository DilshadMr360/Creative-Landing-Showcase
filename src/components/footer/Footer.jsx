import React from "react";
import f01 from "../../assets/logo-01.png";
import facebook from "../../assets/facebook.png";
import instargram from "../../assets/Instagram.png";
import xlog from "../../assets/X.png";
import linkedin from "../../assets/linkedIn.png";
import youtube from "../../assets/youtube.png";
import backgroundImage2 from "../../assets/bg5.png";
import web from "../../assets/web.png";
import ucas from "../../assets/ucas.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import masterCard from "../../assets/mastercard.png";
import secureCard from "../../assets/secure_card.png";
import gpay from "../../assets/gpay.png";
import aPay from "../../assets/a_pay.png";

const Footer = () => {
  return (
    <div className="container ">
      <div
        className="flex h-auto bg-cover "
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="max-w-screen-lg mx-10 my-10 md:mx-auto font-jakarta ">
          {/* section  */}
          <div className="flex-row mt-10 md:flex ">
            <div className="space-y-5 md:w-4/12">
              <img
                src={f01}
                alt=""
                className="w-40 transition-transform duration-300 hover:scale-105"
              />
              <p>
                Learn Hub offers accessible, high-quality online education for
                all, with flexible programs tailored to fit into daily life,
                empowering learners worldwide to achieve personal and
                professional goals.
              </p>
<<<<<<< Updated upstream:creative-landing-showcase/src/components/footer/Footer.jsx
              <div className="flex">
                <img src={facebook} alt="" />
                <img src={instargram} alt="" />
                <img src={xlog} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
=======
              <div className="flex justify-between">
                <img
                  src={facebook}
                  alt=""
                  className="transition-transform duration-300 hover:scale-150"
                />
                <img
                  src={instargram}
                  alt=""
                  className="transition-transform duration-300 hover:scale-150"
                />
                <img
                  src={xlog}
                  alt=""
                  className="transition-transform duration-300 hover:scale-150"
                />
                <img
                  src={linkedin}
                  alt=""
                  className="transition-transform duration-300 hover:scale-150"
                />
                <img
                  src={youtube}
                  alt=""
                  className="transition-transform duration-300 hover:scale-150"
                />
>>>>>>> Stashed changes:src/components/footer/Footer.jsx
              </div>

              <button className="w-full px-4 py-2 font-bold text-white transition-colors duration-300 rounded-lg font-jakarta bg-lGreen hover:bg-green-600 ">
                Verify your Contacts
              </button>
            </div>

            <div className="grid grid-cols-2 gap-10 px-0 md:px-5 md:w-8/12 md:grid-cols-4">
              <div className="flex flex-col mt-10 space-y-4 transition-transform duration-300 md:mt-0 hover:scale-105 hover:text-orange-600">
                <h1 className="font-bold">Resources</h1>

                <div>
                  <h1>Free Courses</h1>
                  <h1>Practical Lab</h1>
                  <h1>Blogs</h1>
                  <h1>Pay with PayPal</h1>
                  <h1>Course extension fee</h1>
                  <h1>Retake exam fee</h1>
                </div>
              </div>

              <div className="flex flex-col mt-10 space-y-4 transition-transform duration-300 md:mt-0 hover:scale-105 hover:text-orange-600">
                <h1 className="font-bold">Quick Links</h1>

                <div>
                  <h1>Become an Instructor</h1>
                  <h1>Corporate Training</h1>
                  <h1>Our Partners</h1>
                  <h1>Accrediting bodies</h1>
                  <h1>Live online classes</h1>
                  <h1>Online courses</h1>
                  <h1>Classroom courses</h1>
                </div>
              </div>

              <div className="flex flex-col mt-10 space-y-4 transition-transform duration-300 md:mt-0 hover:scale-105 hover:text-orange-600">
                <h1 className="font-bold">Support</h1>

                <div>
                  <h1>FAQ</h1>
                  <h1>Our partners</h1>
                  <h1>Terms and conditions</h1>
                  <h1>Privacy policy</h1>
                  <h1>Contact us</h1>
                  <h1>Complaint form</h1>
                  <h1>Student ID card</h1>
                  <h1>Books</h1>
                </div>
              </div>

              <div className="flex flex-col mt-10 space-y-4 transition-transform duration-300 md:mt-0 hover:scale-105 hover:text-orange-600">
                <h1 className="font-bold">Contact Info</h1>

                <div>
                  <h1>+4420-3409-7966</h1>
                  <h1>CityPoint, 1 Ropemaker Street, London, EC2Y 9HU</h1>
                </div>
              </div>
            </div>
          </div>
          {/* section  */}
          <div className="mt-5 ">
            <h1>Choose your Prefer Language</h1>
          </div>
          <div className="w-full md:flex">
            <div className="flex mt-10md:w-4/12">
              <div className="flex flex-row items-center justify-between w-full md:mx-0">
                <button className="flex items-center w-auto px-3 py-2 text-black bg-white rounded-lg">
                  <img src={web} alt="English" className="w-5 h-5 mr-2" />
                  <select className="w-full text-black bg-white rounded-lg md:py-2 md:px-4">
                    <option value="english">English</option>
                    <option value="russian">Russian</option>
                    <option value="spanish">Spanish</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </button>
                <button className="h-10 text-white bg-black rounded-lg w-44">
                  Apply
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between w-full gap-5 mt-10 md:gap-2 md:justify-end md:w-8/12 md:mt-0">
              <img src={ucas} alt="" className="" />
              <div className="flex gap-2">
                <img src={brand1} alt="" className="w-14 h-14" />
                <img src={brand2} alt="" className="w-14 h-14" />
              </div>
            </div>
          </div>

          {/* section 2 */}

          {/* section 2  */}

          {/* section 3 */}

          <div className="w-full md:flex">
            <div className="my-5 md:w-6/12 ">
              <h1>Copyright © 2015 - 2024 -Learn Hub All rights reserved</h1>
            </div>
            <div className="flex items-center space-x-4 space-y-2 md:justify-end md:w-6/12 md:grid-cols-6 md:space-x-6 ">
              <img src={paypal} alt="" className="w-12 h-5 " />
              <img src={visa} alt="" className="w-12 h-5 " />
              <img src={masterCard} alt="" className="w-12 h-5 " />
              <img src={aPay} alt="" className="w-12 h-5 " />
              <img src={secureCard} alt="" className="w-12 h-5 " />
              <img src={gpay} alt="" className="w-12 h-5 " />
            </div>
          </div>
          {/* section 3  */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
