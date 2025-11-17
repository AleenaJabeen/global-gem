import { success, verify } from "../../assets";

function BookingSuccessful() {
  return (
    <div className="font-[Poppins] fixed inset-0 z-50 flex items-center justify-center bg-[#1F1F1F70] bg-opacity-80">
      <div className="lg:p-2 p-5 flex items-center justify-center bg-white max-w-[644px] xl:w-[644px] md:w-[75vw] w-[85vw] h-[80vh] border-[0.69px] border-[#8B909F26] rounded-[10px] shadow-xl flex-col overflow-y-scroll no-scrollbar text-white">
        <div className="w-[208px] h-[208px] relative bg-gray-200 flex items-center justify-end rounded-full p-6 overflow-hidden">
          <div className="absolute bottom-0">
            <img src={success} alt="Booking successful" className="relative" />
            <img
              src={verify}
              alt="Verify"
              className="absolute -top-4 -right-5 "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[#1C1C1E] font-[Inter] font-bold md:text-[28px] text-xl">
            Booking successful!
          </h3>
          <p className="text-[#9999A7] font-[Inter] text-sm font-medium">
            Confirmation details have been sent to your email.
          </p>
        </div>
        <div className="w-[75%] mx-auto pt-6 mb-4">
          <button
            type="submit"
            className="w-full bg-[#1F1F1F] text-white py-3 rounded-full text-lg font-[Inter] font-bold hover:bg-gray-800 transition"
          >
            See Your Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingSuccessful;
