// components/HotelSlider.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function HotelSlider({
  images = [],              // array of { src: string, alt?: string, caption?: string }
  autoPlay = true,
  autoPlayInterval = 5000, // ms
  height = "60vh",         // css value (e.g. "60vh", "500px")
  showDots = true,
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const last = images.length - 1;

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1) return;

    autoplayRef.current = setInterval(() => {
      setIndex((i) => (i === last ? 0 : i + 1));
    }, autoPlayInterval);

    return () => clearInterval(autoplayRef.current);
  }, [autoPlay, autoPlayInterval, isPaused, images.length, last]);

  const prev = () => setIndex((i) => (i === 0 ? last : i - 1));
  const next = () => setIndex((i) => (i === last ? 0 : i + 1));
  const goTo = (i) => setIndex(i);

  // Touch handlers for basic swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40; // px
    if (Math.abs(diff) > threshold) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ height }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="w-full h-full overflow-hidden relative">
        {images.map((img, i) => {
          const isActive = i === index;
          return (
            <div
              key={img.src + i}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <div className="w-full h-full relative">
                <Image
                  src={img.src}
                  alt={img.alt || `slide-${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
                {/* Optional overlay caption */}
                {img.caption && (
                  <div className="absolute left-1/2 bottom-10 -translate-x-1/2 bg-black/50 text-white px-6 py-4 rounded-md max-w-lg text-center z-20 pointer-events-none">
                    <h3 className="text-sm md:text-base tracking-wide">{img.caption}</h3>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Left / Right arrows (z-index and pointer-events fixed) */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 text-white focus:outline-none z-30 pointer-events-auto"
        aria-label="Previous slide"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 text-white focus:outline-none z-30 pointer-events-auto"
        aria-label="Next slide"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Dots */}
      {showDots && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-30 pointer-events-auto">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
                i === index ? "bg-white scale-110" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
