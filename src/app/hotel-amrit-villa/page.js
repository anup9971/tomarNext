export const metadata = {
  title: "Hotel AmritVilla | Tomar Hospitality | Luxury Hotel in Karol Bagh, New Delhi",
  description:
    "Stay at Hotel AmritVilla by Tomar Hospitality – premium rooms, 24/7 service, free Wi-Fi, and top location near Karol Bagh Metro. Ideal for business, leisure, and family stays in New Delhi.",
  keywords:
    "Hotel AmritVilla, Tomar Hospitality, hotel in Karol Bagh, luxury hotel New Delhi, business hotel, family hotel, Delhi accommodation, 24/7 service, free Wi-Fi",
  alternates: {
    canonical: "https://www.tomarhospitality.com/hotel-amrit-villa",
  },
  openGraph: {
    title: "Hotel AmritVilla | Tomar Hospitality",
    description:
      "Hotel AmritVilla in Karol Bagh offers luxury accommodations, modern amenities, and easy metro access — by Tomar Hospitality.",
    url: "https://www.tomarhospitality.com/hotel-amrit-villa",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/room/all-room/room7.webp",
        width: 1200,
        height: 630,
        alt: "Hotel AmritVilla Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel AmritVilla | Tomar Hospitality",
    description:
      "Welcome to Hotel AmritVilla – a luxury hotel by Tomar Hospitality in the heart of Karol Bagh, New Delhi. Stylish rooms, 24/7 service, free Wi-Fi and more.",
    images: [
      "https://www.tomarhospitality.com/img/room/all-room/room7.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};

import RoomsSection from '@/componets/home/RoomSection'
import AboutSec from '@/componets/hotels/AboutSec'
import HotelSlider from '@/componets/hotels/HotelSlider'
import RoomBookingForm from '@/componets/hotels/RoomBookingForm'
import React from 'react'


export default function page() {
  const images =[
    {src:"/img/banquet/banquet.jpg",},
    {src:"/img/Home/slider/classic-slider.jpg",},
    {src:"/img/room/all-room/room4.webp" ,},
  
  ]
  return (
    <>
    <HotelSlider images={images} autoPlay={true} autoPlayInterval={6000} height="60vh"/>
     <AboutSec about={"Hotel Amrit Villa"}/>
     <RoomsSection/>
     <RoomBookingForm about={"Hotel Amrit Villa"}/>
    </>
  )
}
