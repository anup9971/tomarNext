// components/Reviews.js
export default function Reviews({ reviews = null }) {
  // Default demo data (you can pass your own via props)
  const data =
    reviews ??
    [
      {
        name: "Keshav Dutt",
        text:
          "We reserved the hall for a modest family gathering. Everything went without a hitch. The food was delicious, and the service.",
        avatar: "/img/cus1.jpg",
      },
      {
        name: "Aryan",
        text:
          "Being close to the metro makes the location extremely convenient. The rooms were comfortable and well-kept. Overall, good value.",
        avatar: "/img/cus2.jpg",
      },
      {
        name: "Vijay Raj Singh",
        text:
          'I stayed here on a business trip; the rooms were clean, the staff was helpful, and the hotel was well-run. I would highly recommend.',
        avatar: "/img/cus3.jpg",
      },
      {
        name: "Prem Malhotra",
        text:
          "I thought the event area was set up well. We had what we needed, including a projector, microphone, and comfortable seats.",
        avatar: "/img/cus41.jpg",
      },
    ];

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center px-4 mb-12">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-16 h-[1px] bg-[#b18b5e] inline-block"></span>
          <p className="text-sm uppercase tracking-wider text-[#b18b5e]">
            Our Guest
          </p>
          <span className="w-16 h-[1px] bg-[#b18b5e] inline-block"></span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#b18b5e]">Review</h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((r, i) => (
            <article
              key={i}
              className="relative bg-white border rounded-md shadow-md p-8 text-center"
            >
              {/* Avatar */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <img
                  src={r.avatar}
                  alt={`${r.name} avatar`}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm"
                />
              </div>

              {/* Spacer for avatar overlap */}
              <div className="h-6"></div>

              {/* Quote icon */}
              <div className="mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-green-600 inline-block"
                >
                  <path
                    d="M7.2 11.6C5.6 11.6 4.4 10.4 4.4 8.8 4.4 7.2 5.6 6 7.2 6 8.8 6 10 7.2 10 8.8 10 10.4 8.8 11.6 7.2 11.6ZM17.2 11.6C15.6 11.6 14.4 10.4 14.4 8.8 14.4 7.2 15.6 6 17.2 6 18.8 6 20 7.2 20 8.8 20 10.4 18.8 11.6 17.2 11.6Z"
                    fill="#16a34a"
                    opacity="0.95"
                  />
                </svg>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{r.name}</h3>

              {/* Review text */}
              <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
