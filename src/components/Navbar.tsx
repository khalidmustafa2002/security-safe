"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import logo from '../app/safety/SGSCS.png'
import Image from "next/image";
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isClick, setIsClick] = useState(false)
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
  const toggleNavbar = () => {
    setIsClick(!isClick);
  }
  return (
    <div className={cn("fixed top-10 inset-x-0 max-full mx-auto z-50", className)}>
      <header>
        <nav  className="bg-gray-100 rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                <Link href={'/'}>
              <Image className="w-16 cursor-pointer" src={logo} alt="Logo" />
            </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
                  <Link href="/" className="hover:text-gray-500 rounded-lg p-2">Home</Link>
                  <Link href="/about" className="hover:text-gray-500 rounded-lg p-2">About Us</Link>
                  <Link href="/contact" className="hover:text-gray-500 rounded-lg p-2">Contact</Link>
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
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" aria-expanded="true">
                     <Link href="/services1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Security Guard</Link>
                       <Link href="/services2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Personal Guard</Link>
                       {/* <Link href="/services3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Event Guard</Link> */}
                       <Link href="/services4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cleaning Staff</Link>
                      {/* <Link href="/services5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">CCTV Operator</Link> */}
                      {/* <Link href="/services6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">CCTV Installation</Link> */}
                    </div>
                  </div>
                )}
             </div>
                </div>
              </div>
              <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                  {isClick ? (
                    <svg className="h-6 w-6 text-black border-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  ) : (
                    <svg className="h-6 w-6 text-black border-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {
            isClick && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/" className="block hover:text-gray-500 rounded-lg p-2">Home</Link>
                  <Link href="/about" className="block hover:text-gray-500 rounded-lg p-2">About Us</Link>
                  <Link href="/contact" className=" block hover:text-gray-500 rounded-lg p-2">Contact</Link>
                  <div className="relative p-2">
                 <button onClick={toggleDropdown} className="flex items-center space-x-1">
                   <span>Services</span>
                   <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7z" />
                   </svg>
               </button>
               {isOpen && (
                  <div className="origin-top-right right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" aria-expanded="true">
                     <Link href="/services1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Security Guard</Link>
                       <Link href="/services2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Personal Guard</Link>
                       <Link href="/services3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Event Guard</Link>
                       <Link href="/services4" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Cleaning Staff</Link>
                      <Link href="/services5" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">CCTV Operator</Link>
                      <Link href="/services6" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">CCTV Installation</Link>
                    </div>
                  </div>
                )}
             </div>
                </div>
              </div>
            )
          }
        </nav>
      </header>
    </div>
  )
}
