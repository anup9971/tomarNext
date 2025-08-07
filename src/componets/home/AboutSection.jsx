"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection({
  eyebrow = "ABOUT US",
  title = "Welcome to ",
  accent = "TOMAR HOSPITALITY",
  paragraphs = [
    `Tomar Hospitality Comfortable Rooms, Hourly Meeting Spaces & Event Venues in Karol Bagh, New Delhi. 
     At Tomar Hospitality, we offer premium room accommodations, hourly rooms for meetings, and versatile event spaces in Karol Bagh, near Karol Bagh Metro Station, New Delhi.`,
    `Our two hotels Hotel Amrit Villa and Hotel Siam International are ideal for both business and leisure stays. We specialize in hosting corporate events, training sessions, weddings, parties, and social gatherings.`,
  ],
  image = "/about/room-large.jpg", // single image path
}) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Right column: single large image */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-60 md:h-[370px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/img/room/classic/classic1.jpg"
                alt="About us"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>{/* Left column: text */}
          <div className="lg:col-span-6">
            <div className="max-w-2xl">
              <p className="text-sm text-[#b78350] font-semibold tracking-wider mb-3 flex items-center gap-3">
                <span>{eyebrow}</span>
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#b78350]" />
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-3xl font-serif font-extrabold leading-tight text-gray-900 mb-6">
                {title}
                <span className="text-[#b78350] ml-2">{accent}</span>
              </h2>

              <div className="prose prose-sm lg:prose-base text-gray-600">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Optional CTA */}
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-block bg-[#b78350] text-gray-900 px-6 py-2 rounded shadow hover:opacity-95 transition"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
