// BecomeAHost.jsx
import { send, login, users, becomehost, switzerland, host3, host1, host2 } from "../../assets";
import { LuMapPin } from "react-icons/lu";
import { IoIosStar, IoMdCheckmark } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export default function BecomeAHost() {
  return (
    <section className="font-[Mulish] w-full px-4 sm:px-8 lg:px-16 py-10">
      <h2 className="text-2xl font-[Inter] sm:text-[36px] lg:text-4xl font-semibold mb-8">
        Why become a Host?
      </h2>

      <div className="flex items-stretch justify-center gap-6 mb-12">
        {/* LEFT CARD */}
        <div className="w-1/2 relative  rounded-[20px] overflow-hidden">
           <div className="absolute bg-[#96CCFF] inset-0 -z-10">
                 <img
                   src={becomehost}
                   alt=""
                   className="w-full h-full object-cover"
                 />
                 {/* Overlay only on image */}
                 <div className="absolute inset-0 bg-black/60"></div>
               </div>
          <div className="relative p-6 sm:p-10 flex flex-col justify-center">
            <h3 className="text-white text-2xl sm:text-[33px] font-bold mb-4">
              Earn Doing What You Love
            </h3>
            <p className="text-white font-semibold text-sm sm:text-base mb-6 max-w-md">
              Do you know the best sunrise spot in your city? The perfect day
              trip from your town? Join our host community and help others
              experience your area like a local
            </p>

            <ul className="text-[#FFFFFFBF] text-sm font-semibold sm:text-base space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <IoMdCheckmark className="w-4 h-4 text-[#9999A7]" /> Flexible
                scheduling
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark className="w-4 h-4 text-[#9999A7]" /> Share your
                favorite spots
              </li>
              <li className="flex items-center gap-2">
                <IoMdCheckmark className="w-4 h-4 text-[#9999A7]" /> Every plan
                you list can be booked by travelers
              </li>
            </ul>

            <button className="bg-white text-[#141414] text-base font-extrabold px-6  py-3 rounded-full shadow-md shadow-[#1F293714] w-fit hover:bg-gray-200 transition">
              Become a Host
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-1/2 relative rounded-[20px] overflow-hidden h-auto">
          <img
            src={switzerland}
            className="w-full h-auto"
            alt=""
          />

          <span className="absolute top-4 left-4 text-white bg-[#00000026] px-4 py-1 rounded-full text-base font-extrabold">
            Switzerland
          </span>

          {/* HOST TAGS */}
          <div className="absolute top-10 right-6  px-3 py-2 rounded-xl flex flex-col items-center gap-2">
            <div className="bg-white p-2 px-5s rounded-[8px] font-[Inter]">
              <p className="font-[Mulish] text-lg font-bold">Wayan S.</p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
               <IoShieldCheckmarkOutline className="text-[#00C48C]  font-extrabold text-lg" /> Verified Guide 
              </p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]"><IoIosStar className="text-[#FFB906] text-lg" />167 reviews</p>
            </div>
              <div className="bg-white p-1 rounded-full">
            <img
             src={host3}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            </div>
          </div>

          <div className="absolute bottom-24 left-6 px-3 py-2 rounded-xl flex flex-col items-center gap-2">
            <div className="bg-white p-2 px-5s rounded-[8px] font-[Inter]">
              <p className="font-[Mulish] text-lg font-bold">Emmie K.</p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
               <IoShieldCheckmarkOutline className="text-[#00C48C]  font-extrabold text-lg" /> Verified Guide 
              </p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]"><IoIosStar className="text-[#FFB906] text-lg" />167 reviews</p>
            </div>
              <div className="bg-white p-1 rounded-full">
            <img
             src={host1}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            </div>
          </div>

          <div className="absolute bottom-10 right-10 px-3 py-2 rounded-xl flex flex-col gap-5 items-center gap-2">
          
            <div className="bg-white p-2 px-5s rounded-[8px] font-[Inter]">
              <p className="font-[Mulish] text-lg font-bold">Alina Jones</p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
               <IoShieldCheckmarkOutline className="text-[#00C48C]  font-extrabold text-lg" /> Verified Guide 
              </p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]"><IoIosStar className="text-[#FFB906] text-lg" />167 reviews</p>
            </div>
              <div className="bg-white p-1 rounded-full">
            <img
             src={host2}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex items-center gap-2  py-6 text-center px-4">
          <LuMapPin className="w-8 h-8 mb-2" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="text-[33px] font-bold">50K+</p>
            <p className="text-base font-extrabold">Locations</p>
          </div>
        </div>

        <div className="flex items-center gap-2  py-6 text-center px-4">
          <img src={login} alt="Login" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="text-[33px] font-bold">50K+</p>
            <p className="text-base font-extrabold">Check in</p>
          </div>
        </div>

        <div className="flex items-center gap-2  py-6 text-center px-4">
          <img src={send} alt="Send icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="text-[33px] font-bold">50K+</p>
            <p className="text-base font-extrabold">Travelers</p>
          </div>
        </div>

        <div className="flex items-center gap-2  py-6 text-center px-4">
          <img src={users} alt="User Icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="text-[33px] font-bold">50K+</p>
            <p className="text-base font-extrabold">Hosts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
