import { useState } from "react";
import ListingCard from "./ListingCard";
import { MdArrowDropDown } from "react-icons/md";
import { listing1, listing2, listing3 } from "../../assets";

export default function ListingPage({ query }) {
  const data = [
    {
      id: 1,
      title: "Bordeaux Retreat",
      subtitle: "Charming villa in Bordeaux",
      rating: 4.9,
      reviews: 315,
      price: 350,
      img: listing1,
      location: "Bordeaux",
      category: "Nature & Wildlife",
    },
    {
      id: 2,
      title: "Lakeside Condo Retreat",
      subtitle: "Stylish home in Bordeaux",
      rating: 4.9,
      reviews: 315,
      price: 210,
      img: listing2,
      location: "Bordeaux",
      category: "Spas",
    },
    {
      id: 3,
      title: "Central Bordeaux Residence",
      subtitle: "Cozy apartment in Bordeaux",
      rating: 4.8,
      reviews: 310,
      price: 130,
      img: listing3,
      location: "Bordeaux",
      category: "Nightlife",
    },
    {
      id: 4,
      title: "Downtown Bordeaux Apartment",
      subtitle: "Modern flat in Bordeaux",
      rating: 4.9,
      reviews: 315,
      price: 130,
      img: listing2,
      location: "Bordeaux",
      category: "Shopping",
    },
  ];

  const [filters, setFilters] = useState({
    location: "",
    adults: 0,
    children: 0,
    price: [500, 5000],
    sort: "popularity",
    selectedCategories: [],
  });

  const categoryList = [
    "Food",
    "Cultural Festivals",
    "Spas",
    "Nature & Wildlife",
    "Historical Sites",
    "Adventure Sports",
    "Secret Nature",
    "Beaches",
    "Nightlife",
    "Shopping",
  ];

  const [showMore, setShowMore] = useState(false);

  const handleCategoryChange = (category) => {
    const selected = filters.selectedCategories.includes(category)
      ? filters.selectedCategories.filter((c) => c !== category)
      : [...filters.selectedCategories, category];

    setFilters({ ...filters, selectedCategories: selected });
  };

  // 🔥 FINAL FILTER LOGIC (includes category selection)
  const filteredCards = data
    .filter((item) => {
      // Filter price
      const priceMatch =
        item.price >= filters.price[0] && item.price <= filters.price[1];

      // Filter category (if any selected)
      const categoryMatch =
        filters.selectedCategories.length === 0 ||
        filters.selectedCategories.includes(item.category);

      return priceMatch && categoryMatch;
    })
    .sort((a, b) => {
      if (filters.sort === "price_low") return a.price - b.price;
      if (filters.sort === "price_high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="font-[Mulish] px-6 py-4 lg:px-16 md:h-[120vh] md:overflow-hidden ">
      <div className="w-full flex sm:flex-row sm:justify-between flex-col sm:items-center mb-4">
        <div className="flex flex-col">
          <h2 className="text-3xl text-black font-medium">
            Things to do in Bali
          </h2>
          <p className="text-[#6B7280] text-sm">49 activities found</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium text-base">Sort by:</p>
          <div className="relative px-4">
            <select
              className="border border-[#E5E5EA] font-medium text-base focus:outline-none rounded-full p-2 pr-12 rounded appearance-none"
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
            >
              <option value="popularity">Popularity</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
            </select>
            <MdArrowDropDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#778088] text-2xl pointer-events-none" />
          </div>
        </div>
      </div>

      {/* 🔥 LEFT FIXED + RIGHT SCROLL */}
      <div className="flex flex-col lg:flex-row gap-6 md:h-[80vh] h-full">
        
        {/* LEFT FILTERS FIXED HEIGHT */}
        <div className="font-[Mulish] w-full lg:w-1/4 space-y-6 md:overflow-y-auto no-scrollbar pr-2 border-r border-gray-200">
          <h2 className="text-xl font-semibold text-[#1C2B38] p-2">
            Filter By
          </h2>

          {/* LOCATION */}
          <div>
            <label className="block mb-1 text-[#1C2B38] font-bold text-[15px]">
              Location
            </label>
            <input
              className="w-full border border-[#1F1F1F] pl-3 focus:outline-none text-[#495560] font-semibold text-sm p-2 rounded-full"
              placeholder="Bali"
              value={filters.location || query}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            />
          </div>

          {/* ADULTS + CHILDREN */}
          <div className="flex gap-4">
            <div className="flex flex-col border rounded-full border-[#E5E5EA] px-3 py-1">
              <label className="block text-xs font-bold text-black">
                Adults
              </label>
              <input
                type="number"
                className="w-full text-[#6B7280] text-sm focus:outline-none"
                value={filters.adults}
                onChange={(e) =>
                  setFilters({ ...filters, adults: Number(e.target.value) })
                }
              />
            </div>

            <div className="flex flex-col border rounded-full border-[#E5E5EA] px-3 py-1">
              <label className="block text-xs font-bold text-black">
                Children
              </label>
              <input
                type="number"
                className="w-full text-[#6B7280] text-sm focus:outline-none"
                value={filters.children}
                onChange={(e) =>
                  setFilters({ ...filters, children: Number(e.target.value) })
                }
              />
            </div>
          </div>

          {/* DATE PICKERS */}
          <div className="w-full flex flex-col gap-2  px-2">
            <div className="flex flex-col">
              <span className="block mb-1 text-[#1C2B38] font-bold text-[15px]">
                From:
              </span>
              <input
                type="date"
                className="w-full text-[#6B7280] border border-[#E5E5EA] rounded-full p-2 text-sm focus:outline-none appearance-none"
              />
            </div>
            <div className="flex flex-col">
              <span className="block mb-1 text-[#1C2B38] font-bold text-[15px]">
                To:
              </span>
              <input
                type="date"
                className="w-full text-[#6B7280] border border-[#E5E5EA] rounded-full p-2 text-sm focus:outline-none appearance-none"
              />
            </div>
          </div>

          {/* PRICE RANGE */}
          <div>
            <div className="w-full flex items-center justify-between">
              <label className="text-nowrap text-[#1C2B38] font-bold text-[15px]">
                Price Range
              </label>
              <div className="flex items-center text-black text-base font-medium">
                <span>${filters.price[0]}</span>
                <span>-</span>
                <span>{filters.price[1]}</span>
              </div>
            </div>

            {/* SLIDER */}
            <div className="relative w-full mt-4 mb-6">
              <div className="absolute top-1/2 -translate-y-1/2 w-full h-[4px] bg-gray-300 rounded-full"></div>

              <div
                className="absolute top-1/2 -translate-y-1/2 h-[4px] bg-[#9999A7] rounded-full"
                style={{
                  left: `${(filters.price[0] / 20000) * 100}%`,
                  right: `${100 - (filters.price[1] / 20000) * 100}%`,
                }}
              />

              <input
                type="range"
                min="0"
                max="20000"
                value={filters.price[0]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    price: [Number(e.target.value), filters.price[1]],
                  })
                }
                className="absolute -top-2 w-full pointer-events-none appearance-none bg-transparent"
                style={{
                  zIndex: filters.price[0] > filters.price[1] - 500 ? 5 : 3,
                }}
              />

              <input
                type="range"
                min="0"
                max="20000"
                value={filters.price[1]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    price: [filters.price[0], Number(e.target.value)],
                  })
                }
                className="absolute -top-2 w-full pointer-events-none appearance-none bg-transparent"
                style={{ zIndex: 4 }}
              />

              <style>{`
                  input[type=range]::-webkit-slider-thumb {
                    pointer-events: auto;
                    -webkit-appearance: none;
                    height: 18px;
                    width: 18px;
                    background: white;
                    border: 3px solid #6B7280;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                `}</style>
            </div>
          </div>

          {/* CHECK AVAIL BUTTON */}
          <button className="w-full mt-4 py-3 bg-black text-sm font-[Inter] font-medium text-white rounded-full">
            Check Availability
          </button>

          {/* CATEGORY FILTER */}
          <div className="mt-4">
            <h3 className="font-[Mulish] text-[#1C2B38] font-bold text-lg">
              Categories
            </h3>

            <div className="mt-2 space-y-2">
              {(showMore ? categoryList : categoryList.slice(0, 7)).map(
                (cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 font-semibold text-sm text-[#495560]"
                  >
                    <input
                      type="checkbox"
                      checked={filters.selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                      className="w-4 h-4 accent-black"
                    />
                    {cat}
                  </label>
                )
              )}
            </div>

            <button
              className="text-[#7BBCB0] font-bold font-[Mulish] text-sm mt-2"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More Destinations"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — SCROLLING CARDS */}
        <div className="flex-1 md:overflow-y-auto no-scrollbar px-2">
          <h2 className="font-[Inter] text-[#6B7280] text-base px-2">
            200+ stays in Bordeaux
          </h2>

          <div className="grid grid-cols-1 gap-6 mt-4 pb-20">
            {filteredCards.map((item) => (
              <ListingCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
