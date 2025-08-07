
'use client';

import Formvalidators from '@/Formvalidators';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const RoomBookingForm = ({about}) => {
  let router= useRouter()
    let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    hotel: "",
    guest: "",
    message:""
    
  })

  let [show, setShow] = useState(false)
  let [errorMessage, setErrorMessage] = useState({
    name: "Name Field Is Required",
    email: "Email Field Is Required",
    phone: "Phone Field Is Required",
    checkIn: "CheckIn Date Field  Is Required",
    checkOut: "CheckOut Date Field Is Required",
    hotel: "Select Hotel Field Is Required ",
    guest: "Number Of Attendess Field Is Required",
    
  })

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (name === "name" || name === "email" || name === "phone" || name === "checkIn" || name === "checkOut" || name === "hotel" || name === "guest") {
      setErrorMessage((x) => {
        return {
          ...x,
          [name]: Formvalidators(e)
        }
      })
    }
    setData((x) => {
      return {
        ...x,
        [name]: value
      }
    })

  };

const handleSubmit = async (e) => {
  e.preventDefault();

  let error = Object.values(errorMessage).find((x) => x.length > 0);

  if (error) {
    setShow(true);
    console.log(error);
  } else {
    try {
      let res = await fetch("https://tomarhotelbacked.onrender.com/api/bookroom", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ ...data })
      });

      res = await res.json();

      if (res.result === "Done") {
        toast.success("Hotel Query Has Been Submitted");
        console.log("Redirecting to home page...");
        router.push("/");
        router.refresh(); // Force route refresh
      } else {
        console.log("Record Not Found");
      }
    } catch (err) {
      console.error("Submit failed", err);
    }
  }
};

  return (
    <section className="px-4 py-10 text-gray-800 md:px-20 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Request For <span className="text-[#b97e43]">  {about} </span> Room Booking
      </h2>
      <p className="text-center mt-2 text-sm text-gray-600">
        Please leave us your requirements here and we will get back to you. You may also call us at <span className="text-[#b97e43]">+91-9899145516</span>
      </p>

      <div className="bg-white p-6 mt-8 shadow-md rounded-md max-w-6xl mx-auto">
        <h3 className="text-center text-2xl font-bold mb-6">Query Form</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Name */}
  <input
    type="text"
    name="name"
    placeholder="Enter Your Full Name....."
    className="border p-2 rounded w-full"
    onChange={handleChange}
    required
  />

  {/* Email */}
  <input
    type="email"
    name="email"
    placeholder="Enter Your Email Address....."
    className="border p-2 rounded w-full"
    onChange={handleChange}
    required
  />

  {/* Phone */}
  <input
    type="tel"
    name="phone"
    placeholder="Enter Your Phone ....."
    className="border p-2 rounded w-full"
    onChange={handleChange}
    required
  />

  {/* Check In */}
  <div className="flex flex-col w-full">
    <label htmlFor="checkIn" className="text-sm text-gray-600 mb-1">Check In*</label>
    <input
      type="date"
      id="checkIn"
      name="checkIn"
      className="border p-2 rounded w-full"
      onChange={handleChange}
      required
    />
  </div>

  {/* Check Out */}
  <div className="flex flex-col w-full">
    <label htmlFor="checkOut" className="text-sm text-gray-600 mb-1">Check Out*</label>
    <input
      type="date"
      id="checkOut"
      name="checkOut"
      className="border p-2 rounded w-full"
      onChange={handleChange}
      required
    />
  </div>

  {/* Hotel Select */}
  <div className="flex flex-col md:mt-6 w-full">

  <select
    name="hotel"
    className="border p-2 rounded w-full"
    onChange={handleChange}
    required
  >
    <option value="">Select Hotel</option>
    <option value="Hotel Marble ARL">Hotel Marble ARL</option>
    <option value="Hotel Siam International">Hotel Siam International</option>
    <option value="Tomar Residency">Tomar Residency</option>
  </select>
</div>
  {/* Attendees */}
  <input
    type="number"
    name="guest"
    placeholder="No. of Attendees...."
    className="border p-2 rounded w-full"
    onChange={handleChange}
    required
  />

  {/* Message */}
  <textarea
    name="message"
    placeholder="Write a Message ....."
    className="border p-2 rounded w-full md:col-span-3 resize-none h-32"
    onChange={handleChange}
    required
  ></textarea>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-[#b97e43] hover:bg-[#9c652d] text-white font-semibold py-2 px-4 rounded w-full md:col-span-3"
  >
    SUBMIT
  </button>
</form>

      </div>
    </section>
  );
};

export default RoomBookingForm;

