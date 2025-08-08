import React from 'react';
import { useLoaderData } from 'react-router';
import { FaRegCalendarCheck } from "react-icons/fa";
const Blogs = () => {

    const questionData =useLoaderData();
    console.log(questionData)
   
    return (
        <div className='bg-gray-200 py-8'>
          <div className='text-center mb-6'>
          <h1 className='text-3xl font-extrabold'>Blogs</h1>
          <p className='text-gray-500'>Let's explose some basic concepts.</p>
          </div> 
          <div className='space-y-4 max-w-3xl mx-auto'>
        {
          questionData.map((item, index) => (
            <div key={index} className='bg-white p-6  rounded shadow'>
              <h2 className='pb-2 border-b-2 border-dashed border-gray-400 text-xl font-bold'>{item.question}</h2>
              <div className='text-gray-700 border-b-2 py-4  border-dashed border-gray-400 '>
                <span className='text-blue-700 font-medium'>Answer: </span><p>{item.answer}</p></div>
                <div className='text-gray-700 flex gap-2 items-center my-2'>
                <FaRegCalendarCheck />
                    Added at {item.addedAt}
                </div>
            </div>
          ))
        }
      </div>
        </div>
    );
};

export default Blogs;