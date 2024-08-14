import React from 'react';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';



const Logos = () => {
  return (
    <div className='container'>
        <div className='max-w-screen-lg mx-auto h-auto  my-10 py-5 '>
            <div className='flex flex-col items-center justify-center h-full space-y-6 text-center font-jakarta '>
              <div className='mt-3  text-lg font-jakarta md:w-full w-96 md:text-center text-start md:mx-0 mx-auto'>
               <h1>We are Trusted by over 900+ companies  and millions of learners around the world </h1>
                
              </div>
               <div className='grid md:grid-cols-5 grid-cols-2 md:gap-20 gap-4 w-full mx-auto  '>
                <img src={logo2} alt="" className='w-32 h-8 md:mx-0 mx-auto' />
                <img src={logo3} alt="" className='w-32 h-8 md:mx-0 mx-auto' />
                <img src={logo4} alt="" className='w-32 h-8 md:mx-0 mx-auto' />
                <img src={logo5} alt="" className='w-32 h-8 md:mx-0 mx-auto' />
                <img src={logo6} alt="" className='w-32 h-8 md:mx-0 mx-auto' />
               </div>
            </div>
        </div>

    </div>
  )
}

export default Logos