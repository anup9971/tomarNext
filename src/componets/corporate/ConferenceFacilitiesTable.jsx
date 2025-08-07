import React from "react";

export default function ConferenceFacilitiesTable() {
  const data = [
    {
      mode: "Theatre Sitting Mode about 100-110 People",
      facility: "Meals (Veg & Non-Veg).",
    },
    {
      mode: "Cluster Sitting Mode 80-90 People.",
      facility: "Laptop with Wi-Fi, Sound systems.",
    },
    {
      mode: "Class Room Sitting Mode 90-100 People.",
      facility: "Slide projector with screen.",
    },
    {
      mode: "Board Room Sitting Mode 20-30 People.",
      facility: "Video conferencing system.",
    },
    {
      mode: "U-Shape Sitting Mode 50-60 People.",
      facility: "Overhead projector with screen.",
    },
    {
      mode: "Banquet Hall Sitting Mode 90-100 people.",
      facility: "Television with satellite channels.",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white px-4 py-10">
      <table className="min-w-full border border-gray-600">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="px-4 py-3 font-semibold text-sm w-2/3">
              Different Mode of Conference / Meeting Hall Sitting Arrangement
            </th>
            <th className="px-4 py-3 font-semibold text-sm">Facilities Available</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 text-gray-800 py-2 text-sm">{row.mode}</td>
              <td className="px-4  text-gray-600 py-2 text-sm">{row.facility}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
