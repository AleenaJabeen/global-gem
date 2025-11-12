import React, { useState, useEffect, useRef } from "react";
import { emailVerify } from "../../assets";

function VerifyEmail({ email, name, onClose, onVerified }) {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(true);
  const [code, setCode] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60); // 1 min
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  const handleSendEmail = () => {
    // Simulate sending email (API call here)
    setSent(true);
    setTimeout(() => {
    }, 500);
  };

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setSent(false);
      setCanResend(true);
    }
  }, [timeLeft]);

  // Handle code input
  const handleChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Move to next input if filled
      if (value && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setCode(["", "", "", ""]);
    alert("📩 Verification code resent!");
  };

  const handleVerify = () => {
    const enteredCode = code.join("");
    if (enteredCode.length < 4) {
      setError("Invalid verification code.");
      return;
    }
    console.log("Verifying code:", enteredCode);
    onVerified();
  };

  return (
    <div className="font-[Poppins] fixed inset-0 z-50 flex items-center justify-center bg-[#1F1F1F70] bg-opacity-80">
      <div className="flex flex-col items-center justify-center bg-white max-w-[644px] xl:w-[644px] md:w-[75vw] w-[95vw] h-[80vh] border border-[#8B909F26] rounded-[10px] shadow-xl relative overflow-y-auto p-6 text-white">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-[#1C1C1E] font-[Inter] font-bold md:text-[30px] text-xl text-center">
            Email Verification
          </h3>
          <p className="text-[#9999A7] font-[Inter] text-center text-sm font-medium">
            We’ve sent you a verification code on{" "}
            <span className="text-[#1C1C1E] font-semibold">
              {name} {email}
            </span>
          </p>
        </div>

        {!sent ? (
          <></>
        ):(

          <>
            <div className="flex gap-4 mt-8 mb-6">
              {code.map((num, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength={1}
                  value={num}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="md:w-24 md:h-14 w-14 h-10 text-center md:text-xl text-base font-bold font-[SF_Pro_Display] border border-[#EFEFF4] rounded-xl text-[#1C1C1E] focus:outline-none focus:ring-2 focus:ring-[#1F1F1F]"
                />
              ))}
            </div>
            {error && (
              <p className="text-red-500 text-xs text-center mt-1">{error}</p>
            )}
          </>
        )}

        {/* Verify Button */}
        <div className="w-[75%] mx-auto pt-2 mb-4">
          <button
            onClick={handleVerify}
            type="button"
            className="w-full bg-[#1F1F1F] text-white py-3 rounded-full text-lg font-[Inter] font-bold hover:bg-gray-800 transition"
          >
            Verify Code
          </button>
        </div>

        {/* Resend Code Section */}
        <div className="text-[#1C1C1E] font-medium text-sm font-[SF_Pro_Text] text-center">
          {canResend ? (
            <button
              onClick={handleSendEmail}
              className="underline text-[#1F1F1F] hover:text-[#555]"
            >
              Resend Code
            </button>
          ) : (
            <p>
              Resend Code in{" "}
              <span className="underline">
                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
