import React from "react";
import backgroundImage2 from "../../assets/testimonail-bg.png";

const Testimonial = () => {
  return (
    <div className="container">
      <div className="max-w-screen-lg mx-auto border border-red-500">
        <div className="flex flex-col items-center justify-center gap-2 mx-auto text-xl font-bold text-center font-jakarta">
          <h1 className="w-4/12">Client Testimonialss</h1>
          <p className="w-6/12 text-sm font-normal">
            Hear Heart-warming Stories from Our Valued Customers Sharing Their
            Experience and Success with Our Services
          </p>
        </div>
      </div>

      <div
        className="flex h-[400px] bg-cover "
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >

      


        
      </div>
    </div>
  );
};

export default Testimonial;
