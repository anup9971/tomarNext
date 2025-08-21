"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown, FiMail, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "#hotel", label: "HOTELS", hasSub: true },
 
    { href: "/rooms", label: "ROOMS" },
    { href: "/corporate", label: "CORPORATE" },
    { href: "/banquet", label: "BANQUET" },
    
    { href: "/contact", label: "CONTACT" },
  ];

  const aboutSub = [
    { href: "/hotel-siam", label: "Hotel Siam International" },
    { href: "/hotel-amrit-villa", label: "Hotel Amrit Villa" },
    { href: "/hotel-spb-87-delhi", label: "Hotel SPB-87 Delhi" },
    { href: "/hotel-marble-king", label: "Hotel Marble King" },
  ];

  const handleAboutKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setAboutOpen((s) => !s);
    }
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="hidden sm:flex items-center justify-center bg-white text-sm text-gray-700 px-4 py-1">
        <div className="max-w-7xl w-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiMail />
              <a href="mailto:tomarhospitality@gmail.com" className="hover:underline">
                tomarhospitality@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone />
              <a href="tel:+919899145516" className="hover:underline">
                +91 9899145516
              </a>
            </div>
          </div>
          <div className="text-xs text-gray-500">Open: 24/7</div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-black text-white sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-35 h-30">
                  <Image src="/img/logotomar.png" alt="Tomar Hospitality" fill className="object-contain" priority />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              {navLinks.map((link) =>
                link.hasSub ? (
                  <div key={link.label} className="relative group" ref={aboutRef}>
                    <button
                      className="inline-flex items-center gap-1 text-sm hover:text-gray-300"
                      onClick={() => setAboutOpen(!aboutOpen)}
                      onKeyDown={handleAboutKey}
                      aria-expanded={aboutOpen}
                    >
                      {link.label} <FiChevronDown size={14} />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg min-w-[220px] z-50 ${
                        aboutOpen ? "block" : "hidden"
                      }`}
                    >
                      <ul className="py-2">
                        {aboutSub.map((s) => (
                          <li key={s.href}>
                            <Link href={s.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className="text-sm hover:text-gray-300">
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Book Button and Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/rooms"
                className="hidden sm:inline-block border bg-[#b78350] hover:bg-[#c7975f] text-white px-4 py-2 rounded-sm text-sm"
              >
                BOOK NOW
              </Link>
              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                className="md:hidden"
              >
                {open ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden transition-all duration-300 bg-black/95 overflow-hidden ${
            open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.hasSub ? (
                  <div key="about-mobile" className="w-full">
                    <button
                      onClick={() => setAboutOpen(!aboutOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-white/10"
                    >
                      <span>HOTELS</span>
                      <FiChevronDown className={`${aboutOpen ? "rotate-180" : "rotate-0"} transition-transform`} />
                    </button>
                    <div className={`${aboutOpen ? "max-h-60" : "max-h-0"} overflow-hidden transition-all duration-300 bg-black/80`}>
                      <ul className="flex flex-col">
                        {aboutSub.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setOpen(false)}
                              className="block px-6 py-2 text-sm text-gray-100 hover:bg-white/10"
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-white hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile Book Button */}
              <Link href="/rooms" onClick={() => setOpen(false)}>
                <div className="mt-3 w-full text-center bg-[#b78350] hover:bg-[#c7975f] px-4 py-2 rounded text-white font-medium">
                  BOOK NOW
                </div>
              </Link>

              {/* Mobile Contact */}
              <div className="mt-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <FiMail /> <a href="mailto:tomarhospitality@gmail.com">tomarhospitality@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <FiPhone /> <a href="tel:+919899145516">+91 9899145516</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
