

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Membership() {
  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 uppercase">Membership</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Welcome to The Grand Shoba a Delhi of tailored privileges and benefits, designed to enhance and enrich your experience.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-40 mb-10">
        <Image
          src="/img/pass/silver1.jpg" // replace with actual path
          alt="Silver Member"
          width={250}
          height={150}
          className="rounded shadow-md"
        />
        <Image
          src="/img/pass/silver1.jpg" // replace with actual path
          alt="Silver Member"
          width={250}
          height={150}
          className="rounded shadow-md"
        />
        <Image
          src="/img/pass/platinum1.jpg" // replace with actual path
          alt="Platinum Member"
          width={250}
          height={150}
          className="rounded shadow-md"
        />
      </div>

      {/* Join Now Button */}
      <Link href="/contact">
      
      <button className="bg-[#a67c52] hover:bg-[#8b6744] text-white font-semibold px-6 py-2 rounded transition">
        JOIN NOW
      </button>
      </Link>
    </section>
  );
}
