"use client";

import Link from "next/link";
import React from "react";
import { TbChartDonutFilled } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn, FaPhone, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";

const Sidebar = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <section
      className={`fixed top-0 w-full bg-white text-black md:hidden ${
        isSidebarOpen ? "hidden" : "block"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <Link href="/">
          <div className="flex items-center gap-4 text-4xl font-bold md:text-4xl lg:text-5xl">
            <TbChartDonutFilled />
            <p>Financial</p>
          </div>
        </Link>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <IoClose className="text-4xl font-bold text-red-600 hover:text-red-700" />
        </button>
      </div>
      <div className="p-4">
        <ul className="text-xl ">
          <li className="rounded p-2 hover:bg-blue-200">
            <Link href="/">Home</Link>
          </li>
          <li className="rounded p-2 hover:bg-blue-200">
            <Link href="/services">Services</Link>
          </li>
          <li className="rounded p-2 hover:bg-blue-200">
            <Link href="#">Insights</Link>
          </li>
          <li className="rounded p-2 hover:bg-blue-200">
            <Link href="#">About</Link>
          </li>
          <li className="rounded p-2 hover:bg-blue-200">
            <Link href="#">contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 bg-primary100 p-4 text-white md:flex-row md:justify-between">
        <p className="">New York City Financial Advisor</p>
        <div className="flex flex-wrap gap-5">
          <div className="flex items-center">
            <FaPhone />
            <p className="ml-2">+91-1234567890</p>
          </div>
          <div className="flex items-center">
            <HiMail />
            <p className="ml-2">office@example.com</p>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Follow</p>
            <div className="flex gap-2">
              <GrFacebookOption />
              <FaLinkedinIn />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
