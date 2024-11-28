"use client";
import { Whatsapp, gmail, instagram, tiktok, youtube } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";
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
                className={`fixed left-0 top-1/2 transform -translate-y-1/2 bg-[#429ad2] text-white h-32 rounded-r-sm w-5 shadow-xl cursor-pointer z-50 flex items-center justify-end transition-transform duration-300 ${isOpen ? "translate-x-48" : ""}`}
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
                className={`fixed left-0 top-1/2 rounded-r-xl -translate-y-1/2 w-48 h-[400px] transform transition-transform duration-300 bg-white ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } z-40`}
            >
                <div className="p-4 flex justify-end items-center gap-2 mr-4">
                    <p>Whatsapp</p>
                    <Link href="https://wa.me/1234567890" target="_blank">
                        <Image src={Whatsapp} alt="WhatsApp" width={50} height={50} quality={100} />
                    </Link>
                </div>
                <div className="p-4 flex justify-end items-center gap-2 mr-4">
                    <p>Instagram</p>
                    <Link href="https://wa.me/1234567890" target="_blank">
                        <Image src={instagram} alt="Instagram" width={50} height={50} quality={100} />
                    </Link>
                </div>
                <div className="p-4 flex justify-end items-center gap-2 mr-4">
                    <p>Youtube</p>
                    <Link href="https://wa.me/1234567890" target="_blank">
                        <Image src={youtube} alt="youtube" width={50} height={50} quality={100} />
                    </Link>
                </div>
                <div className="p-4 flex justify-end items-center gap-2 mr-5">
                    <p>Gmail</p>
                    <Link href="https://wa.me/1234567890" target="_blank">
                        <Image src={gmail} alt="gmail" width={45} height={45} quality={100} />
                    </Link>
                </div>
                <div className="p-4 flex justify-end items-center gap-2 mr-4">
                    <p>Tiktok</p>
                    <Link href="https://wa.me/1234567890" target="_blank">
                        <Image src={tiktok} alt="tiktok" width={50} height={50} quality={100} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default WhatsAppButton;
