import React, { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { arrowIcon, mail, person } from "../../assets";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiOutlineCamera } from "react-icons/hi";
import EmailVerification from "./EmailVerification";
import VerifyEmail from "./VerifyEmail";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
 const [openDialog, setOpenDialog] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const tourCategories = ["Adventure", "Cultural", "Nature"];
  const languages = ["Spanish", "English", "German", "Hindi", "Korean"];

  // Form Data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    yearsOfExperience: "",
    iban: "",
    accountNumber: "",
    bio: "",
  });

  // Error State
  const [errors, setErrors] = useState({});

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleImageUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    // optional: clear error on change
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (formData.yearsOfExperience === "") newErrors.yearsOfExperience = "Years of experience is required.";
    else if (Number(formData.yearsOfExperience) < 0) newErrors.yearsOfExperience = "Must be a positive number.";
    if (!formData.iban.trim()) newErrors.iban = "IBAN is required.";
    if (!formData.accountNumber.trim()) newErrors.accountNumber = "Account number is required.";

    // Languages validation (new)
    if (!selectedLanguages || selectedLanguages.length === 0) {
      newErrors.languages = "Select at least one language.";
    }

    // Bio length check (optional)
    if (formData.bio.length > 200) newErrors.bio = "Bio must be 200 characters or less.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // submit payload
      const payload = {
        ...formData,
        languages: selectedLanguages,
      };
      console.log("Submitting:", payload);
     setOpenDialog(true)
    }
  };
  useEffect(() => {
    let timer;
    if (emailVerified) {
      timer = setTimeout(() => {
        setEmailVerified(false);
        navigate("/login")
      }, 2000);
      
    }
    return () => clearTimeout(timer);
  }, [emailVerified]);

  return (
    <>
            <Navbar navStyle="text-[#1C1C1E] bg-white" buttonBg="bg-[#1C1C1E] text-[#F2F2F7]"/>

   
    <div className="min-h-screen flex justify-center bg-white py-10 px-4">
      <form  className="lg:max-w-5xl w-full lg:p-8 md:p-6 p-4 space-y-2">
        <h2 className="md:text-[33px] text-2xl font-[Inter] text-[#1C1C1E] font-semibold">
          Create New Account
        </h2>

        {/* Basic Information */}
        <div className="space-y-6 lg:p-2 p-1">
          <h3 className="font-[Mulish] font-bold text-xl text-[#1F1F1F]">Basic Information</h3>
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <div className="flex items-center bg-[#F2F2F7] rounded-full px-3 py-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="pl-2 text-[#9999A7] font-[Inter] text-base w-full outline-none"
                  />
                  <img src={person} alt="Person" className="mr-3" />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs pl-3 pt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center bg-[#F2F2F7] rounded-full px-3 py-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="pl-2 text-[#9999A7] font-[Inter] text-base w-full outline-none"
                  />
                  <img src={mail} alt="mail" className="mr-3" />
                </div>
                {errors.email && <p className="text-red-500 text-xs pl-3 pt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center bg-[#F2F2F7] rounded-full px-3 py-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="pl-2 text-[#9999A7] font-[Inter] text-base w-full outline-none"
                  />
                  {showPassword ? (
                    <AiOutlineEye onClick={() => setShowPassword(false)} className="text-[#9999A7] text-2xl mr-3 cursor-pointer" />
                  ) : (
                    <AiOutlineEyeInvisible onClick={() => setShowPassword(true)} className="mr-3 text-[#9999A7] text-2xl cursor-pointer" />
                  )}
                </div>
                {errors.password && <p className="text-red-500 text-xs pl-3 pt-1">{errors.password}</p>}
              </div>
            </div>

            {/* Upload Photo */}
            <div className="flex flex-col items-center">
              <label className="cursor-pointer w-32 h-32 flex flex-col justify-center items-center overflow-hidden">
                {photo ? (
                  <img src={photo} alt="Uploaded" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <HiOutlineCamera className="text-[#9999A7] text-2xl cursor-pointer" />
                    <p className="font-[Inter] font-medium text-[#9999A7] text-xs">Upload Photo</p>
                  </>
                )}
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            </div>
          </div>
        </div>

        {/* Host details */}
        <div className="space-y-6 lg:p-2 p-1">
          <h3 className="font-[Mulish] font-bold text-xl text-[#1F1F1F]">Host details</h3>
          <div className="flex md:flex-row flex-col items-start gap-4">
            {/* Languages (restored) */}
            <div className="relative w-full md:w-1/2 border border-[#1F1F1F] rounded-full px-4 py-1">
              <div
                className="pl-2 flex justify-between items-center cursor-pointer"
                onClick={() => setIsDropdownOpen((s) => !s)}
                role="button"
                tabIndex={0}
              >
                <div className="flex flex-col">
                  <label className="block text-[#9999A7] font-[Inter] text-xs">Languages Spoken</label>
                  <p className="text-[#1C1C1E] font-[Inter] text-base">
                    {selectedLanguages.length > 0 ? selectedLanguages.join(", ") : "Select languages"}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <p className="w-5 h-5 flex items-center justify-center rounded-full p-1 bg-[#515151] text-white font-[Inter] text-xs text-center">
                    {selectedLanguages.length}
                  </p>
                  {/* reuse arrowIcon asset, rotate based on open state */}
                  {isDropdownOpen ? (
                    <img src={arrowIcon} alt="dropdown" />
                  ) : (
                    <img src={arrowIcon} className="rotate-[180deg]" alt="dropdown" />
                  )}
                </div>
              </div>

              {isDropdownOpen && (
                <div className="absolute z-10 top-[90%] left-0 right-0 bg-white border border-gray-200 rounded-xl mt-2 shadow-lg p-3 max-h-48 overflow-y-auto">
                  {languages.map((lang) => (
                    <label
                      key={lang}
                      className="pl-2 flex items-center gap-2 py-1 px-2 text-base font-[Inter] text-[#1C1C1E] hover:bg-gray-50 rounded-md cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedLanguages.includes(lang)}
                        onChange={() => toggleLanguage(lang)}
                        className="w-4 h-4 border rounded-[4px] border-[#9999A7] accent-[#1C1C1E]"
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              )}

              {/* languages inline error */}
              {errors.languages && <p className="text-red-500 text-xs pl-3 pt-1">{errors.languages}</p>}
            </div>

            {/* Location */}
            <div className="md:w-1/2 w-full bg-[#F2F2F7] rounded-full flex items-center px-3 py-2">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className="w-full text-[#9999A7] pl-2 font-[Inter] text-base outline-none"
              />
              <FiMapPin className="pl-2 text-2xl text-[#9999A7] mr-2" />
            </div>
          </div>

          {/* Tour Categories + Years */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="w-full bg-[#F2F2F7] rounded-full p-2 px-4">
              <select className="w-full bg-[#F2F2F7] text-[#9999A7] font-[Inter] text-base outline-none">
                <option>Tour Categories</option>
                {tourCategories.map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                placeholder="Years of Experience"
                className="w-full text-[#9999A7] bg-[#F2F2F7] pl-4 font-[Inter] text-base rounded-full p-2 outline-none"
              />
              {errors.yearsOfExperience && <p className="text-red-500 text-xs pl-3 pt-1">{errors.yearsOfExperience}</p>}
            </div>
          </div>

          {/* Bio */}
          <div>
            <textarea
              name="bio"
              placeholder="Bio"
              maxLength={200}
              value={formData.bio}
              onChange={handleChange}
              className="w-full text-[#9999A7] bg-[#F2F2F7] font-[Inter] text-base p-3 rounded-[15px] outline-none resize-none h-28"
            />
            <div className="flex justify-between items-center">
              <div />
              <div className="text-right text-xs text-gray-400">{formData.bio.length}/200</div>
            </div>
            {errors.bio && <p className="text-red-500 text-xs pl-3 pt-1">{errors.bio}</p>}
          </div>
        </div>

        {/* Payment Info */}
        <div className="space-y-6 lg:p-2 p-1">
          <h3 className="font-[Mulish] font-bold text-xl text-[#1F1F1F]">Payment Info</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="w-full bg-[#F2F2F7] rounded-full p-2 px-4">
              <select className="w-full bg-[#F2F2F7] text-[#9999A7] font-[Inter] text-base outline-none">
                <option>Select Country</option>
                <option>USA</option>
                <option>Pakistan</option>
                <option>Germany</option>
              </select>
            </div>

            <div className="w-full bg-[#F2F2F7] rounded-full p-2 px-4">
              <select className="w-full bg-[#F2F2F7] text-[#9999A7] font-[Inter] text-base outline-none">
                <option>Select Bank</option>
                <option>HBL</option>
                <option>Standard Chartered</option>
                <option>Deutsche Bank</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="iban"
              value={formData.iban}
              onChange={handleChange}
              placeholder="IBAN Number"
              className="w-full text-[#9999A7] bg-[#F2F2F7] pl-6 font-[Inter] text-base rounded-full p-2 outline-none"
            />
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Account number"
              className="w-full text-[#9999A7] bg-[#F2F2F7] pl-6 font-[Inter] text-base rounded-full p-2 outline-none"
            />
          </div>
          {errors.iban && <p className="text-red-500 text-xs pl-3 pt-1">{errors.iban}</p>}
          {errors.accountNumber && <p className="text-red-500 text-xs pl-3 pt-1">{errors.accountNumber}</p>}
        </div>

        <div className="w-[75%] mx-auto pt-6">
          <button
           onClick={handleSubmit}
            className="w-full bg-[#1F1F1F] text-white py-3 rounded-full text-lg font-[Inter] hover:bg-gray-800 transition"
          >
            Create Account
          </button>
        </div>
      </form>

      {/* ---------- Email Verification Dialog ---------- */}
      {openDialog && (
        <VerifyEmail
          name={formData.fullName}
          email={formData.email}
          onClose={() => setOpenDialog(false)}
          onVerified={() => {
            setOpenDialog(false);
            setEmailVerified(true);
          }}
        />
      )}

      {/* ---------- Verified Success Dialog ---------- */}
      {emailVerified && (
       <EmailVerification/>
      )}
    </div>
    </>
  );
}
