

import data from "@/roomData";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath, FaWifi } from "react-icons/fa";


function Feature({ Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Icon className="text-gray-700" />
      <span>{label}</span>
    </div>
  );
}

export default function RoomsSection() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow / Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-[#b78350] font-semibold tracking-wider uppercase mb-3">
            Our Rooms
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-3xl font-serif font-extrabold text-gray-900 mb-4">
            Explore Our <span className="text-[#b78350]">ROOMS</span>
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            At Tomar Hospitality, we offer more than just hotel rooms — we provide a peaceful and inviting space
            where you can truly relax. Whether you're visiting New Delhi for business or leisure, our rooms are thoughtfully designed for a comfortable and restful stay.
          </p>
        </div>

        {/* Cards Grid */}
       


        {/* Cards Grid secobd */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {data.map((room) => (
            <article key={room._id} className="bg-white   shadow-md rounded-md overflow-hidden border">
              <div className="relative w-full h-56 md:h-60 lg:h-64">
                <Image
                  src={room.img[0]}
                  alt={room.title}
                  fill
                  priority={false}
                  style={{ objectFit: "cover" }}
                />

                {/* Price badge */}
                <div className="absolute left-4 top-4 bg-green-600 text-white text-xs md:text-sm px-3 py-1 rounded-md shadow z-20">
                 &#8377; {room.price}/night
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{room.name}</h3>

                {/* features */}
                <div className="flex items-center gap-6 text-xs md:text-sm mb-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-gray-700" />
                    <span>{room.beds} Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-gray-700" />
                    <span>{room.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWifi className="text-gray-700" />
                    <span>Wifi</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-5">{room.description}</p>

                <div className="flex items-center justify-between">
                  {/* <Link
                    href={room.href}
                    className="inline-block bg-[#b78350] hover:bg-[#a86d37] text-white text-sm px-4 py-2 rounded-md transition"
                  >
                    View details
                  </Link> */}

                  <Link
                    href={`/rooms/${room._id}`}
                 
                  >
                    <span className="inline-block text-sm hover:bg-[#b78350] hover:text-white text-gray-700 border border-gray-200 px-3 py-2 rounded-md transition">Book Now</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
