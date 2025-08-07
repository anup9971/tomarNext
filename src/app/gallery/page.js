
export const metadata = {
  title: "Hotel Gallery - Tomar Hospitality | View Our Hotels & Events",
  description:
    "Explore the gallery of Tomar Hospitality hotels in Delhi. View hotel rooms, banquet halls, events, and amenities at Hotel SPB 87 and other properties in Karol Bagh.",
  keywords:
    "Tomar Hospitality Gallery, Hotel Room Photos Delhi, Banquet Hall Images, Karol Bagh Hotel Photos, Hotel SPB 87 Pictures, Event Venue Photos Delhi",
  alternates: {
    canonical: "https://www.tomarhospitality.com/gallery",
  },
  openGraph: {
    title: "Hotel Gallery - Tomar Hospitality | View Our Hotels & Events",
    description:
      "Take a visual tour of our luxury hotels, banquet halls, and events in Delhi. View hotel rooms, party setups, and corporate event spaces.",
    url: "https://www.tomarhospitality.com/gallery",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/gallery/gallery-cover.webp",
        width: 1200,
        height: 630,
        alt: "Tomar Hospitality Hotel Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Gallery - Tomar Hospitality | View Our Hotels & Events",
    description:
      "Browse our photo gallery of luxury rooms, banquet spaces, and real event celebrations at Tomar Hospitality hotels in Karol Bagh, New Delhi.",
    images: [
      "https://www.tomarhospitality.com/img/gallery/gallery-cover.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};
import Image from 'next/image';

const galleryImages = [
  {id:3, pic:"/img/room/deluxe/deluxe3.jpg"},
        {id:1, pic:"/img/room/classic/classic1.jpg"},
        {id:5, pic:"/img/room/super/Super-room1.jpg"},
        {id:2, pic:"/img/room/all-room/room1.webp "},
        {id:7, pic:"/img/room/all-room/room2.webp"},
        {id:4, pic:"/img/room/all-room/room3.webp"},
        {id:6, pic:"/img/room/all-room/room4.webp"},
        {id:4, pic:"/img/room/all-room/room5.webp"},
        {id:8, pic:"/img/room/all-room/room6.webp"},
        {id:9, pic:"/img/room/all-room/room7.webp"},
        {id:10, pic:"/img/room/all-room/room8.webp"},
        {id:11, pic:"/img/room/all-room/room9.webp"},
        {id:12, pic:"/img/room/all-room/room10.webp"},
        {id:13, pic:"/img/room/all-room/room11.webp"},
        {id:14, pic:"/img/room/all-room/room12.webp"},
        {id:15, pic:"/img/room/all-room/room12.webp"},
        {id:17, pic:"/img/room/all-room/room17.webp"},
        {id:17, pic:"/img/room/all-room/room18.webp"},
        {id:17, pic:"/img/room/all-room/room19.webp"},
];

const Gallery = () => {
  return (
    <section className="py-12 px-4 md:px-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-[#b97e43] mb-10">
        Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden md:h-[400px] rounded-md shadow hover:scale-105 transition-transform duration-300">
            <Image
              src={src?.pic.trim()}
              alt={`Gallery image ${index + 1}`}
              width={500}
              height={300}
              className="w-full md:h-[400px] object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
