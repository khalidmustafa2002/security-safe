"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import logo from '../app/safety/SGSCS.png'
import Image from "next/image";
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  }
  return (
    <div className={cn("fixed top-10 inset-x-0 max-full mx-auto z-50", className)}>
      <header className="bg-gray-100 rounded-2xl">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <Link href={'/'}>
            <Image className="w-16 cursor-pointer" src={logo} alt="..." />
            </Link>
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-gray-100 md:min-h-fit min-h-[60vh] left-0 top-${isOpen ? '0' : '-100%'
              } md:w-auto w-full flex items-center px-5 md:relative`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li><Link  href={'/'}className="hover:text-gray-500">Home</Link></li>
              <li><Link href={'/about'} className="hover:text-gray-500">About Us</Link></li>
              <li><Link href={"/contact"} className="hover:text-gray-500">Contact</Link></li>
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center space-x-1">
                  <span>Services</span>
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7z" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <Link href="/services1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Security Guard</Link>
                      <Link href="/services2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Personal Guard</Link>
                      <Link href="/services3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Event Card</Link>
                      <Link href="/services3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cleaning Staff</Link>
                      <Link href="/services3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">CCTV Operator</Link>
                      <Link href="/services3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">CCTV Installation</Link>
                    </div>
                  </div>
                )}
              </div>
              <li><Link className="hover:text-gray-500" href="#">Pricing</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <svg onClick={toggleDropdown} className="h-10 w-10 text-3xl cursor-pointer md:hidden" viewBox="0 0 24 24">
              {isOpen ? (
                <path fill="none" d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path fill="none" d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </div>
        </nav>
      </header>
    </div>
  )
}
