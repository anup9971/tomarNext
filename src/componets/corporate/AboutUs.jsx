import Image from "next/image";

export default function CorporateEventPage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 md:p-16">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-[#A5692C] mb-8">
        Corporate Event Organisers in Delhi
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="w-full h-auto rounded shadow overflow-hidden">
          <Image
            src="/img/corpo/corpo.jpg"
            alt="Corporate Event Venue"
            width={800}
            height={600}
            layout="responsive"
            className="rounded"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-black">
            Corporate Event Organiser Delhi Event Management Company
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            At Tomar Hospitality, we specialize in corporate event management and
            business meeting planning in the heart of New Delhi. From business meetings,
            company conferences, and training sessions to full-scale corporate events,
            our team ensures a seamless and professional experience. Our venue, Hotel
            S.P.B 87, is conveniently located just steps away from the Karol Bagh Metro
            Station, making it easily accessible by metro, cab, bus, or private vehicle.

            <br /><br />
            We also offer dedicated car parking for guests arriving by personal
            transport. The hotel features a newly designed conference hall in Karol
            Bagh — ideal for business events, company meetings, and corporate
            programs. Fully equipped with modern amenities, comfortable seating, and
            audio-visual support, our event space is tailored to meet the needs of
            professional gatherings. Choose Tomar Hospitality for your next corporate
            event in Delhi — where location, service, and convenience come together.
          </p>
        </div>
      </div>
    </div>
  );
}
