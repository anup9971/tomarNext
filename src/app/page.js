export const metadata = {
  title: "Tomar Hospitality | Hotels, Meeting Rooms & Events in Karol Bagh",
  description:
    "Book your stay at Tomar Hospitality in Karol Bagh, New Delhi. Premium hotel rooms, hourly meeting spaces, and event venues near Karol Bagh Metro Station.",
  keywords:
    "Tomar Hospitality, hotel in Karol Bagh, New Delhi hotels, hourly room, meeting rooms, event venues, Hotel Amrit Villa, Hotel Siam International",
  alternates: {
    canonical: "https://www.tomarhospitality.com/",
  },
  openGraph: {
    title: "Tomar Hospitality | Hotels & Events in New Delhi",
    description:
      "Explore Tomar Hospitality — the perfect destination for comfortable stays, meetings, and events in Karol Bagh, New Delhi.",
    url: "https://www.tomarhospitality.com/",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/room/all-room/room7.webp",
        width: 1200,
        height: 630,
        alt: "Tomar Hospitality Room Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomar Hospitality | Hotels & Events in New Delhi",
    description:
      "Tomar Hospitality offers premium rooms, meeting spaces, and event venues near Karol Bagh Metro Station, New Delhi.",
    images: [
      "https://www.tomarhospitality.com/img/room/all-room/room7.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};


import Slider from "@/componets/home/Slider";

import AboutSection from "@/componets/home/AboutSection";
import RoomsSection from "@/componets/home/RoomSection";
import OfferSection from "@/componets/home/OfferSection";
import Amenities from "@/componets/home/Amenities";
import Reviews from "@/componets/home/Reviews";
export default function Home() {
  const images = [
  { src: "/img/banquet/banquet2.jpg", alt: "Meeting Room", caption: "Discover a Luxurious Brand-New Meeting Room Experience" },
  { src: "/img/Home/slider/deluxe-slider.jpg", alt: "Luxury Living", caption: "Discover a Brand-New Luxurious Hotel Experience" },
  { src: "/img/Home/slider/super-slider.jpg", alt: "Luxury Living", caption: "Discover a Brand-New Luxurious Hotel Like No Other" },
];
  return (
 <>
   <Slider images={images} autoPlay={true} autoPlayInterval={6000} height="60vh"/>
   <AboutSection/>
   <RoomsSection/>
   <OfferSection/>
   <Amenities/>
   <Reviews/>
 </>
  );
}
