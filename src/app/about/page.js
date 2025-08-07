export const metadata = {
  title: "About Us | Tomar Hospitality - Hotels & Event Spaces in Karol Bagh",
  description:
    "Tomar Hospitality — premium hotels, hourly meeting rooms, and event spaces near Karol Bagh Metro Station, New Delhi. Perfect for business stays and social events.",
  keywords:
    "Tomar Hospitality, Karol Bagh hotels, meeting rooms, event venues, hourly rooms, hotel Amrit Villa, hotel Siam International, New Delhi hotel",
  alternates: {
    canonical: "https://www.tomarhospitality.com/about",
  },
  openGraph: {
    title: "About Us | Tomar Hospitality",
    description:
      "Discover Tomar Hospitality — top-tier hotels and event spaces in Karol Bagh, New Delhi. Corporate meetings, training, weddings and more.",
    url: "https://www.tomarhospitality.com/about",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/room/all-room/room7.webp",
        width: 1200,
        height: 630,
        alt: "Tomar Hospitality Room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Tomar Hospitality",
    description:
      "Discover premium hotels and event venues in Karol Bagh from Tomar Hospitality. Hourly bookings available.",
    images: ["https://www.tomarhospitality.com/img/room/all-room/room7.webp"],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};

import AboutSection from "@/componets/home/AboutSection";
import Reviews from "@/componets/home/Reviews";
import Image from "next/image";


export default function AboutUs() {


  return (
    <>


    <section className="bg-white">
      {/* Optional narrow banner image on top */}
      <div className="w-full h-36 sm:h-44 md:h-56 lg:h-64 relative overflow-hidden">
        <Image
          src="/img/Home/slider/classic-slider.jpg"
          alt="About top"
          fill
          className="object-cover object-center"
        />
      </div>

   
    </section>
    <AboutSection/>
    <Reviews/>
    </>
  );
}
