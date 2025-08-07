"use client"

const vegItems = [
  'Spring Roll',
  'Chilli Paneer',
  'Chilli Potato',
  'Aloo Roll',
  'Cutlet Roll',
  'Finger Chips',
  'Harabhara Kaba',
  'Mix Veg. Pakoda',
  'Veg. Sandwich',
  'Dry Veg. Manchurian',
  'Paneer Tikaa',
  'Including - Tea, Coffee + Soft Drink',
];
const nonVegItems = [
  'Chilli Chicken',
  'Chicken Pakoda',
  'Shikh Kabab',
  'Tandoori Chicken',
  'Chicken Tikaa',
  
];

const Table = () => {
const vegMenuDown = () => {
    const link = document.createElement('a');
    link.href = '/menu/Tomar-Hospitality-Veg.-Menu.pdf'; // Path to PDF in public folder
    link.download = 'Tomar-Hospitality-Veg.-Menu.pdf'; // Desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const nonVegMenuDown = () => {
    const link = document.createElement('a');
    link.href = '/menu/Tomar-Hospitality-Non-Veg.Menu.pdf'; // Path to PDF in public folder
    link.download = 'Tomar-Hospitality-Non-Veg.Menu.pdf'; // Desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <>
     <div className="p-4 sm:p-6 md:p-10 bg-white shadow-md max-w-7xl mx-auto my-10 rounded-lg">
      {/* Header */}
      <h2 className="text-center text-xl md:text-2xl text-gray-800 font-semibold mb-6">
        <sup className="text-orange-500 ">______</sup>
        Wedding <span className="text-green-700 font-bold">Veg.</span>{' '}
        <span className="text-gray-900 font-bold">Food Menu</span>
        <sup className="text-orange-500">______ </sup>

      </h2>

      {/* Section Title */}
      <h3 className="  text-gray-800 font-bold text-sm md:text-base underline mb-3">
        Veg. Snacks: (Select any Four)
      </h3>

      {/* List */}
      <ul className="border border-gray-400 divide-y divide-gray-300 text-sm md:text-base">
        {vegItems.map((item, index) => (
          <li key={index} className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
            {item}
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-6 text-center">
        <button onClick={vegMenuDown} className="bg-[#b97e43] text-white px-6 py-2 text-sm uppercase font-medium rounded hover:bg-[#a76b2d] transition">
          View Menu
        </button>
      </div>
    </div>



    {/* --------------------------- Non Veg. Second table ------------------------------ */}
       <div className="p-4 sm:p-6 md:p-10 bg-white shadow-md max-w-7xl mx-auto my-10 rounded-lg">
      {/* Header */}
      <h2 className="text-center text-xl md:text-2xl text-gray-800 font-semibold mb-6">
        <sup className="text-orange-500 ">___</sup>
        Wedding <span className="text-red-700 font-bold">Non-Veg.</span>{' '}
        <span className="text-gray-800 font-bold">Food Menu</span>
        <sup className="text-orange-500">___ </sup>

      </h2>

      {/* Section Title */}
      <h3 className="  text-gray-800 font-bold text-sm md:text-base underline mb-3">
        Veg. Snacks: (Select any Four)
      </h3>

      {/* List */}
      <ul className="border border-gray-400 divide-y divide-gray-300 text-sm md:text-base">
        {nonVegItems.map((item, index) => (
          <li key={index} className="px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200">
            {item}
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-6 text-center">
        <button onClick={nonVegMenuDown} className="bg-[#b97e43] text-white px-6 py-2 text-sm uppercase font-medium rounded hover:bg-[#a76b2d] transition">
          View Menu
        </button>
      </div>
    </div>
  
  </>
  );
};

export default Table;
