import React, { useState, useRef, useEffect } from "react";
import { ImAttachment } from "react-icons/im";
import { IoMdArrowBack } from "react-icons/io";
import { BsCheck2All } from "react-icons/bs";
import Navbar from "../../layout/Navbar";
import { chat1, chat2, chat3, host2, host3, mic } from "../../assets";
import { LuCheckCheck } from "react-icons/lu";
import { PiChecks } from "react-icons/pi";
import { CiCircleMore } from "react-icons/ci";

export default function FullChat() {
  const [activeChat, setActiveChat] = useState(null); // null on mobile
  const isMobile = window.innerWidth < 768;

  const chatList = [
    {
      id: 1,
      name: "Annie Pineda",
      lastMsg: "Typing...",
      time: "12:34",
      avatar: chat1,
      typing: true,
      online: true,
    },
    {
      id: 2,
      name: "Laura Higgins",
      lastMsg: "Consequat et ea...",
      time: "Jul 25",
      avatar: chat2,
      online: false,
    },
    {
      id: 3,
      name: "Philip Ferrell",
      lastMsg: "Consequat et...",
      time: "Wed",
      avatar: chat3,
      online: true,
    },
    {
      id: 4,
      name: "Kingston Guerra",
      lastMsg: "Consat ut do…",
      time: "yesterday",
      avatar: chat2,
      online: false,
    },
  ];

  const [messages, setMessages] = useState({
    1: [
      { id: 1, sender: "me", text: "Hey Annie!", time: "12:30", delivered: true },
      {
        id: 2,
        sender: "other",
        text: "Esse cillum dolore eu fugiat",
        time: "12:52",
      },
    ],
  });

  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const container = document.getElementById("message-container");
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages[activeChat]]);

  const sendMessage = () => {
    if (!input && !file) return;

    const newMsg = {
      id: Date.now(),
      sender: "me",
      text: input,
      file: file ? URL.createObjectURL(file) : null,
      fileName: file?.name,
      delivered: true,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), newMsg],
    }));

    setInput("");
    setFile(null);

    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [activeChat]: [
          ...(prev[activeChat] || []),
          {
            id: Date.now() + 1,
            sender: "other",
            text: "Got it!",
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      }));
    }, 1000);
  };

  const activeUser = chatList.find((c) => c.id === activeChat);

  return (
    <>
      <Navbar navStyle="text-[#1C1C1E] bg-white" buttonBg="bg-[#1C1C1E] text-[#F2F2F7]" />

      <div className="font-[Mulish] w-full h-full p-4 lg:px-20">
        <h2 className="text-[#1C2B38] font-semibold md:text-3xl text-2xl mb-4">Inbox</h2>

        <div className="w-full flex gap-6 h-[85vh]">

          {/* ================= SIDEBAR (Mobile shows only if no active chat) ================= */}
          <div className={`${activeChat && isMobile ? "hidden" : "block"} 
            md:flex flex-col w-full md:w-1/3 p-4 border border-[#E5E7EB] 
            shadow-md rounded-[20px] overflow-y-auto`}>

            <h2 className="text-2xl text-[#1F1F1F] font-bold mb-4">My Chats</h2>

            <div className="space-y-3">
              {chatList.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition 
                    ${activeChat === chat.id ? "bg-gray-100" : "hover:bg-gray-100"}`}
                >
                  <div className="relative">
                    <img src={chat.avatar} className="w-12 h-12 rounded-full object-cover" />
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full"></span>
                    )}
                  </div>

                  <div className="flex-1 border-b border-[#E5E5EA] pb-2">
                    <h3 className="font-[Inter] font-semibold text-[#1C1C1E]">{chat.name}</h3>
                    <p className="font-[Inter] text-sm text-[#9999A7]">
                      {chat.typing ? "Typing..." : chat.lastMsg}
                    </p>
                  </div>

                  <span className="font-[Inter] text-xs text-[#9999A7]">{chat.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CHAT WINDOW ================= */}
          {activeChat && (
            <div className="flex-1 flex flex-col border border-[#E5E7EB] rounded-[20px] overflow-hidden">

              {/* Header */}
              <div className="relative flex items-center gap-3 p-4 border-b border-[#E5E5EA]">
                {isMobile && (
                  <IoMdArrowBack
                    className="text-2xl cursor-pointer"
                    onClick={() => setActiveChat(null)}
                  />
                )}

                <div className="relative">
                  <img src={activeUser?.avatar} className="w-14 h-14 rounded-full" />
                  {activeUser?.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full"></span>
                  )}
                  
                </div>

                <div>
                  <h2 className="font-bold text-[#1C2B38] text-2xl">{activeUser?.name}</h2>
                  <p className="text-sm">{activeUser?.online ? "Online" : "Offline"}</p>
                  
                </div>
                 <CiCircleMore size={28} className="absolute top-5 right-5" />
               
              </div>

              {/* Messages */}
              <div id="message-container" className="flex-1 overflow-y-auto p-4 space-y-4">
                {(messages[activeChat] || []).map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2 ${msg.sender === "me" ? "justify-end" : ""}`}
                  >
                    {msg.sender !== "me" && (
                      <img src={activeUser.avatar} className="w-8 h-8 rounded-full" />
                    )}

                    <div className="flex flex-col max-w-[70%]">
                      <div
                        className={`px-4 py-2 text-base rounded-xl shadow-sm ${
                          msg.sender === "me"
                            ? "bg-[#F5F7F9] text-[#9999A7] rounded-br-none"
                            : "bg-[#1F1F1F] text-white rounded-bl-none"
                        }`}
                      >
                        {msg.file && (
                          <a href={msg.file} download className="text-blue-300 underline text-xs mb-1 block">
                            📎 {msg.fileName}
                          </a>
                        )}
                        {msg.text}
                      </div>

                      {/* Time + Delivered */}
                      <span className="text-xs mt-1 flex items-center gap-1 justify-end text-[#9999A7]">
                        {msg.sender === "me" && msg.delivered && (
                          <PiChecks  className="text-[#00C48C] text-2xl pr-2" />
                        )}
                        {msg.time}
                        
                      </span>
                    </div>

                    {msg.sender === "me" && (
                      <img src={host3} className="w-8 h-8 rounded-full" />
                    )}
                  </div>
                ))}

                <div ref={messagesEndRef}></div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-[#CED6E1] flex items-center gap-3">
                <label className="cursor-pointer">
                  <ImAttachment className="text-[#1B293D] text-xl" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>

                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 bg-white border border-[#CED6E1] px-4 py-3 rounded-xl text-sm text-[#A2B0C5] outline-none"
                />

                <img src={mic} alt="Mic" className="w-7" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
