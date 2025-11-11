// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

// const destinations = [
//   {
//     title: "Nusa Penida Beach",
//     location: "Bali, Indonesia",
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Nusa Penida Beach",
//     location: "Bali, Indonesia",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Nusa Penida Beach",
//     location: "Bali, Indonesia",
//     image:
//       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Nusa Penida Beach",
//     location: "Bali, Indonesia",
//     image:
//       "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const DestinationCard = ({ title, location, image }) => (
//   <div className="relative min-w-[250px] sm:min-w-[300px] md:min-w-[350px] rounded-2xl overflow-hidden group transition-all duration-300">
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
//     <div className="absolute top-3 right-3 bg-white/30 backdrop-blur-md p-2 rounded-full cursor-pointer">
//       <Heart size={18} className="text-white" />
//     </div>
//     <div className="absolute bottom-4 left-4 text-white">
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-sm text-gray-200">{location}</p>
//     </div>
//   </div>
// );

// const PopularDestinations = () => {
//   const scrollRef = useRef();

//   const scroll = (direction) => {
//     if (!scrollRef.current) return;
//     const { scrollLeft, clientWidth } = scrollRef.current;
//     const scrollTo =
//       direction === "left"
//         ? scrollLeft - clientWidth
//         : scrollLeft + clientWidth;
//     scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12 relative">
//       <p className="text-gray-500 text-sm mb-2">Popular Destination</p>
//       <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
//         Popular Destination Of <br /> This Year For You
//       </h2>

//       <div className="relative">
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
//         >
//           {destinations.map((item, index) => (
//             <div key={index} className="snap-start">
//               <DestinationCard {...item} />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => scroll("left")}
//           className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
//         >
//           <ChevronLeft size={20} />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
//         >
//           <ChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PopularDestinations;
