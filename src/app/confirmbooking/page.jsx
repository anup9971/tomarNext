'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



export default function ConfirmBooking() {
  const [booking, setBooking] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("bookingInfo");
    if (stored) {
      setBooking(JSON.parse(stored));
    }
  }, []);

  const handleNewBooking = () => {
    localStorage.removeItem("bookingInfo"); // Optional: Clear old booking info
    router.push("/rooms");
  };

  if (!booking) {
    return <p className="p-6 text-gray-500">Loading booking info...</p>;
  }

  return (
    
     <>
     
     <div className=' bg-white pt-15 pb-15'>
       <div className="p-6 max-w-2xl  bg-gray-200  mx-auto mt-10 mb-5 rounded-xl">
      <h1 className="text-xl text-center font-bold mb-4 text-green-700"> Booking Confirmed</h1>
      <p className='text-gray-600'><strong className='text-gray-800'>Booking ID:</strong> {booking.bookingID}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Room:</strong> {booking.roomtype}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Check-In:</strong> {booking.checkIn}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Check-Out:</strong> {booking.checkOut}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Days:</strong> {booking.day}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Rooms:</strong> {booking.room}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Base Price:</strong> ₹{booking.roomPrice} / night</p>
      <p className='text-gray-600'><strong className='text-gray-800'>GST (12%):</strong> ₹{booking.gstPrice}</p>
      <p className='text-gray-600'><strong className='text-gray-800'>Total Price:</strong> ₹{booking.totalPrice}</p>

      <p className="mt-4 text-sm text-gray-500">Thank you for booking with us!</p>

      {/* ✅ Book Another Room Button */}
      <button
        onClick={handleNewBooking}
        className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded shadow transition"
      >
        Book Another Room
      </button>
    </div>
 
     </div>
     </>
  );
}
