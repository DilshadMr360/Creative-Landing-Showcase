import React from 'react';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';



const Logos = () => {
  return (
    <div className='container'>
        <div className='max-w-screen-lg mx-auto h-[200px] '>
            <div className='flex flex-col items-center justify-center h-full space-y-6 text-center font-jakarta'>
              <div>
               <h1>We are Trusted by over 900+ companies  and millions of learners around the world </h1>
                
              </div>
               <div className='flex items-center justify-around w-full'>
                <img src={logo2} alt="" className='w-32 h-10' />
                <img src={logo3} alt="" className='w-32 h-10' />
                <img src={logo4} alt="" className='w-32 h-10' />
                <img src={logo5} alt="" className='w-32 h-10' />
                <img src={logo6} alt="" className='w-32 h-10' />
               </div>
            </div>
        </div>

    </div>
  )
}

export default Logos