import Image from "next/image";
import React from "react";

export default function ConferencesEvents() {
  return (
    <section className="py-12 bg-white text-center px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl  text-gray-800 font-bold uppercase mb-4">
        Conferences and <span className="text-[#a67c52]">Events</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-5xl mx-auto mb-4">
        At Tomar Hospitality, we specialize in corporate event management and business conference planning in Delhi. Whether you're organizing a board meeting, corporate seminar, training session, or a large company conference, our expert team ensures seamless execution from start to finish. Our dedicated venue, Hotel S.P.B 87, is conveniently located near the Karol Bagh Metro Station in New Delhi, offering easy access by metro, cab, bus, or private vehicle. We also provide on-site car parking for added convenience.
      </p>
      <p className="text-gray-700 max-w-4xl mx-auto mb-10">
        We offer a newly designed conference hall in Karol Bagh, equipped with modern amenities to accommodate all types of business events, including:
      </p>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="relative group overflow-hidden shadow-md rounded">
          <Image
            src="/img/corpo/service/Corporate.jpg"
            alt="Corporate Meetings"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#ffffff17] bg-opacity-50 flex flex-col justify-center items-center text-gray-800 p-4">
            <h3 className="text-lg font-bold mb-2">Corporate Meetings</h3>
            <p className="text-sm">
              Structured gatherings to discuss business objectives, performance reviews, and strategy.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group overflow-hidden shadow-md rounded">
          <Image
            src="/img/corpo/service/Corporate.jpg"
            alt="Seminars"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#ffffff17] bg-opacity-50 flex flex-col justify-center items-center text-gray-800 p-4">
            <h3 className="text-lg font-bold mb-2">Seminars</h3>
            <p className="text-sm">
              Speaker-led sessions focused on delivering insights or expert knowledge.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group overflow-hidden shadow-md rounded">
          <Image
            src="/img/corpo/service/Seminars.jpg"
            alt="Product Launches"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#ffffff17]bg-opacity-50 flex flex-col justify-center items-center text-gray-800 p-4">
            <h3 className="text-lg font-bold mb-2">Product Launches</h3>
            <p className="text-sm">
              Events to introduce new services or products to clients, media, and partners.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative group overflow-hidden shadow-md rounded">
          <Image
            src="/img/corpo/service/Product.jpg"
            alt="Annual General Meetings"
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#ffffff17] bg-opacity-50 flex flex-col justify-center items-center text-gray-800 p-4">
            <h3 className="text-lg font-bold mb-2">Annual General Meetings</h3>
            <p className="text-sm">
              Yearly formal meetings to share company financials and strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
