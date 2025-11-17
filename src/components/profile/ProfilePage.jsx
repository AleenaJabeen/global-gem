// WhatsApp‑style responsive profile layout with slide animations
// Includes: Sidebar + Multiple Components + Mobile slide-in/out

import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import Navbar from "../../layout/Navbar";
import { useNavigate } from "react-router-dom";
import BookingInformation from "./BookingInformation";
import Wishlist from "./Wishlist";

// --- PROFILE INFO PAGE ---
const ProfileInfo = ({ form, setForm }) => (
  <div className="flex flex-col gap-4">
    <InputField label="Name" name="name" value={form.name} setForm={setForm} />
    <InputField
      label="Date of Birth"
      name="dob"
      type="date"
      value={form.dob}
      setForm={setForm}
    />
    <InputField
      label="Phone"
      name="phone"
      value={form.phone}
      setForm={setForm}
      type="text"
    />
    <InputField
      type="text"
      label="Location"
      name="location"
      value={form.location}
      setForm={setForm}
    />
    <button className="bg-[#1F1F1F] text-white font-[Mulish] text-[15px] font-bold py-3 rounded-full mt-4 w-[30%]">
      Save
    </button>
    <h2 className="font-[Mulish] font-bold text-xl text-[#1C2B38] mb-6">
      Security
    </h2>
    <InputField
      type="email"
      label="Email Address"
      name="email"
      value={form.email}
      setForm={setForm}
    />
    <InputField
      type="password"
      label="Password"
      name="password"
      value={form.password}
      setForm={setForm}
    />
    <InputField
      type="password"
      label="Confirm Password"
      name="confirmPassword"
      value={form.confirmPassword}
      setForm={setForm}
    />
    <button className="bg-[#1F1F1F] text-white font-[Mulish] text-[15px] font-bold py-3 rounded-full mt-4 w-[30%]">
      Save
    </button>
  </div>
);

// --- OTHER PAGES ---
const Newsletter = () => <div>Newsletter Subscription Page</div>;
const Notifications = () => <div>Notifications Settings Page</div>;

// --- INPUT FIELD COMPONENT ---
const InputField = ({ label, name, value, setForm, type }) => {
  const isPassword = name === "password" || name === "confirmPassword";
  const [isMasked, setIsMasked] = React.useState(true);

  // convert real password → ****** (same length)
  const maskedValue = "*".repeat(value?.length || 0);

  return (
    <div>
      <label className="text-[15px] font-[Mulish] text-[#1C2B38] font-bold">
        {label}:
      </label>

      <input
        type="text"
        name={name}
        value={isPassword && isMasked ? maskedValue : value}
        onChange={(e) => {
          // IMPORTANT: when masked, user types '*' → blocked
          // So only update real password when not masked
          if (isPassword && isMasked) return;  

          setForm((prev) => ({ ...prev, [name]: e.target.value }));
        }}
        onFocus={() => setIsMasked(false)}   // show real password
        onBlur={() => setIsMasked(true)}     // return to masked
        className="w-full text-sm text-[#495560] font-[Mulish] mt-1 px-4 py-2 border border-[#E5E5EA] rounded-full"
      />
    </div>
  );
};



export default function ProfilePage() {
  const [active, setActive] = useState("profile");
  const [showContent, setShowContent] = useState(false); // mobile slide
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Wayan Suta",
    dob: "15/03/1886",
    phone: "+46-7644 394 68",
    location: "Gothenburg",
    email:"wayan@gmail.com",
    password:"***",
    confirmPassword:"***"
  });

  const enterPage = (page) => {
    setActive(page);
    setShowContent(true); // mobile slide to right page
  };

  const goBack = () => setShowContent(false);
  const titles = {
  profile: "Personal Information",
  booking: "Booking Information",
  newsletter: "Newsletter Subscription",
  notifications: "Manage Notifications",
  wishlist: "Wishlist",
};

  const renderComponent = () => {
    switch (active) {
      case "profile":
        return <ProfileInfo form={form} setForm={setForm} />;
      case "booking":
        return <BookingInformation/>;
      case "newsletter":
        return <Newsletter />;
      case "notifications":
        return <Notifications />;
      case "wishlist":
        return <Wishlist />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar
        navStyle="text-[#1C1C1E] bg-white"
        buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"
      />

      <div className="w-full lg:px-16 px-6 py-6">
        <div className="flex flex-col px-2 pb-4">
          <h2 className="font-[Volkhov] md:text-[22px] text-lg font-bold text-[#1C2B38]">
            My Profile
          </h2>
          <h3 className="text-[#778088] font-[Mulish] font-semibold text-[15px]">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </span>
            /My Profile
          </h3>
        </div>
      <div className="flex h-[100vh]">
  {/* LEFT SIDEBAR */}
  <div className="md:w-[30%] w-full hidden md:block h-full overflow-hidden">
    <Sidebar
      active={active}
      setActive={setActive}
      enterPage={enterPage}
      form={form}
    />
  </div>

  {/* MOBILE SIDEBAR */}
  <div
    className={`fixed md:hidden z-20 top-0 left-0 h-full w-full bg-white transition-all duration-300 ${
      showContent ? "-translate-x-full" : "translate-x-0"
    }`}
  >
    <Sidebar
      active={active}
      setActive={setActive}
      enterPage={enterPage}
      form={form}
    />
  </div>

  {/* RIGHT CONTENT WITH SLIDE-IN */}
  <div
    className={`flex-1 h-full p-6 overflow-y-auto no-scrollbar bg-white transition-all duration-300 ${
      showContent ? "translate-x-0" : "translate-x-full md:translate-x-0"
    }`}
  >
    {/* Mobile back button */}
    <button
      onClick={goBack}
      className="md:hidden mb-4 text-sm text-blue-500"
    >
      ← Back
    </button>

    <div className="w-full px-6 pb-10">
      <h2 className="font-[Mulish] font-bold text-xl text-[#1C2B38] mb-6">
        {titles[active]}
      </h2>
      {renderComponent()}
    </div>
  </div>
</div>

      </div>
    </>
  );
}
