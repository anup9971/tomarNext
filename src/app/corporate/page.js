export const metadata = {
  title: "Corporate Event Organisers in Delhi | Tomar Hospitality",
  description:
    "Tomar Hospitality is a leading corporate event organiser in Delhi. Host business meetings, conferences, and seminars at our Karol Bagh venue with modern amenities and excellent service.",
  keywords:
    "Corporate Event Organisers Delhi, Business Meetings Karol Bagh, Conference Halls Delhi, Event Management Company, Corporate Events Delhi, Tomar Hospitality",
  alternates: {
    canonical: "https://www.tomarhospitality.com/corporate",
  },
  openGraph: {
    title: "Corporate Event Organisers in Delhi | Tomar Hospitality",
    description:
      "Host your next corporate event or business meeting in the heart of Karol Bagh, Delhi with Tomar Hospitality — modern conference halls, easy metro access, and seamless execution.",
    url: "https://www.tomarhospitality.com/corporate",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/corporate/corporate-hall.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Event Hall - Tomar Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Event Organisers in Delhi | Tomar Hospitality",
    description:
      "Plan business events with Tomar Hospitality at our fully equipped Karol Bagh venue. Ideal for corporate meetings, seminars, and product launches.",
    images: [
      "https://www.tomarhospitality.com/img/corporate/corporate-hall.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};
import AboutUs from '@/componets/corporate/AboutUs'
import ConferenceFacilitiesTable from '@/componets/corporate/ConferenceFacilitiesTable'
import ConferenceImageSection from '@/componets/corporate/ConferenceImageSection'
import ConferencesEvents from '@/componets/corporate/ConferencesEvents'
import Membership from '@/componets/corporate/Membership'
import React from 'react'

export default function page() {
  return (
    <>
        <AboutUs/>
        <Membership/>
        <ConferencesEvents/>
        <ConferenceImageSection/>
        <ConferenceFacilitiesTable/>
    </>
  )
}
