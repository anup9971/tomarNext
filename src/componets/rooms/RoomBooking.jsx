"use client"
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation'; // ✅ useRouter added
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import data from '@/roomData';
import Formvalidators from '@/Formvalidators';

export default function RoomBooking( ) {
  const { id } = useParams();

  const router = useRouter();
  
  const room = data?.find((x) => String(x._id) == String(id));
  console.log(room);

  const [roomData, setRoomData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adult: "",
    child: "",
    room: ""
  });

  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    name: "Name Field Is Required",
    phone: "Phone Field Is Required ",
    email: "Email Field Is Required",
    adult: "Adult Field Is Required",
    child: "Child Field Is Required",
    room: "No. Of Room Field Is Required",
    checkIn: "CheckIn Date Is Required",
    checkOut: "CheckOut Date Is Required"
  });

  const generateAlphaNumericId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = 'TOMAR';
    for (let i = 0; i < 6; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };
  const bookingID = generateAlphaNumericId();

  const getInput = (e) => {
    const { name, value } = e.target;
    setRoomData((prev) => {
      const updated = { ...prev, [name]: value };

      // validate field
      setErrorMessage((err) => ({
        ...err,
        [name]: Formvalidators(e, updated),
      }));

      return updated;
    });
  };

  const postData = async (e) => {
    e.preventDefault();

    // Final validation before submission
    let error = Object.values(errorMessage).find((x) => x !== "");
    if (error) {
      setShow(true);
      return;
    }

    if (!roomData.checkIn || !roomData.checkOut) {
      alert("Check-in and Check-out dates are required.");
      return;
    }

    const checkInDate = new Date(roomData.checkIn);
    const checkOutDate = new Date(roomData.checkOut);

    if (checkOutDate <= checkInDate) {
      alert("Checkout date must be after Checkin date.");
      return;
    }

    const day = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const roomPrice = room?.price || 3000;
    const rooms = Number(roomData.room) || 1;
    const basePrice = roomPrice * day * rooms;
    const gstPrice = Math.floor((basePrice * 12) / 100);
    const totalPrice = basePrice + gstPrice;

    const finaldata = {
      ...roomData,
      bookingID,
      day,
      roomPrice,
      totalPrice,
      gstPrice,
      roomtype: room?.name,
    };
  console.log(finaldata);
  
    try {
      const res = await fetch("https://tomarhotelbacked.onrender.com/api/roomquery", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(finaldata),
      });
      
      
      const finalresponse = await res.json();
      console.log(finalresponse);
      
      localStorage.setItem("bookingInfo", JSON.stringify(finaldata));
      router.push("/confirmbooking");
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Something went wrong while booking.");
    }
  };

  return (
    <div className="flex flex-col bg-white lg:flex-row gap-8 p-6 max-w-7xl mx-auto">
      {/* Left: Image & Info */}
      <div className="lg:w-1/2">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          className="rounded-xl overflow-hidden"
        >
          {room?.img?.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Room ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4">
          <h2 className="text-xl text-gray-800 font-semibold mb-2">About the property</h2>
          <p className="text-gray-700 text-sm mb-2">{room?.about}</p>
          <p className="text-sm text-gray-700">
            <strong>Comfortable Accommodation:</strong> Rooms feature air-conditioning, private bathrooms, bathrobes, and city views. Additional amenities include free WiFi, flat-screen TVs, and work desks.
          </p>
          <div className="mt-4">
            <h3 className="font-semibold text-gray-800 text-sm">Most popular facilities</h3>
            <ul className="flex flex-wrap gap-4 text-gray-600 text-sm mt-2">
              <li>✅ Wifi</li>
              <li>✅ Free parking</li>
              <li>✅ Air Conditioning</li>
              <li>✅ Breakfast</li>
              <li>✅ Wheel chair</li>
              <li>✅ Front desk</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right: Booking Form */}
      <div className="lg:w-1/2 bg-gray-100 md:h-[500px] text-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Book A <span className="text-orange-500">{room?.name}</span></h2>
        <p className="text-sm mb-2">Deluxe Room with Complimentary Wi-fi <br /> <span className="text-green-600 font-semibold">₹ {room?.price || 1900}/night + GST</span></p>
        <p className="text-sm text-red-500 mb-4">❤️ Couple Friendly</p>

        <form onSubmit={postData} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" type="text" placeholder="Your Name*" value={roomData.name} onChange={getInput} className="p-2 border rounded w-full" required />
            <input name="phone" type="tel" placeholder="Your Phone*" value={roomData.phone} onChange={getInput} className="p-2 border rounded w-full" required />
          </div>
          <input name="email" type="email" placeholder="Your Email*" value={roomData.email} onChange={getInput} className="p-2 border rounded w-full" required />

         <div className="grid mt-5 grid-cols-1 md:grid-cols-2 gap-4">
  {/* Check-In Date */}
  <label className="flex flex-col text-sm font-medium text-gray-700">
    Check-In Date
    <input
      name="checkIn"
      type="date"
      value={roomData.checkIn}
      min={new Date().toISOString().split('T')[0]}
      onChange={getInput}
      className="mt-1 p-2 border rounded w-full"
      required
    />
  </label>

  {/* Check-Out Date */}
  <label className="flex flex-col text-sm font-medium text-gray-700">
    Check-Out Date
    <input
      name="checkOut"
      type="date"
      value={roomData.checkOut}
      min={roomData.checkIn || new Date().toISOString().split('T')[0]}
      onChange={getInput}
      className="mt-1 p-2 border rounded w-full"
      required
    />
  </label>
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select name="adult" value={roomData.adult} onChange={getInput} className="p-2 border rounded w-full">
              <option value="">Select Adult</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
            <select name="child" value={roomData.child} onChange={getInput} className="p-2 border rounded w-full">
              <option value="">Select Child</option>
              
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
            <select name="room" value={roomData.room} onChange={getInput} className="p-2 border rounded w-full" required>
              <option value="">Select A Room</option>
              {[...Array(8)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} Room</option>
              ))}
            </select>
          </div>

          <button type="submit" className="bg-orange-500 text-white w-full py-2 rounded hover:bg-orange-600 transition">
            RESERVE
          </button>
        </form>
      </div>
    </div>
  );
}
