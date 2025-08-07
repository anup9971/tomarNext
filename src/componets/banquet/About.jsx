import Image from "next/image";
import { FaMailBulk, FaMailchimp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import Table from "./Table";

export default function About() {
  return (
    <>

    <div className="max-w-6xl bg-white mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-center text-amber-600 mb-8">
        Banquet Hall-Delhi-Wedding Hall Karol Bagh
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Image */}
        <div className="w-full md:h-[450px] lg:w-1/2">
          <Image
            src="/img/banquet/banquet1.jpg"
            alt="Banquet Hall"
            width={600}
            height={800}
            className="rounded-lg shadow-md w-full md:h-[480px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Banquet Halls in Delhi - Tomar Hospitality
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Banquet Hall Delhi: Hotel SPB 87 Karol Bagh Tomar Hospitality offer Banquet hall delhi, 
            wedding hall karol bagh & party venue near karol bagh metro. We provide banquet venue 
            with decoration service like balloon & flower decoration. Party space available for 
            Weddings/Birthday Party/Kitty Parties/Anniversaries/Receptions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Tomar Hospitality provide banquet hall delhi, party hall karol bagh, wedding venue near 
            karol bagh metro & night dinner d.j party space. We known for the best event planner in 
            Delhi and event organizer Delhi. We provide services like party hall in delhi, banquet 
            venue near delhi metro, birthday party hall karol bagh and marriage hall in delhi.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We provide full catering services like breakfast/lunch/dinner. Our restaurant cooks are 
            specialized in North Indian, South Indian and Chinese foods. Hotel SPB 87 having two banquet 
            halls. The capacity of people gathering of small hall is 20 to 30 persons. The big wedding 
            hall is recently designed now and having capacity of 100 to 120 people.
          </p>
        </div>
      </div>
    </div>
        
    {/* -------------------------second section--------------- */}
    <div className="max-w-6xl bg-white mx-auto px-6 py-10">
      

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Image Section */}
      

        {/* Text Section */}
        <div className="w-full md:w-full text-gray-800 space-y-4 leading-relaxed text-justify">
          <h1 className="text-center text-xl md:text-3xl font-bold text-gray-900 mb-8">
        Meeting Room/ Party Hall/ Banquet Hall/ Conference Venue
      </h1>
          <p>
            We offer conference venue, Seminar & training hall, banquet hall karol bagh, party venue
            near karol bagh metro station and meeting rooms in karol bagh, New Delhi. Hotel SPB 87
            event hall is perfect for birthday party hall, <strong>wedding venue</strong>, kitty
            party, social events, get togethers celebration and D.J party place in karol bagh. Our
            conference hall is more comfortable for training classes/ Corporate events/ coaching
            classes/ business meet. Here the space available for people gathering upto 150 Paxs. Here,
            we have fully furnished hall by comfort chairs with table, projector with Screen, Sound
            System with hand Mike, Free Wi-Fi, Tea/Coffee Snacks and veg./ N.veg. food from own
            Restaurant.
          </p>
          <p>
            Tomar Hospitality is a figment of our imagination. It is one of best hospitality in Delhi
            that provides you with the best seminar halls, training halls, and conference halls. While
            Tomar hospitality is influenced by the latest facilities and infrastructure in Karol Bagh,
            Delhi, it is also very appropriate for global travellers.
          </p>
          <p>
            Hotel SPB 87 must be your next venue for social gathering, wedding events, birthdays and
            DJ nights. Tomar Hospitality brings in for you very spacious yet comfortable and modern
            facilities for corporate events, coaching classes, training classes, and various
            professional latest meets.
          </p>
          <p>
            The renowned Tomar Hospitality provides a capacity of 150 per pax for any event. The
            auditoriums are fully furnished with comfortable chairs tied with red ribbons and round
            tables wrapped in white tablecloths. This area is also facilitated with projectors and
            white screens, HD sound systems with hands-free mic or lapel mics. Free Wi-Fi is provided
            with complimentary tea and snacks on behalf of the restaurants.
          </p>
        </div>
      </div>
    </div>


    {/*---------------------- Best Party Hall  ----------------------------*/}

    <div className="max-w-6xl mx-auto bg-white px-6 py-10">
      {/* Section Heading */}
    

      {/* Flex Container */}
      <div className="flex flex-col  bg-white md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full h-[200px] md:h-[350px] md:w-1/2">
          <Image
            src="/img/banquet/part-hall.jpg"
            alt="Party Hall"
            width={600}
            height={400}
            className="rounded-lg h-[200px] shadow-md w-full md:h-[350px] object-cover"
          />
        </div>

        {/* Text and Pricing */}
        <div className="w-full md:w-1/2  text-gray-800 space-y-5">
          <h2 className="text-center text-xl md:text-2xl font-bold text-gray-900 mb-1">
        Best Party Halls in Delhi – Book Now!
      </h2>
          <p>
            Tomar Hospitality provides one of the “best hospitality services” in India for the past
            one decade. We offer the venue for every event that you need, from birthdays to get
            together parties with DJ in Venue. This glorious posh party venue is located near Karol
            Bagh and renowned event planners plan big events for this location. The hotel arranges a
            full catering facility in breakfast, lunch and dinner. There are two banquets which
            provide facilities for 20 to 30 people for various events.
          </p>

          <div className="border border-gray-300 rounded-md divide-y">
            <div className="px-4 py-2 bg-gray-50">Veg Plate - INR 700/- per person</div>
            <div className="px-4 py-2 bg-white">Non-Veg Plate - INR 800/- per person</div>
            <div className="px-4 py-2 bg-gray-50">DJ with floor lights - INR 5000/-</div>
          </div>

          <p>
            <strong>Facilities:</strong> Veg – Non-Veg Meal, Laptop with Wi-Fi and Sound, Projectors,
            Video conference facility, television and satellite
          </p>
        </div>
      </div>
    </div>



 {/* ------------------------------- Vanue part hall ----------------------------  */}
       <div className="max-w-6xl md:hidden  bg-white mx-auto px-6 py-10">
      {/* Section Heading */}
    

      {/* Flex Container */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/img/banquet/party-venue.jpg"
            alt="Party Hall"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Text and Pricing */}
        <div className="w-full md:w-1/2  text-gray-800 space-y-5">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Party Venue in Delhi- Tomar Hospitality
      </h2>
          <p>
            Tomar Hospitality is incessantly working in “Delhi Hospitality Services” from last Ten Years. We make available birthday party hall in delhi, get together party hall, Budget Hotels Delhi, 3-Star Hotel, conference halls Delhi, Birthday Party Venue, D.J Party Hall, business hotel near karol bagh, business meeting hall, Conference Venue near karol bagh metro, Corporate Meeting Rooms, family get together party, Local Sightseeing Delhi, Car Rental services and Same Day Tours in Delhi at affordable Prices. In Karol Bagh, we have 3 Budget Hotels near Karol Bagh Metro Station named as: Hotel SPB 87, Hotel Universe Inn, Hotel Delhi Pride are Budget Hotels Karol Bagh, New Delhi.
          </p>

          
        </div>
      </div>
    </div>

     {/*---------------------- desktop ------------------ */}

     <div className=" hidden md:flex max-w-6xl bg-white mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Text and Pricing */}
    
        <div className="w-full md:w-1/2  text-gray-800 space-y-5">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        Party Venue in Delhi- Tomar Hospitality
      </h2>
          <p>
           Tomar Hospitality is incessantly working in “Delhi Hospitality Services” from last Ten Years. We make available birthday party hall in delhi, get together party hall, Budget Hotels Delhi, 3-Star Hotel, conference halls Delhi, Birthday Party Venue, D.J Party Hall, business hotel near karol bagh, business meeting hall, Conference Venue near karol bagh metro, Corporate Meeting Rooms, family get together party, Local Sightseeing Delhi, Car Rental services and Same Day Tours in Delhi at affordable Prices. In Karol Bagh, we have 3 Budget Hotels near Karol Bagh Metro Station named as: Hotel SPB 87, Hotel Universe Inn, Hotel Delhi Pride are Budget Hotels Karol Bagh, New Delhi
          </p>

         

         
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/img/banquet/party-venue.jpg"
            alt="Party Hall"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>
      </div>
    </div>



{/* ------------------------------ Seminars/ Training Hall in Delhi- Tomar Hospitality ------------------- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 p-6 lg:p-16 bg-white">
      {/* Left Image Section */}
      <div className="lg:w-1/2 md:h-[300px]">
        <Image
          src="/img/banquet/seminar.jpg"
          alt="Seminar Training Hall"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full md:h-[300px]"
        />
      </div>

      {/* Right Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Seminars/ Training Hall in Delhi - Tomar Hospitality
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
          We have small conference room capacity of 20 people avail for corporate event Hall in
          Delhi, company seminars, business meetings and projector conference. For students group
          party, company annual function and family party program we have big hall capacity 120
          peoples.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold text-gray-800 text-lg mb-2">Quick Contact</h3>
          <div className="flex items-center space-x-2 text-gray-800 mb-1">
            <FiPhoneCall className="w-5 h-5" />
            <span className="hover:text-[#c9955b]">+91 9899145516</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <FaMailBulk className="w-5 h-5" />
            <span className="hover:text-[#c9955b]">tomarhospitality@gmail.com</span>
          </div>
        </div>
      </div>
    </div>





{/* --------------------------------- Tomar Hospitality- Banquet Halls In Delhi -------------------------------- */}

 <div className="flex md:hidden flex-col lg:flex-row items-start justify-between gap-6 p-6 lg:p-16 bg-white">
     <div className="lg:w-1/2">
        <Image
          src="/img/banquet/banquet3.jpg"
          alt="Banquet Hall"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
     {/* Left Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Tomar Hospitality – Banquet Halls In Delhi
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
          Tomar Hospitality is known as the best event planner in Delhi and the top wedding planner
          in Delhi. We offer expert planning and premium hospitality services for all kinds of
          celebrations, whether it’s an anniversary party, birthday party, or grand wedding. Contact
          us for hassle-free booking of banquet halls, party halls, birthday party halls, and
          marriage halls at Hotel SPB 87, Karol Bagh. We provide complete decoration, catering, and
          event service packages at the most affordable rates.
          <br /><br />
          Whether you're looking for a luxury hall or a small gathering space, we ensure a perfect
          event setup in Delhi with our professional team.
        </p>

        <div className="mt-4">
          <div className="flex items-center space-x-2 text-gray-800 mb-1">
            <TbPhoneCall className="w-5 h-5" />
            <span className="hover:text-[#cc985e]">+91 9899145516</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <FaMailchimp className="w-5 h-5" />
            <span className="hover:text-[#ce9657]">tomarhospitality@gmail.com</span>
          </div>
        </div>
      </div>


      
    </div>


 {/* --------------- desktop ------------------------------- */}
 <div className=" hidden md:flex flex-col-reverse lg:flex-row items-start justify-between gap-6 p-6 lg:p-16 bg-white">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Tomar Hospitality – Banquet Halls In Delhi
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
          Tomar Hospitality is known as the best event planner in Delhi and the top wedding planner
          in Delhi. We offer expert planning and premium hospitality services for all kinds of
          celebrations, whether it’s an anniversary party, birthday party, or grand wedding. Contact
          us for hassle-free booking of banquet halls, party halls, birthday party halls, and
          marriage halls at Hotel SPB 87, Karol Bagh. We provide complete decoration, catering, and
          event service packages at the most affordable rates.
          <br /><br />
          Whether you're looking for a luxury hall or a small gathering space, we ensure a perfect
          event setup in Delhi with our professional team.
        </p>

        <div className="mt-4">
          <div className="flex items-center space-x-2 text-gray-800 mb-1">
            <TbPhoneCall className="w-5 h-5" />
            <span className="hover:text-[#cc985e]">+91 9899145516</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <FaMailchimp className="w-5 h-5" />
            <span className="hover:text-[#ce9657]">tomarhospitality@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2">
        <Image
          src="/img/banquet/banquet3.jpg"
          alt="Banquet Hall"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
    </div>


 {/* -------------------------------------- Meeting Halls in Delhi- Tomar Hospitality ------------------------ */}
    <div className="flex  flex-col lg:flex-row items-start justify-between gap-6 p-6 lg:p-16 bg-white">
     <div className="lg:w-1/2">
        <Image
          src="/img/banquet/meeting-hall.jpg"
          alt="Banquet Hall"
          width={800}
          height={600}
          className="rounded-xl shadow-lg w-full h-auto"
        />
      </div>
     {/* Left Text Section */}
      <div className="lg:w-1/2">
        <h2 className="text-xl md:text-2xl font-bold text-black mb-4">
          
           Meeting Halls in Delhi- Tomar Hospitality
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
         Meeting Halls Delhi- We take part in event planning like festival, ceremony, competition, party, concert, or convention. Event planning can include budgeting, establishing dates and alternate dates, selecting and reserving the event site, acquiring permits (alcohol permits, insurance licenses, etc), coordinating transportation and parking, developing a theme or motif for the event, arranging for speakers and alternate speakers, coordinating location support (such as electricity and other utilities), and arranging decor, event support and security, catering, emergency plans, aid stations, and cleanup. Event management is the application of project management to this process.
        </p>

        <div className="mt-4">
          <div className="flex items-center space-x-2 text-gray-800 mb-1">
            <TbPhoneCall className="w-5 h-5" />
            <span className="hover:text-[#cc985e]">+91 9899145516</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-800">
            <FaMailchimp className="w-5 h-5" />
            <span className="hover:text-[#ce9657]">tomarhospitality@gmail.com</span>
          </div>
        </div>
      </div>


      
    </div>




{/* --------------------------------------------Banquet hall in delhli --------------------------- */}
  <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-6 p-6 lg:p-16 bg-white">
      {/* Left Text & Table */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          Tomar Hospitality – Banquet Halls In Delhi
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
          Tomar Hospitality plans the best events in Hotel SPB 87 for festivals, competitions,
          parties, ceremonies and concerts. The arrangement and the planning for the day are done
          by Tomar Hospitality which looks after the needs of the clients.
        </p>

        <h3 className="font-semibold  text-gray-800 text-lg mb-2">Planning Includes:</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <tbody>
              <tr className="bg-gray-100">
                <td className="border font-bold text-gray-800  border-gray-300 px-3 py-2">Budgeting</td>
                <td className="border font-bold text-gray-800  border-gray-300 px-3 py-2">Establishing dates</td>
              </tr>
              <tr>
                <td className="border font-semibold text-gray-800 border-gray-300 px-3 py-2">Alternative dates</td>
                <td className="border border-gray-300 text-gray-600 px-3 py-2">Selection of texture and fabric</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border font-semibold text-gray-800 border-gray-300 px-3 py-2">Reservation of the site</td>
                <td className="border border-gray-300 text-gray-600  px-3 py-2">Deciding the theme of the event</td>
              </tr>
              <tr>
                <td className="border font-semibold text-gray-800 border-gray-300 px-3 py-2">Coordination with guests</td>
                <td className="border border-gray-300 text-gray-600  px-3 py-2">Catering facility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 md:h-[350px]">
        <Image
          src="/img/banquet/meeting-room.jpg"
          alt="Banquet Planning"
          width={800}
          height={600}
          className="rounded-xl shadow-lg md:h-[350px] h-auto"
        />
      </div>
    </div>

{/* ------------------------------------   Menu section ---------------------------------- */}
                    <Table/>

    </>
  );
}
