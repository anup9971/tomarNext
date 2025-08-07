export const metadata = {
  title: "Banquet Hall in Delhi | Wedding Hall Karol Bagh | Tomar Hospitality",
  description:
    "Book top-rated banquet halls in Delhi at Hotel SPB 87, Karol Bagh by Tomar Hospitality. Ideal for weddings, birthdays, kitty parties, corporate events, and DJ nights. Full decoration and catering services available.",
  keywords:
    "Banquet Hall Delhi, Wedding Hall Karol Bagh, Party Venue Delhi, Birthday Party Hall Delhi, Conference Hall Karol Bagh, Seminar Room Delhi, Event Planner Delhi, Banquet Near Metro Delhi",
  alternates: {
    canonical: "https://www.tomarhospitality.com/banquet",
  },
  openGraph: {
    title:
      "Banquet Hall in Delhi | Wedding Hall Karol Bagh | Tomar Hospitality",
    description:
      "Host your wedding, party or event in Karol Bagh at Hotel SPB 87. Spacious banquet halls, full decor, catering & DJ services. Near Karol Bagh Metro.",
    url: "https://www.tomarhospitality.com/banquet",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/banquet/banquet-hall.webp",
        width: 1200,
        height: 630,
        alt: "Banquet Hall Karol Bagh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Banquet Hall in Delhi | Wedding Hall Karol Bagh | Tomar Hospitality",
    description:
      "Celebrate your special events at our premium banquet halls in Karol Bagh, Delhi. Capacity up to 150 guests, full-service events & catering.",
    images: [
      "https://www.tomarhospitality.com/img/banquet/banquet-hall.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};
import About from '@/componets/banquet/About'
import React from 'react'

export default function page() {
  return (
    <>
    <div className='bg-white'>
        <About/>
    </div>
    </>
  )
}
