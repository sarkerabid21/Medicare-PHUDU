import React from 'react';
import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
// import About from '../pages/About/About';
import Bookings from '../pages/Bookings/Bookings';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
import Blogs from '../pages/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';
  
  

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            loader:()=> fetch('/doctorData.json'),
            path:"/",
            Component: Home
        },
        {
            path: '/bookings',
            loader:()=> fetch('/doctorData.json'),
            Component: Bookings
        },
        {
            path:'/blogs',
            loader:()=> fetch('/q&a.json'),
            Component: Blogs
        },
        {
            path:'/contact',
            Component: Contact
        },
        {
            path:'/doctorDetails/:regNum',
            loader:()=> fetch('/doctorData.json'),
            Component: DoctorDetails
        }
      ]
    },
  ]);