export const metadata = {
  title: "Rooms at Tomar Hospitality | Luxury Hotel Rooms in Karol Bagh, New Delhi",
  description:
    "Discover our thoughtfully designed hotel rooms at Tomar Hospitality in Karol Bagh, New Delhi. Perfect for business, leisure, or family stays. Just minutes from the metro.",
  keywords:
    "Tomar Hospitality Rooms, hotel rooms Karol Bagh, luxury stay Delhi, business hotel Delhi, family hotel Karol Bagh, rooms near Karol Bagh Metro",
  alternates: {
    canonical: "https://www.tomarhospitality.com/room",
  },
  openGraph: {
    title: "Rooms at Tomar Hospitality | Luxury Stay in Delhi",
    description:
      "Explore comfortable and stylish rooms at Tomar Hospitality – located in Karol Bagh, New Delhi near metro and top attractions.",
    url: "https://www.tomarhospitality.com/room",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/room/all-room/room4.webp",
        width: 1200,
        height: 630,
        alt: "Tomar Hospitality Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms at Tomar Hospitality | Luxury Stay in Delhi",
    description:
      "Relax in peaceful and spacious rooms at Tomar Hospitality, located in the heart of Karol Bagh, New Delhi.",
    images: [
      "https://www.tomarhospitality.com/img/room/all-room/room4.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};

import Reviews from '@/componets/home/Reviews'
import RoomsSection from '@/componets/home/RoomSection'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <> <div className="w-full h-36 sm:h-44 md:h-56 lg:h-64 relative overflow-hidden">
            <Image
              src="/img/Home/slider/classic-slider.jpg"
              alt="About top"
              fill
              className="object-cover object-center"
            />
          </div>
        <RoomsSection/>
        <Reviews/>

    </>
  )
}
