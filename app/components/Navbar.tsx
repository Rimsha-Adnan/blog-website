"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Top Bar */}
      <div className=" z-50 md:fixed flex w-full bg-black text-white h-[45px] justify-between items-center font-[Inter] px-4 md:px-8 lg:px-16">
        {/* Search Section */}
        <div className="flex items-center w-full max-w-[500px] gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.385 15.446a6.751 6.751 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zM6.46 13.884a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-black text-white font-semibold placeholder-gray-400 focus:outline-none w-full"
          />
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4 justify-center items-center">
            <li>
             <Link href="https://www.facebook.com/"> <TiSocialFacebook className="h-[25px] w-[25px]" /></Link>
            </li>
            <li>
            <Link href="https://www.instagram.com/"><SlSocialInstagram className="h-[20px] w-[20px]"/></Link>
            </li>
            <li>
            <TiSocialTwitter className="h-[25px] w-[25px]" />
            </li>
            <li>
            <Link href="https://www.linkedin.com/feed/"><TiSocialLinkedin className="h-[26px] w-[26px]" /></Link>
             </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="md:fixed top-[45px] w-full bg-transparent text-black h-[77px]  px-4 md:px-8 lg:px-16 flex justify-between items-center z-50">
        <h1 className="font-bold font-[Inter] text-2xl md:text-3xl">
          Turning Heads
        </h1>
        <ul className="hidden md:flex gap-6 font-medium font-[Inter] text-lg">
          <li className="text-[#BB5A3A] cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-[#BB5A3A] cursor-pointer"><Link href="/blog">My Blog</Link></li>
          <li className="hover:text-[#BB5A3A] cursor-pointer"><Link href="/about">About</Link></li>
          <li className="hover:text-[#BB5A3A] cursor-pointer"><Link href="#contact">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M2 4h20v2H2zm0 7h20v2H2zm0 7H2v2h20v-2z" />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 text-center h-full w-4/5 bg-[#f9ddd6] text-black shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end items-center px-4 py-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-8 px-6 py-4 font-medium font-[Inter] text-lg">
          <li className="text-[#BB5A3A] cursor-pointer"><Link href="/">Home</Link></li>
          <li className="text-black cursor-pointer"><Link href="/blog">My Blog</Link></li>
          <li className="text-black cursor-pointer"><Link href="/about">About</Link></li>
          <li className="text-black cursor-pointer"><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

