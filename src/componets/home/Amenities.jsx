"use client";
import Image from "next/image";
import { FaWifi } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";

export default function Amenities() {
  const amenities = [
    {
      icon: <FaWifi/>, // replace with your icon path in public/
      title: "Free Internet",
      description:
        "Throughout your stay, stay connected with free, fast wifi internet.",
    },
    {
      icon: <GiCoffeeCup/>, // replace with your icon path
      title: "Coffee & Tea Excellent",
      description:
        "Savor a variety of fine teas and freshly prepared coffee at any time.",
    },
    {
      icon: <TbAirConditioning/>, // replace with your icon path
      title: "AC Rooms",
      description:
        "Unwind in our air-conditioned rooms, which have been thoughtfully constructed for your convenience and comfort.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <p className="text-[#b18b5e] uppercase tracking-wider font-medium">
          Our Amenities
        </p>
        <h2 className="text-3xl sm:text-4xl text-gray-900 font-bold mt-2">
          Explore Our{" "}
          <span className="text-[#b18b5e]">Amenities</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
          >
            <div className="flex justify-center text-3xl mb-4">
             <span className="hover:text-orange-600 text-gray-900">{item.icon}</span>
            </div>
            <h3 className="text-lg sm:text-xl text-gray-900 font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
