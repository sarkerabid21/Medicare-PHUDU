import React, { Suspense, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import CountUp from 'react-countup';

const Doctors = ({ data }) => {
    const [visibleDoctors, setVisibleDoctors] = useState(6);

    const handleShowAllDoctors = () => {
        setVisibleDoctors(data.length); 
    };

    const visibleDoctorData = data.slice(0, visibleDoctors);
    const shouldShowButton = data.length > 6 && 
    visibleDoctors === 6;

    return (
        <div className='bg-gray-200 lg:p-20 '>
            <h1 className='text-3xl font-extrabold  text-center '>Our Best Doctors</h1>
            <p className='text-center lg:w-4xl lg:mx-auto text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <Suspense fallback={<span>loading...</span>}>
                <div className=' mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 '>
                    {
                        visibleDoctorData.map((singleDoctor) => (
                            <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>
                        ))
                    }
                </div>
            </Suspense>
            {shouldShowButton && (
                <div className='flex justify-center mt-8'>
                    <button onClick={handleShowAllDoctors} className="bg-blue-600 text-white rounded-full hover:bg-blue-700 px-3 py-2">View all Doctors

                    </button>
                </div>
            )}
             <div className='mt-8'>
<div className='text-center'>
<h2 className='text-3xl font-extrabold'>We Provide Best Medical Services</h2>
            <p className='text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>

            <div className='flex lg:justify-center gap-8 mt-6 pb-8 space-y-6  lg:flex-row flex-col justify-center items-center'>
                <div className='bg-white rounded-4xl lg:p-11 p-6 text-center flex flex-col space-y-3 w-66 '>
                    <span><img src="/public/assets/success-doctor.png" alt=""/></span>
                <span className='text-5xl font-extrabold'><CountUp end={199} duration={30} />+</span>
                <span className='text-gray-400'>Total Doctors</span>
                </div> 
                
                <div className='bg-white rounded-4xl p-11 text-center flex flex-col space-y-3 w-66 '>
                    <span><img src="/public/assets/success-review.png" alt=""/></span>
                <span className='text-5xl font-extrabold'><CountUp end={467} duration={30} />+</span>
                <span className='text-gray-400'>Total Reviews</span>
                </div>
                <div className='bg-white rounded-4xl flex flex-col space-y-3 p-11 text-center w-66'>
                    <span><img src="/public/assets/success-patients.png" alt=""/></span>
                <span className='text-5xl font-extrabold'><CountUp end={1900} duration={15} />+</span>
                <span className='text-gray-400'>Patients</span>
                </div>
                <div className='bg-white rounded-4xl p-11 text-center flex flex-col space-y-3 w-66'>
                    <span><img src="/public/assets/success-staffs.png" alt=""/></span>
                <span className='text-5xl font-extrabold'><CountUp end={300} duration={30} />+</span>
                <span className='text-gray-400'>Stuffs</span>
                </div>
            </div>

</div>
        </div>

       
    );
};

export default Doctors;