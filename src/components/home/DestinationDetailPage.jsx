import { FiMapPin } from "react-icons/fi";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { detail1, detail2, detail3 } from "../../assets";
import { HiMiniMapPin } from "react-icons/hi2";
import Description from "./Description";

export default function DestinationDetailPage() {
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins] bg-white min-h-screen flex flex-col items-center p-4 md:p-10">
      <div className="max-w-6xl w-full">
        {/* <button
          onClick={() => navigate(-1)}
          className="mb-4 text-gray-600 hover:text-black"
        >
          ← Back
        </button> */}

        <h1 className="font-[Mulish] text-[33px] md:text-4xl font-medium mb-2">
          Hidden Waterfalls of Ubud
        </h1>
        <div className="flex items-center text-black font-medium mb-4 text-sm md:text-base">
          <IoIosStar className="text-black" />
          <span className="ml-1">
            4.8 · <span className="underline">7 reviews</span> ·
          </span>
          <HiMiniMapPin className="mx-1 text-black" />
          <span className="underline">Ubud, Bali</span>
        </div>

        {/* Images */}
        <div className="flex md:flex-row flex-col items-start gap-4 mb-8">
             {/* Column 1 */}

              <div className="md:w-[72%]  w-full gap-2 flex flex-col">
                {/* Detail start images */} 

            <div className="flex items-stretch gap-2">
          <div className="w-[60%]">
            <img
              src={detail1}
              alt="Main"
              className="w-full h-full rounded-xl object-cover col-span-1 md:col-span-1"
            />
          </div>
          <div className="flex justify-between items-between  w-[40%] gap-3 flex-col h-full">
            <img
              src={detail2}
              alt="1"
              className="w-full  h-[50%]  object-cover rounded-xl"
            />
            <img
              src={detail3}
              alt="2"
              className="w-full   h-[50%]  object-cover rounded-xl"
            />
          </div>
          </div>
           {/* Details + Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="host"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-semibold">Wayan Suta</h2>
                <p className="text-gray-500 text-sm">Joined May 2021</p>
              </div>
            </div>

            <div className="text-gray-700 text-sm md:text-base">
              <p className="mb-2">
                🏠 Entire home · You’ll have the apartment to yourself
              </p>
              <p className="mb-2">🔑 Self check-in with keypad</p>
              <p className="mb-2">
                🧼 Enhanced Clean · 5-step cleaning process
              </p>
              <p className="mb-2">💰 Free cancellation before Feb 14</p>
            </div>
          </div>
        </div>
        {/* Description plus Activities */}
        <Description/>
          </div>
          {/* Column 2 */}
          <div className="font-[Mulish] md:w-[30%] w-full border border-[#E5E7EB] rounded-md shadow-lg p-5 h-fit">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl text-black font-bold">
                <span className="underline">$75 / </span>
                <span className="text-[#6B7280] font-normal text-sm">
                  person
                </span>
              </h3>
              <div className="flex items-center text-black">
                <IoIosStar />{" "}
                <span className="text-base font-medium ml-1">
                  4.8 .<span className="underline">7 reviews</span>
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
              <span>From:</span>
              <input type="date" className="border rounded p-1" />
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
              <span>To:</span>
              <input type="date" className="border rounded p-1" />
            </div>

            <div className="flex justify-between text-gray-700 text-sm mb-2">
              <span>$75 × 2 people</span>
              <span>$555</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm mb-2">
              <span>Discount</span>
              <span>-$28</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm mb-2">
              <span>Cleaning fee</span>
              <span>$62</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm mb-2">
              <span>Service fee</span>
              <span>$83</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm mb-3">
              <span>Taxes & fees</span>
              <span>$29</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-gray-900 mb-4">
              <span>Total</span>
              <span>$701</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900">
              Book Now
            </button>
          </div>
        </div>

       
      </div>
    </div>
  );
}
