"use client";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import Logo from "@/Logo/Logo";
import NavigationBar from "./NavigationBar";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // run once on load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-60 border-b-[0.5px] transition-colors duration-300 ${
        isScrolled ? "bg-white border-gray-200 shadow-[0_5px_20px_rgba(0,0,0,0.1),_0_2px_5px_rgba(0,0,0,0.1)]" : "bg-color-primary border-[#7a7a7a]"
      }`}
    >
      <Container className="flex items-center h-[60px] justify-between">
        <div className="flex gap-20">
          <Link href="/">
            <Logo logoSize={155} isLogoDark={isScrolled} />
          </Link>

          <NavigationBar isScrolled={isScrolled} />
        </div>

        <div className={`flex items-center gap-6 ${isScrolled ? "[&_svg]:text-[#7a7a7a]" : "[&_svg]:text-white"}`}>
          <Link href="" className="text-[24px]">
            <CiSearch />
          </Link>
          <Link href="" className="text-[20px]">
            <HiOutlineShoppingBag />
          </Link>
          <Link href="" className="text-[18px]">
            <FaRegUser />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;