import React from "react";
import backgroundImage2 from "../../assets/bg-2.png";
import productImage1 from "../../assets/PM1.png";
import productImage2 from "../../assets/PM2.png";
import productImage3 from "../../assets/PM3.png";
import productImage4 from "../../assets/PM4.png";
import clock from "../../assets/clock.png";
import check from "../../assets/check.png";
import { FaArrowRight } from "react-icons/fa";

const Prodcuts = () => {
  return (
    <div className="container">
      <div
        className="flex h-auto bg-cover"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        {/* carasoule  */}
        <div className="max-w-screen-lg p-6 mx-auto mt-40 border border-red-500 ">
          <div className="flex justify-center">carasoul 1</div>

          {/*grid imagess section */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
            {/*grid images1 */}

            <div className="px-4 py-2 space-y-5 bg-white rounded-lg font-jakarta">
              <img src={productImage1} alt="" />
              <h1 className="font-bold">
                PRINCE2® 7 Practitioner: Interactive & Gamified Learning
              </h1>
              <div className="flex flex-row gap-3 text-sm rounded-md">
                <div className="flex h-5 rounded-lg w-28 bg-lBlue ">
                  <img src={clock} alt="" />
                  <h1>22 Modules</h1>
                </div>
                <div className="flex w-48 h-5 rounded-lg bg-lBlue ">
                  <img src={check} alt="" />
                  <h1>Professional Certificate</h1>
                </div>
              </div>
              <div className="text-sm font-jakarta">
                <h1>
                  The PRINCE2® 7 Practitioner Interactive & Gamified Learning is
                  designed for aspiring and current proje...
                </h1>
              </div>
              <h1>
                From <span className="text-xl font-bold">£199.99</span> /month
              </h1>
              <div className="flex flex-row items-center justify-between w-full space-x-4 text-sm font-jakarta">
                <h1 className="flex items-center space-x-2 font-bold font-jakarta">
                  <span>£1099</span>
                  <span className="font-normal">1455</span>
                  <span>in full</span>
                </h1>

                <button className="flex items-center space-x-2 font-bold font-jakarta">
                  <span>View Details</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/*grid images */}
            {/*grid images1 */}

            <div className="px-4 py-2 space-y-5 bg-white rounded-lg font-jakarta">
              <img src={productImage2} alt="" />
              <h1 className="font-bold">
                PRINCE2® 7 Practitioner: Interactive & Gamified Learning
              </h1>
              <div className="flex flex-row gap-3 text-sm rounded-md">
                <div className="flex h-5 rounded-lg w-28 bg-lBlue ">
                  <img src={clock} alt="" />
                  <h1>22 Modules</h1>
                </div>
                <div className="flex w-48 h-5 rounded-lg bg-lBlue ">
                  <img src={check} alt="" />
                  <h1>Professional Certificate</h1>
                </div>
              </div>
              <div className="text-sm font-jakarta">
                <h1>
                  The PRINCE2® 7 Practitioner Interactive & Gamified Learning is
                  designed for aspiring and current proje...
                </h1>
              </div>
              <h1>
                From <span className="text-xl font-bold">£199.99</span> /month
              </h1>
              <div className="flex flex-row items-center justify-between w-full space-x-4 text-sm font-jakarta">
                <h1 className="flex items-center space-x-2 font-bold font-jakarta">
                  <span>£1099</span>
                  <span className="font-normal">1455</span>
                  <span>in full</span>
                </h1>

                <button className="flex items-center space-x-2 font-bold font-jakarta">
                  <span>View Details</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/*grid images */}

            {/*grid images1 */}

            <div className="px-4 py-2 space-y-5 bg-white rounded-lg font-jakarta">
              <img src={productImage3} alt="" />
              <h1 className="font-bold">
                PRINCE2® 7 Practitioner: Interactive & Gamified Learning
              </h1>
              <div className="flex flex-row gap-3 text-sm rounded-md">
                <div className="flex h-5 rounded-lg w-28 bg-lBlue ">
                  <img src={clock} alt="" />
                  <h1>22 Modules</h1>
                </div>
                <div className="flex w-48 h-5 rounded-lg bg-lBlue ">
                  <img src={check} alt="" />
                  <h1>Professional Certificate</h1>
                </div>
              </div>
              <div className="text-sm font-jakarta">
                <h1>
                  The PRINCE2® 7 Practitioner Interactive & Gamified Learning is
                  designed for aspiring and current proje...
                </h1>
              </div>
              <h1>
                From <span className="text-xl font-bold">£199.99</span> /month
              </h1>
              <div className="flex flex-row items-center justify-between w-full space-x-4 text-sm font-jakarta">
                <h1 className="flex items-center space-x-2 font-bold font-jakarta">
                  <span>£1099</span>
                  <span className="font-normal">1455</span>
                  <span>in full</span>
                </h1>

                <button className="flex items-center space-x-2 font-bold font-jakarta">
                  <span>View Details</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>

            {/*grid images */}
          </div>


          {/* show more section  */}
          <div className="flex items-center justify-center gap-5 mt-10">
          <button className="flex items-center justify-center w-40 h-10 gap-2 text-center text-white bg-black rounded-lg">
                      Show More
                      <span>
                        <FaArrowRight  />
                      </span>
                    </button>
            <button className="w-24 h-12 border border-black rounded-lg">View All</button>

          </div>
          {/* show more section  */}

           

       
        </div>
      </div>
    </div>
  );
};

export default Prodcuts;
