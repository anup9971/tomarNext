

import { FaWifi, FaConciergeBell } from 'react-icons/fa';
import { MdHotelClass } from 'react-icons/md';

const AboutSec = ({about}) => {
  return (
    <section className="px-4 md:px-20 py-16 bg-white text-center">
      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
         About  {about}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
      Welcome to  {about} by Tomar Hospitality – A Luxury Hotel in Karol Bagh, New Delhi Experience the perfect blend of timeless elegance and modern comfort at Hotel {about}, a premium hotel by Tomar Hospitality, located in the heart of Karol Bagh, New Delhi. Our well-appointed rooms, world-class service, and modern amenities are designed to make your stay truly exceptional. Whether you're visiting for business travel, a leisure getaway, or a family vacation, our hotel offers a warm and personalized hospitality experience from check-in to check-out. Enjoy spacious accommodations, complimentary Wi-Fi, in-room dining, and easy access to Karol Bagh Metro Station and major city attractions.
        </p>
      
      </div>

      {/* Why Choose Us */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold mb-10 text-gray-900">Why Choose Us</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <FaConciergeBell className="text-[#b97e43] text-4xl mb-4" />
            <h4 className="font-bold text-lg text-gray-800 mb-2">24/7 Service</h4>
            <p className="text-gray-600 text-center">
              Round-the-clock assistance for all your needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <MdHotelClass className="text-[#b97e43] text-4xl mb-4" />
            <h4 className="font-bold text-gray-800 text-lg mb-2">Luxury Rooms</h4>
            <p className="text-gray-600 text-center">
              Spacious, stylish, and fully equipped rooms.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <FaWifi className="text-[#b97e43] text-4xl mb-4" />
            <h4 className="font-bold text-gray-800 text-lg mb-2">Free Wi-Fi</h4>
            <p className="text-gray-600 text-center">
              Stay connected with complimentary high-speed internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
