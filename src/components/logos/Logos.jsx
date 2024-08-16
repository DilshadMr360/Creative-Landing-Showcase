import React from "react";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";

const Logos = () => {
  return (
    <div className="container">
      <div className="h-auto max-w-screen-lg py-5 mx-auto my-10">
        <div className="flex flex-col items-center justify-center h-full space-y-10 text-center font-jakarta">
          <div className="mx-auto mt-3 text-lg font-jakarta md:w-full w-96 md:text-center text-start md:mx-0">
            <h1 className="transition-colors duration-300 ease-in-out hover:text-orange-500">
              We are Trusted by over 900+ companies and millions of learners
              around the world
            </h1>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 mx-auto md:grid-cols-5 md:gap-20">
            <img
              src={logo2}
              alt="Logo 2"
              className="h-4 mx-auto transition-transform duration-300 ease-in-out w-18 md:h-8 md:w-32 md:mx-0 hover:scale-110"
            />
            <img
              src={logo3}
              alt="Logo 3"
              className="h-4 mx-auto transition-transform duration-300 ease-in-out w-18 md:h-8 md:w-32 md:mx-0 hover:scale-110"
            />
            <img
              src={logo4}
              alt="Logo 4"
              className="h-4 mx-auto transition-transform duration-300 ease-in-out w-18 md:h-8 md:w-32 md:mx-0 hover:scale-110"
            />
            <img
              src={logo5}
              alt="Logo 5"
              className="h-4 mx-auto transition-transform duration-300 ease-in-out w-18 md:h-8 md:w-32 md:mx-0 hover:scale-110"
            />
            <img
              src={logo6}
              alt="Logo 6"
              className="h-4 mx-auto transition-transform duration-300 ease-in-out w-18 md:h-8 md:w-32 md:mx-0 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
