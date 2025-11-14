import React, { useState } from "react";

export default function CustomerReviews() {
  const [filter, setFilter] = useState("Recommended");
  const [travelerType, setTravelerType] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [search, setSearch] = useState("");

  const allReviews = Array(4).fill({
    name: "Arlene McCoy",
    date: "2 October 2022",
    text: `The tour was very well organised. One minus is that you get completely bombarded with information. You also have to stand up for too long at the private entrance to the Tower of London, which leads to a lack of time later. Lunch was the same, too stress, the quality was great but you couldn’t enjoy it. I’d like to ask the organisers: please`,
    rating: 4,
  });

  const reviews = allReviews.filter((r) => {
    const matchRating = ratingFilter ? r.rating === Number(ratingFilter) : true;
    const matchSearch = search
      ? r.text.toLowerCase().includes(search.toLowerCase()) ||
        r.name.toLowerCase().includes(search.toLowerCase())
      : true;
    return matchRating && matchSearch;
  });

  return (
    <div className="p-4 md:p-10 max-w-6xl mx-auto font-sans">
      <h2 className="text-2xl font-semibold mb-2">Customer Review</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <div className="text-3xl font-bold">4.5</div>
          <p className="text-sm text-gray-500">273 Reviews</p>
          <p className="text-sm font-medium mt-1">88% Recommended</p>
        </div>

        <div className="w-full md:w-1/2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 mb-1">
              <span className="text-sm w-4">{star}</span>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div className="h-full bg-black rounded" style={{ width: `${Math.random() * 90 + 10}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <select
          className="border p-2 rounded w-full md:w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>Recommended</option>
          <option>Newest</option>
          <option>Oldest</option>
        </select>

        <select
          className="border p-2 rounded w-full md:w-auto"
          value={travelerType}
          onChange={(e) => setTravelerType(e.target.value)}
        >
          <option value="">Traveler type</option>
          <option>Solo</option>
          <option>Couple</option>
          <option>Family</option>
        </select>

        <select
          className="border p-2 rounded w-full md:w-auto"
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        >
          <option value="">Rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
        </select>

        <input
          type="text"
          placeholder="Search Here"
          className="border p-2 rounded w-full md:flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="border-b pb-4">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://via.placeholder.com/50"
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-gray-500">Verified User</p>
                <p className="text-xs text-gray-500">{r.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              {Array(r.rating).fill(0).map((_, idx) => (
                <span key={idx}>⭐</span>
              ))}
            </div>

            <h3 className="font-semibold mb-2">Good tour, really well organised</h3>
            <p className="text-sm text-gray-600 leading-6">{r.text}</p>

            <div className="flex justify-end mt-2 text-sm text-gray-500">
              <span className="mr-1">Helpful?</span>
              <button className="text-black font-medium">Yes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
