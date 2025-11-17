// BecomeAHost.jsx
import {
  send,
  login,
  users,
  becomehost,
  switzerland,
  host3,
  host1,
  host2,
  location,
} from "../../assets";
import { IoIosStar, IoMdCheckmark } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";

export default function BecomeAHost() {
  return (
    <section className="font-[Mulish] w-full px-4 sm:px-8 lg:px-16 py-10">
      <h2 className="text-2xl font-[Inter] sm:text-[36px] lg:text-4xl font-semibold mb-8">
        Why become a Host?
      </h2>

      <div className="flex md:flex-row flex-col items-stretch justify-center gap-6 mb-12">
        {/* LEFT CARD */}
        <div className="md:w-1/2 w-full relative rounded-[20px] overflow-hidden flex flex-col">
          <div className="absolute bg-[#96CCFF] inset-0 -z-10">
            <img
              src={becomehost}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Overlay only on image */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative p-6 sm:p-10  flex flex-col justify-center">
            <h3 className="text-white text-2xl sm:text-[33px] font-bold mb-4 sm:pt-24 pt-12">
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

            <button className="cursor-pointer bg-white text-[#141414] text-base font-extrabold px-6  py-3 rounded-full shadow-md shadow-[#1F293714] w-fit hover:bg-gray-200 transition mb-8">
              Become a Host
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="md:w-1/2 w-full relative rounded-[20px] overflow-hidden flex flex-col">
          {/* Image should fill container height */}
          <div className="hidden md:block absolute inset-0">
            <img
              src={switzerland}
              className="w-fullh-full object-cover"
              alt=""
            />
          </div>
          <img
            src={switzerland}
            className="w-full md:hidden block h-fit object-cover"
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
                <IoShieldCheckmarkOutline className="text-[#00C48C]  font-extrabold text-lg" />{" "}
                Verified Guide
              </p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
                <IoIosStar className="text-[#FFB906] text-lg" />
                167 reviews
              </p>
            </div>
            <div className="relative bg-white p-1 rounded-full">
              <img src={host3} className="w-12 h-12 rounded-full" alt="" />
              <BsCaretDownFill className="absolute right-[1.22rem] -bottom-[1.35rem] -translate-y-1/2 text-white text-xl pointer-events-none" />
            </div>
          </div>

          <div className="absolute bottom-24 left-6 px-3 py-2 rounded-xl flex flex-col items-center gap-2">
            <div className="bg-white p-2 px-5s rounded-[8px] font-[Inter]">
              <p className="font-[Mulish] text-lg font-bold">Emmie K.</p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
                <IoShieldCheckmarkOutline className="text-[#00C48C]  font-extrabold text-lg" />{" "}
                Verified Guide
              </p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
                <IoIosStar className="text-[#FFB906] text-lg" />
                167 reviews
              </p>
            </div>
            <div className="relative bg-white p-1 rounded-full">
              <img src={host1} className="w-12 h-12 rounded-full" alt="" />
              <BsCaretDownFill className="absolute right-[1.22rem] -bottom-[1.35rem] -translate-y-1/2 text-white text-xl pointer-events-none" />
            </div>
          </div>
          <div className="absolute bottom-10 right-10 px-3 py-2 rounded-xl flex flex-col gap-5 items-center gap-2">
            <div className="bg-white p-2 px-5s rounded-[8px] font-[Inter]">
              <p className="font-[Mulish] text-lg font-bold">Alina Jones</p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
                <IoShieldCheckmarkOutline className="text-[#00C48C]  font-extrabold text-lg" />{" "}
                Verified Guide
              </p>
              <p className="flex items-center gap-1 text-xs text-[#9999A7]">
                <IoIosStar className="text-[#FFB906] text-lg" />
                167 reviews
              </p>
            </div>
            <div className="relative bg-white p-1 rounded-full">
              <img src={host2} className="w-12 h-12 rounded-full" alt="" />
              <BsCaretDownFill className="absolute right-[1.22rem] -bottom-[1.35rem] -translate-y-1/2 text-white text-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2">
        <div className="flex items-center gap-2  py-6 text-center md:px-4">
          <img src={location} alt="map icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px]  text-xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Locations</p>
          </div>
        </div>

        <div className="flex items-center gap-2  py-6 text-center md:px-4">
          <img src={login} alt="Login" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px] text-xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Check in</p>
          </div>
        </div>

        <div className="flex items-center gap-2  py-6 text-center md:px-4">
          <img src={send} alt="Send icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px] text-xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Travelers</p>
          </div>
        </div>

        <div className="flex items-center gap-2  py-6 text-center md:px-4">
          <img src={users} alt="User Icon" />
          <div className="flex flex-col text-[#1C1C1E]">
            <p className="md:text-[33px] text-2xl font-bold">50K+</p>
            <p className="text-base font-extrabold">Hosts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
