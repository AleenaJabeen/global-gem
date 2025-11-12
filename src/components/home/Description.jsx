import React from "react";

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
      <hr className="w-full text-[#CEDADF]" />
      <div className="font-[Mulish] flex flex-col gap-4 text-[#6B7280] text-sm my-4">
        <h2 className="font-[Inter] text-black font-medium text-2xl">
          Activity
        </h2>
        <p className="text-base text-black font-medium">What you will do</p>
        <div className="pl-5">
          <li>
            Discover London on board a classic Routemaster vintage double decker
            bus
            <li>Cruise down the River Thames</li>
            <li>See the Changing of the Guard</li>
            <li>Go to Westminster Abbey</li>
            <li>
              Listen to the chimes of Big Ben and see the Houses of Parliament
            </li>
          </li>
        </div>
      </div>
    </>
  );
}

export default Description;
