import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { getStoredDocAppoint } from '../Utility/addtoDB';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';  

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Bookings = () => {
  const [bookingList, setBookingList] = useState([]);
  const data = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const storedDocData = getStoredDocAppoint();
    const myBookings = data.filter(doctor => storedDocData.includes(doctor.registrationNumber));
    setBookingList(myBookings);
  }, [data]);

  const handleCancel = (regNum) => {
    const storedDocData = getStoredDocAppoint();
    const updatedStoredData = storedDocData.filter(id => id !== regNum);
    localStorage.setItem('appoint', JSON.stringify(updatedStoredData));

    const updatedBookingList = bookingList.filter(doc => doc.registrationNumber !== regNum);
    setBookingList(updatedBookingList);

    toast.error('Appointment Cancelled Successfully!', { position: "top-right" });
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const chartData = bookingList.map(doc => ({
    name: doc.name,
    fee: Number(doc.consultationFee), 
  }));

  return (
    <div className='px-8 bg-gray-200 '>
      
      <div className='text-center py-6'>
        {bookingList.length === 0 ? (
          <>
            <h1 className='font-extrabold text-3xl mb-2'>You Have not booked any appointment yet</h1>
            <p className='text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <button 
              onClick={handleGoHome} 
              className="btn btn-active btn-primary text-xs lg:text-xl rounded-3xl mt-4"
            >
              Book Appointment
            </button>
          </>
        ) : (
          <>
            
            {bookingList.length > 0 && (
              <div className="flex justify-center my-10">
                <BarChart width={1600} height={400} data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="fee" fill="#3D90D7 " shape={<TriangleBar />} />
                </BarChart>
              </div>
            )}

            
            <h1 className='font-extrabold text-3xl mb-2'>My Today Appointments ({bookingList.length})</h1>
            <p className='text-gray-500'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
          </>
        )}
      </div>

      
      <div className="space-y-8 bg-gray-200 py-6">
        {bookingList.map(doc => (
          <div key={doc.registrationNumber} className="bg-white rounded-2xl shadow-md p-6 items-center">
            <div className='flex justify-between'>
              <div>
                <h2 className="text-xl font-bold text-black mb-1">Dr. {doc.name}</h2>
                <p className="text-gray-500">{doc.education}</p>
              </div>

              <div className='text-right'>
                <p className="text-gray-500 mb-3">Appointment Fee: <span className="text-blue-500">{doc.consultationFee} TK</span></p>
              </div>
            </div>
            <div className='text-center mt-4'>
              <button 
                onClick={() => handleCancel(doc.registrationNumber)}
                className="border border-red-400 text-red-500 font-bold px-6 py-2 rounded-3xl hover:bg-red-100"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Bookings;
