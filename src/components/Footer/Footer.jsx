import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  const links = (
    <>
       <Link to='/'><li className='m-2'>Home</li></Link>
   <Link to='/bookings'> <li className='m-2 '>My-Bookings</li></Link>
       <Link to='/blogs'><li className='m-2'>Blogs</li></Link>
      <Link to='/contact'><li className='m-2'>Contact Us</li></Link>
    </>
  );

  return (
    <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
      <div className="flex items-center">
        <img className="lg:w-[50%] w-[16%]" src="/public/assets/logo.png" alt="" />
        <a className="ml-2 font-bold text-xl">Phudu</a>
      </div>

      <nav className="border-b border-dashed grid grid-flow-col gap-4 menu">{links}</nav>

      <nav>
        <div className="grid grid-flow-col gap-6 text-2xl">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#1877F2' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0077B5' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.379-.028-3.156-1.922-3.156-1.926 0-2.222 1.504-2.222 3.056v5.6h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.84-1.562 3.036 0 3.598 2 3.598 4.598v5.597z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FF0000' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
