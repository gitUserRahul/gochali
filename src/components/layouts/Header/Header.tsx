import React from "react";
import Container from "../Container.tsx";
import Link from "next/link";
import Logo from "@/Logo/Logo.tsx";
import NavigationBar from "./NavigationBar.tsx";
import { RiGlobalLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    //main navbar

    <>
      <header className="fixed top-0 left-0 w-full bg-color-primary z-60 border-b-[0.5px] border-[#979797]">
        <Container className="flex items-center py-[16.5px] justify-between">
          <div className="flex gap-20 ">
            <Link href="/">
              <Logo logoSize={155} />
            </Link>

            {/*  navigation bar */}
            <NavigationBar />
          </div>

          <div className="flex gap-6 [&_a]:text-[20px] [&_a]:text-white">
            <Link href="">
              <RiGlobalLine />
            </Link>
            <Link href="">
              <CiSearch />
            </Link>
            <Link href="">
              <HiOutlineShoppingBag />
            </Link>
            <Link href="">
              <FaRegUser />
            </Link>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
