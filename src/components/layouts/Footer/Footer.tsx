import React from "react";
import Container from "@/components/layouts/Container";
import Logo from "@/Logo/Logo";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { footerData } from "./FooterData";
import Link from "next/link";
import SectionWrapper from "@/components/layouts/SectionWrapper";

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white pt-20 pb-10">
      <Container>
        {/* TOP CTA */}
        <SectionWrapper
          eyebrowTitle="Start a conversation"
          className="before:-translate-x-1/2 before:left-1/2"
          heading="We’d Love to Hear from You"
          buttonText="Contact Us"
          buttonWrapperClassName=" flex flex-col gap-4 items-center"
          variant="darkNoIcon"
          headerClassname="flex flex-col gap-4 items-center "
          buttonClassName="ps-[20px] pr-[20px] py-[12px]"
          wrapperClassName="flex flex-col gap-[26px] border-b-[0.5px] border-[#7a7a7a] pb-10 mb-10"
        />

        {/* footer sidebar one */}
        <div className="">
          <div className="flex gap-36.25 pb-7.5">
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

            <div className="flex gap-34  flex-wrap md:justify-between md:gap-14 lg:flex-nowrap">
              {footerData.map((footerItem) => (
                <div
                  key={footerItem.title}
                  className="basis-full md:basis-[calc(50%-56px)] lg:basis-[calc(33%-320px)]"
                >
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
          <p className="text-[#FFFFFFC9] text-start text-[15px]">
            Copyright 2025 Gochali Theme, All Right Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
