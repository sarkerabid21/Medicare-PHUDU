import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-200 pb-8'>
            <div className='bg-gradient-to-b from-gray-200  to-white border-4 mx-12  border-amber-50   rounded-4xl py-8'>
            <div><h1 className='lg:text-4xl font-extrabold text-center lg:w-3xl mx-auto'>Dependable Care, Backed by Trusted Professionals.</h1>
            <p className='text-center mx-auto lg:w-4xl'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
    <div className="lg:flex items-center justify-center  mt-6 hidden ">
  
   
      <input
        type="text"
        placeholder="Search any doctor..."
        className="mr-4  w-2xl px-4 py-2  rounded-full focus:outline-none border border-gray-300"
      />
   
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-full">
        Search Now
      </button>
   
  
</div>
<div className='lg:flex lg:justify-center gap-6 my-8'>
    <img className='w-56 lg:w-xl rounded-xl mx-auto lg:mx-0 mb-4' src="https://i.ibb.co.com/Dg5PCt0X/banner-img-1.png" alt="" />
    <img className='lg:w-xl lg:h-88 w-56 mx-auto lg:mx-0 rounded-xl' src="https://i.ibb.co.com/20CpPRmN/team.jpg" alt="" />
</div>

            </div>


        </div>

    );
};

export default Banner;