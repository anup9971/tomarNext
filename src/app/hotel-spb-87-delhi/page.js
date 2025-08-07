export const metadata = {
  title: "Hotel SPB-87 Delhi | Tomar Hospitality | Luxury Hotel in Karol Bagh, New Delhi",
  description:
    "Stay at Hotel SPB-87 Delhi by Tomar Hospitality – premium rooms, 24/7 service, free Wi-Fi, and top location near Karol Bagh Metro. Ideal for business, leisure, and family stays in New Delhi.",
  keywords:
    "Hotel SPB-87 Delhi, Tomar Hospitality, hotel in Karol Bagh, luxury hotel New Delhi, business hotel, family hotel, Delhi accommodation, 24/7 service, free Wi-Fi",
  alternates: {
    canonical: "https://www.tomarhospitality.com/hotel-spb-87-delhi",
  },
  openGraph: {
    title: "Hotel SPB-87 Delhi | Tomar Hospitality",
    description:
      "Hotel SPB-87 Delhi in Karol Bagh offers luxury accommodations, modern amenities, and easy metro access — by Tomar Hospitality.",
    url: "https://www.tomarhospitality.com/hotel-spb-87-delhi",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/room/all-room/room7.webp",
        width: 1200,
        height: 630,
        alt: "Hotel SPB-87 Delhi Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel SPB-87 Delhi | Tomar Hospitality",
    description:
      "Welcome to Hotel SPB-87 Delhi – a luxury hotel by Tomar Hospitality in the heart of Karol Bagh, New Delhi. Stylish rooms, 24/7 service, free Wi-Fi and more.",
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
    {src:"/img/room/marbel/1.jpg",},
    {src:"/img/room/marbel/3.jpg",},
    {src:"/img/room/marbel/2.jpg" ,},
  
  ]
  return (
    <>
    <HotelSlider images={images} autoPlay={true} autoPlayInterval={6000} height="60vh"/>
     <AboutSec about={"Hotel SPB-87 Delhi"}/>
     <RoomsSection/>
     <RoomBookingForm about={"Hotel SPB-87 Delhi"}/>
    </>
  )
}
