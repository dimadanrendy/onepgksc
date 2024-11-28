"use client";
import { useState } from "react";

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSlide = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Tombol WhatsApp */}
            <div
                className={`fixed left-0 top-1/2 transform -translate-y-1/2 bg-[#429ad2] text-white h-32 rounded-r-sm w-5 shadow-xl cursor-pointer z-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? "translate-x-60" : ""}`}
                onClick={toggleSlide}

            >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }} // Rotasi ikon saat isOpen
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
            </div>

            {/* Slide WhatsApp */}
            <div
                className={`fixed left-0 top-1/2 rounded-r-xl -translate-y-1/2 w-60 h-44 transform transition-transform duration-300 bg-white ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } z-40`}
            >
                <div className="p-4 text-center">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        className="bg-green-500 text-white py-2 px-4 rounded-md"
                    >
                        WhatsApp
                    </a>
                </div>
                <div className="p-4 text-center">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        className="bg-green-500 text-white py-2 px-4 rounded-md"
                    >
                        Instagram
                    </a>
                </div>
                <div className="p-4 text-center">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        className="bg-green-500 text-white py-2 px-4 rounded-md"
                    >
                        YouTube
                    </a>
                </div>
            </div>
        </>
    );
};

export default WhatsAppButton;
