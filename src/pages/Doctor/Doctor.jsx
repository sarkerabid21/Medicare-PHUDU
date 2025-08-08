import React from 'react';
import { Link } from 'react-router';

const Doctor = ({singleDoctor}) => {
    // console.log(singleDoctor)
    const {image,experience,name, education,registrationNumber } = singleDoctor;
    return (
        <div className="card bg-base-100 lg:w-96  shadow-sm mb-16">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl h-64" />

      
  </figure>
  <div className='flex my-4 ml-8 gap-4'>
  <h1 className='text-green-700 bg-gray-200 p-1 text-center rounded-xl w-22'>Available</h1>
  <h1 className='text-blue-700 bg-gray-200 p-1 text-center rounded-xl w-46'>{experience}</h1>
  </div>
  <div className="card-body  ml-4">
    <h2 className="font-bold text-xl ">{name}</h2>
    <p className='text-gray-500 mb-4 '>{education}</p>
    <p className='text-gray-500'>{registrationNumber}</p>
    <div className="mb-4 card-actions mx-auto mt-4">
<Link to={`/doctorDetails/${registrationNumber}`}>    <button className=" btn btn-outline  rounded-2xl w-xs text-blue-600">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Doctor;