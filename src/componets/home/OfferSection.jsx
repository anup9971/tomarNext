"use client";

import Image from "next/image";
import Link from "next/link";

export default function OfferSection({
  eyebrow = "LUXURY LIVING",
  eyebrowAccentColor = "#b78350",
  title = "Discover A Tomar Hospitality Luxurious Rooms",
  description = "Modern comfort meets timeless elegance. Prime location, warm service. Unwind, relax, and stay with style. Where every moment feels just right.",
  ctaLabel = "BOOK A ROOM",
  ctaHref = "/book",
  image = "/hero/room.jpg", // your single image path
}) {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Left: Text content */}
          <div className="lg:col-span-6 bg-black text-white py-20 px-6 sm:px-12">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold mb-6 flex items-center gap-4">
                <span className="text-white/90">{eyebrow}</span>
                <span
                  className="hidden sm:inline-block w-12 h-[1px]"
                  style={{ background: eyebrowAccentColor }}
                />
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
                {title}
              </h1>

              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>

              <Link
                href={ctaHref}
                className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium shadow hover:opacity-95"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>

          {/* Right: Single image */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[435px] rounded-md overflow-hidden shadow">
              <Image
                src="/img/Home/slider/multi-frame.png"
                alt="Luxurious Room"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
