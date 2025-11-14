import React from "react";
import { TbLeaf } from "react-icons/tb";
import {
  air,
  bicycle,
  dryer,
  kitchen,
  leaf,
  pets,
  refrigerator,
  security,
  washer,
  wifi,
} from "../../assets";
import Calendar from "./Calendar";

function Description() {
  return (
    <>
      <div className="font-[Mulish] flex flex-col gap-4 text-[#6B7280] text-sm mb-2">
        <h2 className="font-[Inter] text-black font-medium text-2xl">
          Description
        </h2>
        <p>
          See the highlights of London via 2 classic modes of transport on this
          half-day adventure. First, you will enjoy great views of Westminster
          Abbey, the Houses of Parliament, and the London Eye, as you meander
          through the historic streets on board a vintage double decker bus.
        </p>
        <p>
          Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s
          architectural masterpiece, where Admirals Nelson and Wellington are
          buried, and Princess Diana and Prince Charles got married. Continue to
          the Tower of London, built nearly 1,000 years ago during the reign of
          William the Conqueror.
        </p>
        <p>
          Home to the Crown Jewels, the Tower is protected by the famous
          Beefeaters, and the imposing palace has been used as a fortress and a
          prison throughout its history. Your guide will take you to Traitors
          Gate, where prisoners entered the Tower for the last time.
        </p>
        <p>
          Next, take a short trip along the River Thames, passing Shakespeare’s
          Globe, Cleopatra’s Needle, and London Bridge, before arriving at
          Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make
          your way to the perfect spot to watch the world famous Changing of the
          Guard ceremony as the soldiers, dressed in their fabulous tunics and
          busbies, march to military music.
        </p>
      </div>
      <hr className="w-full text-[#CEDADF] mt-4 mb-4" />
      {/* Activity */}
      <div className="font-[Mulish] flex flex-col gap-4 text-[#6B7280] text-sm my-4">
        <h2 className="font-[Inter] text-black font-medium text-2xl">
          Activity
        </h2>
        <p className="text-base text-black font-medium">What you will do</p>
        <div className="font-[Mulish] pl-5">
          <li className="mb-1">
            Discover London on board a classic Routemaster vintage double decker
            bus{" "}
          </li>
          <li className="mb-1">Cruise down the River Thames</li>
          <li className="mb-1">See the Changing of the Guard</li>
          <li className="mb-1">Go to Westminster Abbey</li>
          <li className="mb-1">
            Listen to the chimes of Big Ben and see the Houses of Parliament
          </li>
        </div>
      </div>
      {/* What this place offers */}
      <hr className="w-full text-[#CEDADF] mt-4 mb-4" />
      <div className="font-[Mulish] flex flex-col gap-4 text-[#6B7280] text-sm my-4">
        <h2 className="font-[Inter] text-black font-medium text-2xl">
          What this place offers
        </h2>
        <div className="w-full flex md:flex-row flex-col items-start md:gap-20  gap-2">
          <div className="font-[Mulish]">
            <p className="mb-2 flex items-center gap-2">
              <img src={leaf} alt="leaf" /> Garden view
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={wifi} alt="Wifi" />
              Wifi
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={washer} alt="Washing machine" />
              Free washer-in building
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={air} alt="Air conditioner" />
              Central air conditioning
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={refrigerator} alt="Refrigerator" />
              Refrigerator
            </p>
          </div>
          <div>
            <p className="mb-2 flex items-center gap-2">
              <img src={kitchen} alt="" />
              Kitchen
            </p>
            <p className="mb-2 flex items-center gap-2">
              {" "}
              <img src={pets} alt="Pets" />
              Pets allowed
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={dryer} alt="Dryer" />
              Dryer
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={security} alt="Camera" />
              Security cameras on property
            </p>
            <p className="mb-2 flex items-center gap-2">
              <img src={bicycle} alt="bicycle" />
              Bicycles
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full text-[#CEDADF] mt-4 mb-4" />

      {/* Safety */}
      <div className="font-[Mulish] flex flex-col gap-4 text-[#6B7280] text-sm my-4">
        <h2 className="font-[Inter] text-black font-medium text-2xl">Safety</h2>
        <p className="text-base text-black font-medium">Health precautions</p>
        <div className=" font-[Mulish] pl-5">
          <li className="mb-1">
            All required protective equipment is provided
          </li>
          <li className="mb-1">
            All areas that customers touch are frequently cleaned
          </li>
          <li className="mb-1">
            You must keep social distance while in vehicles
          </li>
          <li className="mb-1">
            The number of visitors is limited to reduce crowds
          </li>
        </div>
      </div>
      <hr className="w-full text-[#CEDADF] mt-4 mb-4" />

      {/* Details */}
      <div className="font-[Mulish] flex flex-col gap-4 text-[#6B7280] text-sm my-4">
        <h2 className="font-[Inter] text-black font-medium text-2xl">
          Details
        </h2>
        <div className="flex sm:flex-row flex-col items-start sm:gap-16 gap-5">
          <div className="flex flex-col">
            <p className="text-base text-black font-medium mb-2">Language</p>
            <div className="pl-4">
              <li className="mb-2">English</li>
              <li className="mb-2">French</li>
            </div>
          </div>
          <div>
            <p className="text-base text-black font-medium mb-2">Duration</p>
            <div className="pl-4">
              <li className="mb-1">2 hours</li>
            </div>
          </div>
          <div>
            <p className="text-base text-black font-medium mb-2">Number of people</p>
            <div className="pl-4">
              <li className="mb-1">5 People</li>
            </div>
          </div>
        </div>
      </div>
       <hr className="w-full text-[#CEDADF] mt-4 mb-4" />
       <Calendar/>
    </>
  );
}

export default Description;
