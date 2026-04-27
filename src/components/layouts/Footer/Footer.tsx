import React from "react";
import EyeBrowSection from "@/shared/EyeBrowSection.tsx";
import Container from "@/components/layouts/Container";
import Button from "@/shared/Button";
import Logo from "@/Logo/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { footerData } from "./FooterData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white">
      <Container>
        {/* footer header section */}
        <div className="flex flex-col gap-4 items-center border-b-[0.5px] border-[#7a7a7a] p-10 ">
          <EyeBrowSection
            eyebrowTitle="Start a conversation"
            className="before:-translate-x-1/2 before:left-1/2"
          />
          <h3 className="text-[40px] ">We’d Love to Hear from You</h3>
          <Button buttonText="Contact Us" className="max-w-33" />
        </div>

        {/* footer sidebar one */}
        <div className="py-10">
          <div className="flex gap-36.25 py-10">
            <div className="flex flex-col gap-6  max-w-[320px] items-start">
              <Logo logoSize={152} />
              <p className="text=[15px] text-[#FFFFFFB8] ">
                Towards the end of the 19th century, with the advent of the New
                Liberalism and the innovative
              </p>
              <div className="flex gap-6">
                <Link href="/">
                  <FaFacebook />
                </Link>
                <Link href="/">
                  <FaXTwitter />
                </Link>
                <Link href="/">
                  <FaInstagram />
                </Link>
                <Link href="/">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* footer sidebar Two */}

            <div className=" flex gap-34 basis-[calc(100%-320px)]">
              {footerData.map((footerItem) => (
                <div key={footerItem.title}>
                  <h4 className="uppercase font-bold text-[15px] tracking-[1.5px] mb-6.5">
                    {footerItem.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {footerItem.items.map((linkItem) => (
                      <li
                        key={linkItem.label}
                        className="text-[15px] text-[#FFFFFFB8]"
                      >
                        <Link href={linkItem.href || "#"}>
                          {linkItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* footer's footer copyright */}
          <p className="text-[#FFFFFFC9] text-start pt-22.5 text-[15px]">
            Copyright 2025 Gochali Theme, All Right Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
