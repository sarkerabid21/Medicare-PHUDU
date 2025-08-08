import React from 'react';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div className='text-center'>
        <img className='mx-auto my-10' src="https://i.ibb.co.com/dspm5QSn/404.png" alt=""/>
        <h1 className='text-red-700 text-3xl font-extrabold my-5'>404 - Page Not Found</h1>
        <h2>Oops! The page doesnot exist.</h2>
        <Link to='/'><button className="btn btn-active btn-primary text-xs lg:text-xl rounded-3xl mt-4">
            Go back Home
          </button></Link>
        
        
    </div>
  );
};

export default Contact;
