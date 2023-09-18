"use client";

import { BiSolidChevronRight } from "react-icons/bi";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";
import SectionContainer from "./SectionContainer";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import bgImg from '../_assets/banner-img2.jpg'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main
      className={`bg-[url('https://images.unsplash.com/photo-1611416457332-946853cc75d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80')] bg-center object-cover text-white`}
    >
      {/* {isSidebarOpen ? (
        <Sidebar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      ) : (
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      )} */}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <SectionContainer>
        <div className="md:mt-30 mt-20 lg:mt-40">
          <h1 className="mb-20 text-5xl font-bold md:mb-10 md:text-6xl lg:mb-0 lg:text-7xl">
            Helping Small <br /> Businesses
            <br /> Grow Big
          </h1>
          <CustomButton>
            See how we do it <BiSolidChevronRight />
          </CustomButton>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Header;
