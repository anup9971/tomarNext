"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiChevronUp } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const services = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/rooms", label: "Room" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Us" },
  ];

  const social = [
    { href: "https://www.facebook.com/tomarhospitality", icon: <FaFacebookF className="text-2xl hover:text-orange-600"/>, label: "Facebook" },
    { href: "https://x.com/TomarConference", icon: <FaTwitter className="text-2xl hover:text-orange-600" />, label: "Twitter" },
    { href: "https://www.youtube.com/channel/UC_FGfQHKHQZGlDCFFGAtiUw", icon: <FaYoutube className="text-2xl hover:text-orange-600"/>, label: "YouTube" },
    { href: "https://www.instagram.com/tomarhospitality/", icon: <FaInstagram className="text-2xl hover:text-orange-600" />, label: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid: Left (logo + description) | Middle (contacts + services) | Right (map) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Left card */}
          <div className="md:col-span-4">
            <div className="bg-[#b78350] p-6 rounded shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative w-50 h-30">
                  <Image src="/img/logotomar.png" alt="Tomar Hospitality" fill className="object-contain" priority />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/90">
                Tomar Hospitality — Comfortable Rooms, Hourly Meeting Spaces & Event Venues in Karol Bagh, New Delhi.
                We offer premium room accommodations, hourly rooms for meetings, and versatile event spaces near Karol Bagh Metro Station.
              </p>

              {/* Social icons */}
              <div className="mt-4 flex items-center gap-3">
                {social.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="bg-black/20 hover:bg-black/10 w-9 h-9 inline-flex items-center justify-center rounded-full text-white transition"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3">
            <h4 className="text-[#b78350] tracking-wider font-semibold mb-3">CONTACT</h4>
            <ul className="space-y-3 text-sm text-white/90">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-[2px]" />
                <div>
                  <div className="font-medium">17A/2, W.E.A. Karol Bagh</div>
                  <div className="text-xs text-white/70">New Delhi, 110005</div>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone />
                <a href="tel:+919899145516" className="text-sm hover:underline">+91 9899145516</a>
              </li>

              <li className="flex items-center gap-3">
                <FiMail />
                <a href="mailto:tomarhospitality@gmail.com" className="text-sm hover:underline">tomarhospitality@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Services column */}
          <div className="md:col-span-2">
            <h4 className="text-[#b78350] tracking-wider font-semibold mb-3">SERVICES</h4>
            <nav aria-label="Footer Services">
              <ul className="space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:underline  text-white/90">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Map / small widget */}
          <div className="md:col-span-3">
            <div className="w-full h-36 md:h-44 rounded overflow-hidden border border-white/5">
              {/* Google Maps embed — replace the src with your place/embed link */}
              <iframe
                title="Tomar Hospitality location"
                src="https://maps.google.com/maps?q=Conference+Halls+in+Delhi+-+Tomar+Hospitality++17A%2C+Block+7%2C+Block+8A%2C+WEA%2C+Karol+Bagh%2C+New+Delhi%2C+Delhi%2C+110005&output=embed"
                loading="lazy"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/70">©{new Date().getFullYear()} Tomar Hospitality. All Rights Reserved. Developed by <Link href="https://www.perfectconsultancy.co/" className="text-[#b78350] hover:underline">PGC LLP</Link></div>

          {/* back to top (optional) */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 w-9 h-9 rounded bg-[#b78350] hover:opacity-90 inline-flex items-center justify-center"
              aria-label="Back to top"
            >
              <FiChevronUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
