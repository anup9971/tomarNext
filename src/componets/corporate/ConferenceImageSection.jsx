import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ConferenceImageSection() {
  return (
    <section className="px-4 py-10 flex flex-col items-center justify-center bg-white">
      {/* Image */}
      <div className="w-full max-w-6xl rounded overflow-hidden shadow-md">
        <Image
          src="/img/corpo/corpo.jpg" // Make sure to use the correct file name
          alt="Conference Hall"
          width={1200}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      {/* Enquire Button */}
      <div className="mt-6">
        <Link href="/contact">
        <button className="bg-[#a67c52] text-white font-medium px-6 py-2 rounded hover:bg-[#8a623f] transition">
          ENQUIRE NOW
        </button>
        </Link>
      </div>
    </section>
  );
}
