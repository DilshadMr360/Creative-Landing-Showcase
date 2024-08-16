import React from "react";
import ch1 from "../../assets/ch1.png";
import ch2 from "../../assets/ch2.png";
import ch3 from "../../assets/ch3.png";
import ch4 from "../../assets/ch4.png";
import logo from "../../assets/logo-01.png";

const Choose = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto mt-10 ">
        <div className="flex items-center justify-center mx-5 mb-10 space-y-10 text-xl font-bold text-center md:text-2xl md:mx-0 md:w-8/12 font-jakarta">
        <h1 className="transition-colors duration-300 ease-in-out hover:text-orange-500">

        Choose us for tailored transformation journeys that solve workforce
          challenges and deliver results.
        </h1>
   
        </div>

        <div className="grid grid-cols-1 mx-5 md:grid-cols-4 gap-x-2 md:mx-0 ">

          
  {/* box 1 */}
  <div className="shadow-[#e7e4e4] shadow-lg font-jakarta rounded-xl space-y-5 py-5 my-5 pl-2 w-full  transition-transform duration-300 ease-in-out hover:scale-105">
     <div className="flex gap-2 md:flex-col">
         <img src={ch1} alt="Experience Icon" className="w-16" />
    <h1 className="text-2xl font-bold font-jakarta">10+ Years of Experience</h1>
     </div>
 
    <h1 className="text-sm">Industry expert tutors with real-world experience in your chosen field</h1>
    <img src={logo} className="w-24" alt="Logo" />
  </div>
  {/* box 1 */}


 {/* box 1 */}
 <div className="shadow-[#e7e4e4] shadow-lg font-jakarta rounded-xl space-y-5 py-5 my-5 pl-2 w-full  transition-transform duration-300 ease-in-out hover:scale-105">
 <div className="flex gap-2 md:flex-col">
         <img src={ch2} alt="Experience Icon" className="w-16" />
    <h1 className="text-2xl font-bold font-jakarta">10+ Years of Experience</h1>
     </div>
   
    <h1 className="text-sm">Industry expert tutors with real-world experience in your chosen field</h1>
    <img src={logo} className="w-24" alt="Logo" />
  </div>
  {/* box 1 */}


   {/* box 1 */}
   <div className="shadow-[#e7e4e4] shadow-lg font-jakarta rounded-xl space-y-5 py-5 my-5 pl-2 w-full  transition-transform duration-300 ease-in-out hover:scale-105">
   <div className="flex gap-2 md:flex-col">
         <img src={ch3} alt="Experience Icon" className="w-14" />
    <h1 className="text-2xl font-bold font-jakarta">10+ Years of Experience</h1>
     </div>
    <h1 className="text-sm">Industry expert tutors with real-world experience in your chosen field</h1>
    <img src={logo} className="w-24" alt="Logo" />
  </div>
  {/* box 1 */}


   {/* box 1 */}
   <div className="shadow-[#e7e4e4] shadow-lg font-jakarta rounded-xl space-y-5 py-5 my-5 pl-2 w-full  transition-transform duration-300 ease-in-out hover:scale-105">
   <div className="flex gap-2 md:flex-col">
         <img src={ch4} alt="Experience Icon" className="w-14" />
    <h1 className="text-2xl font-bold font-jakarta">10+ Years of Experience</h1>
     </div>
    <h1 className="text-sm">Industry expert tutors with real-world experience in your chosen field</h1>
    <img src={logo} className="w-24" alt="Logo" />
  </div>
  {/* box 1 */}
  
</div>

      </div>
    </div>
  );
};

export default Choose;
