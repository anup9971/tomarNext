export const metadata = {
  title: "Contact Us - Tomar Hospitality | Hotel SPB 87 Karol Bagh, Delhi",
  description:
    "Get in touch with Tomar Hospitality for hotel bookings, event inquiries, and more. Contact Hotel SPB 87 Karol Bagh, New Delhi via phone, email, or visit us near Karol Bagh Metro Station.",
  keywords:
    "Contact Tomar Hospitality, Hotel SPB 87 Contact, Karol Bagh Hotel Phone, Event Inquiry Delhi, Book Hotel Karol Bagh",
  alternates: {
    canonical: "https://www.tomarhospitality.com/contact",
  },
  openGraph: {
    title: "Contact Us - Tomar Hospitality | Hotel SPB 87 Karol Bagh, Delhi",
    description:
      "Have questions or want to book a stay or event? Contact Tomar Hospitality in Karol Bagh, New Delhi — steps away from Karol Bagh Metro Station.",
    url: "https://www.tomarhospitality.com/contact",
    type: "website",
    images: [
      {
        url: "https://www.tomarhospitality.com/img/contact/contact-banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact Tomar Hospitality",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Tomar Hospitality | Hotel SPB 87 Karol Bagh, Delhi",
    description:
      "Reach out to Tomar Hospitality for hotel reservations, banquet bookings, or general inquiries in Delhi.",
    images: [
      "https://www.tomarhospitality.com/img/contact/contact-banner.webp",
    ],
  },
  metadataBase: new URL("https://www.tomarhospitality.com"),
};

import ContactSection from '@/componets/contact/ContactSection'
import React from 'react'

export default function page() {
  return (
    <>
    <ContactSection/>
    </>
  )
}
