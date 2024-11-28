"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenuDemo } from "./menu";
import Image from "next/image";
import { logoHorizontal } from '@/lib/image'
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-white shadow-md top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="">
                    <Image src={logoHorizontal} alt="Logo" width={300} height={300} quality={100} />
                </Link>

                {/* Menu for Desktop */}
                <nav className="hidden md:flex gap-6 items-center">
                    <NavigationMenuDemo />
                </nav>

                {/* Burger Menu for Mobile */}
                <button
                    className="block md:hidden text-gray-600 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <li>
                            <Link href="/" className="text-gray-600 hover:text-blue-500 transition">
                                Beranda
                            </Link>
                        </li>

                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="link" className="text-gray-600 hover:text-blue-500">
                                        <p className="text-base">Profile</p>
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem>
                                        <Link href="#services" className="block text-gray-600 hover:text-blue-500">
                                            Services
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="#team" className="block text-gray-600 hover:text-blue-500">
                                            Team
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="#blog" className="block text-gray-600 hover:text-blue-500">
                                            Blog
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="link" className="text-gray-600 hover:text-blue-500">
                                        <p className="text-base">Berita</p>
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="start">
                                    <DropdownMenuItem>
                                        <Link href="#services" className="block text-gray-600 hover:text-blue-500">
                                            Services
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="#team" className="block text-gray-600 hover:text-blue-500">
                                            Team
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link href="#blog" className="block text-gray-600 hover:text-blue-500">
                                            Blog
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-gray-600 hover:text-blue-500 transition">
                                Data Atlet
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="text-gray-600 hover:text-blue-500 transition">
                                Syarat dan Peraturan
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-gray-600 hover:text-blue-500 transition">
                                Kontak Kami
                            </Link>
                        </li>
                        <li>
                            <Button variant="default" className="px-6 py-2">
                                Daftar Sekarang
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
