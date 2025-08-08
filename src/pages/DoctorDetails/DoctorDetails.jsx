import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addToStoreDB } from '../Utility/addtoDB';


const DoctorDetails = () => {
    const { regNum } = useParams();
    const data = useLoaderData();
    const singleDoctor = data.find(doctor => doctor.registrationNumber === regNum);
    const navigate = useNavigate(); 

    const { profile, image, name, education, hospital, registrationNumber, availability, consultationFee } = singleDoctor;

    const today = new Date();
    const options = { weekday: 'long' };
    const todayName = today.toLocaleDateString('en-US', options);
    const isAvailableToday = availability.includes(todayName);

    const handleAppointment = (id, name) => {
        addToStoreDB(id, name);
        navigate('/bookings');
    }

    return (
        <div className='bg-gray-200 py-8 '>
            <div className='text-center py-8 bg-white mx-24 rounded-2xl mb-6'>
                <h1 className='font-extrabold lg:text-2xl'>Doctor’s Profile Details</h1>
                <p className='text-xs lg:text-xl'>{profile}</p>
            </div>

            <div className='lg:flex bg-white mx-24 rounded-2xl mb-6 p-12 gap-6'>
                <img className='w-86 rounded-2xl' src={image} alt="" />
                <div>
                    <h1 className='lg:text-4xl font-bold'>{name}</h1>
                    <p className='text-gray-400 mb-2 lg:text-2xl'>{education}</p>
                    <h1 className='text-gray-400 text-xl'>Working at</h1>
                    <h1 className='text-gray-400 text-xl'> <span className='text-black font-semibold'>{hospital}</span></h1>
                    <h1 className='text-gray-400 my-6 border-y-2 lg:text-xl border-dashed py-3 border-y-gray-300 lg:w-146'>{registrationNumber}</h1>
                    
                    <h2 className='lg:text-xl font-bold my-3'>Availability <span className='font-medium'>
                        {
                            availability.map((available, index) => (
                                <button key={index} className='my-2 mx-3 py-2 px-3 rounded-2xl bg-orange-100 text-orange-400'>{available}</button>
                            ))
                        }
                    </span></h2>

                    <h2 className='lg:text-xl font-bold my-3'>Consultation Fee: <span className='text-blue-500'>{consultationFee} TK</span><span className='font-normal text-gray-400'>  (incl. Vat)</span> <span className='text-blue-500 font-normal'>Per consultation</span></h2>
                </div>
            </div>

            <div className=' bg-white mx-24 rounded-2xl mb-6 p-12 gap-6 '>
                <h1 className='font-extrabold lg:text-2xl text-center'>Book an Appointment</h1>
                <div className='py-6 border-y-2 border-gray-300 border-dashed w-full my-4 lg:flex lg:justify-between text-center space-y-2'>
                    <h1 className='text-xl'>Availability</h1>
                    {isAvailableToday ? (
                        <button className='mx-3 py-2 px-3 rounded-2xl bg-green-100 text-green-500'>Doctor Available Today</button>
                    ) : (
                        <button className='mx-3 py-2 px-3 rounded-2xl bg-red-100 text-red-500'>Doctor Not Available Today</button>
                    )}
                </div>

                <button onClick={()=>handleAppointment(regNum,name)} className="btn btn-active btn-primary lg:w-full text-xs lg:text-xl rounded-3xl mt-4">Book Appointment Now</button>
            </div>
        </div>
    );
};

export default DoctorDetails;
