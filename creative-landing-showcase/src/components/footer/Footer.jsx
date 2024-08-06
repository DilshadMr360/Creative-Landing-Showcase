import React from "react";
import f01 from "../../assets/F01.png";
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
    <div className="container">
      <div
        className="flex h-auto bg-cover "
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="max-w-screen-lg mx-auto my-10 font-jakarta ">
          {/* section  */}
          <div className="flex-row mt-10 md:flex ">
            <div className="space-y-5 md:w-4/12 ">
              <img src={f01} alt="" />
              <p>
                Global Edulink offers accessible, high-quality online education
                for all, with flexible programs tailored to fit into daily life,
                empowering learners worldwide to achieve personal and
                professional goals.
              </p>
              <div className="flex">
                <img src={facebook} alt="" />
                <img src={instargram} alt="" />
                <img src={xlog} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
              </div>

              <button className="w-full px-4 py-2 font-bold text-white rounded-lg font-jakarta bg-lGreen ">
                Verify your Contacts
              </button>
            </div>

            <div className="grid grid-cols-2 mx-10 md:w-8/12 md:grid-cols-4">
              <div className="flex flex-col space-y-4">
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

              <div className="flex flex-col space-y-4">
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

              <div className="flex flex-col space-y-4">
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

              <div className="flex flex-col space-y-4">
                <h1 className="font-bold">Contact Info</h1>

                <div>
                  <h1>+4420-3409-7966</h1>
                  <h1>CityPoint, 1 Ropemaker Street, London, EC2Y 9HU</h1>
                </div>
              </div>
            </div>
          </div>
          {/* section  */}

          {/* section 2 */}

          <div className="flex justify-between mt-10 ">
            <div className="flex flex-col space-y-3 ">
              <h1>Choose your preferred language</h1>
              <div className="flex flex-row">
                 <button className="flex items-center w-40 h-8 text-black bg-white">
                 <img src={web} alt="Check" />
                  <h1>hello</h1>
                 </button>
                <button className="w-40 h-8 text-white bg-black rounded-lg" >Apply</button>
              </div>
            </div>

            <div className="flex items-center space-x-4 ">
              <img src={ucas} alt="" />
              <img src={brand1} alt="" className="w-14 h-14"  />
              <img src={brand2} alt="" className="w-14 h-14"  />
              <img src={brand3} alt="" className="w-14 h-14"  />
            </div>
            
          </div>
          {/* section 2  */}


              {/* section 3 */}

              <div className="flex justify-between mt-10">
            <div className="flex flex-col ">
              <h1>Copyright © 2015 - 2024 -Global Edulink All rights reserved</h1>
          
            </div>

            <div className="flex space-x-8 ">
              <img src={paypal} alt="" className="h-5 w-14" />
              <img src={visa} alt="" className="h-5 w-14" />
              <img src={masterCard} alt="" className="h-5 w-14" />
              <img src={secureCard} alt="" className="h-5 w-14" />
              <img src={aPay} alt="" className="h-5 w-14" />
              <img src={gpay} alt="" className="h-5 w-14" />
            </div>
            
          </div>
            {/* section 3  */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
