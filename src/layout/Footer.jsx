import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {
  mastercard,
  maestro,
  bitpay,
  express,
  visa,
  paypal,
  discover,
  googlepay,
  sofort,
  applepay,
} from "../assets";

export default function Footer() {
  return (
    <footer className="font-[Mulish] bg-[#1C1C1E]">
      <div className="md:px-12 px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Language & Currency */}
        <div className="space-y-6">
          <div>
            <p className="text-[15px] font-bold mb-2 text-[#FFFFFFCC]">
              Language
            </p>
            <div className="relative w-[75%]">
              <select className="bg-[#1C1C1E]  p-3 pr-10 text-sm font-semibold border border-[#FFFFFF33] text-[#FFFFFF99] rounded-[3px] px-3 py-2 w-full focus:outline-none appearance-none">
                <option className="">English (UK)</option>
                <option className="">English (US)</option>
                <option className="">French (FR)</option>
                <option className="">German (DE)</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#778088"
                stroke="#778088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <div>
            <p className="text-[15px] font-bold mb-2 text-[#FFFFFFCC]">
              Currency
            </p>
            <div className="relative w-[75%]">
            <select className="bg-[#1C1C1E]  p-3 pr-10 text-sm font-semibold border border-[#FFFFFF33] text-[#FFFFFF99] rounded-[3px] px-3 py-2 w-full focus:outline-none appearance-none">
              <option>U.S. Dollar ($)</option>
              <option>Euro (€)</option>
              <option>British Pound (£)</option>
              <option>Canadian Dollar (CA$)</option>
            </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#778088"
                stroke="#778088"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[15px] font-bold mb-2 text-[#FFFFFFCC]">
            Company
          </h3>
          <ul className="space-y-2 text-[15px] text-[#FFFFFF99]">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Press Room</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-[15px] font-bold mb-2 text-[#FFFFFFCC]">Help</h3>
          <ul className="space-y-2 text-[15px] text-[#FFFFFF99]">
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">
              Terms and conditions
            </li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
            <li className="hover:text-white cursor-pointer">Sitemap</li>
          </ul>
        </div>

        {/* Payment Methods */}
        <div className="">
          <h3 className="text-[15px] font-bold mb-4 text-[#FFFFFFCC]">
            Payment methods possible
          </h3>
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center gap-1">
              <img src={mastercard} alt="MasterCard" />
              <img src={bitpay} alt="Bitpay" />
              <img src={visa} alt="Visa" />
              <img src={express} alt="Amex" />
              <img src={discover} alt="Discover" />
            </div>
            <div className="flex items-center gap-1">
              <img src={sofort} alt="Sofort" />
              <img src={googlepay} alt="Google Pay" />
              <img src={applepay} alt="Apple Pay" />

              <img src={paypal} alt="PayPal" />
              <img src={maestro} alt="Maestro" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-[15px] space-y-2">
            <h3 className="font-bold mb-2 text-[#FFFFFFCC]">Company</h3>

            <p className="text-[#FFFFFF99]">
              <span>Email:</span> support@yourplatform.com
            </p>
            <p className="text-[#FFFFFF99]">
              <span>Phone (U.S.):</span> +1 (800) 555-TRVL
            </p>
            <p className="text-[#FFFFFF99]">
              <span>Hours:</span> 24/7 Chat & Email Support
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="font-[Mulish] bg-[#00000033] flex flex-col md:flex-row justify-between items-center px-12 py-5 text-sm">
        <p className="text-[#FFFFFF99] text-[15px]">
          Copyright © 2025 Xperience. All Rights Reserved
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="#"
            className="bg-black text-white p-2 rounded-full hover:bg-[#03CDE5] transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-black text-white p-2 rounded-full hover:bg-[#03CDE5] transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-black text-white p-2 rounded-full hover:bg-[#03CDE5] transition"
          >
            <RiInstagramFill />
          </a>
          <a
            href="#"
            className="bg-black text-white p-2 rounded-full hover:bg-[#03CDE5] transition"
          >
            <FaPinterestP />
          </a>
        </div>
      </div>
    </footer>
  );
}
