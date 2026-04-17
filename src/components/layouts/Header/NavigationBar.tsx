import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export const navItems = [
  {
    label: "Home",
  },
  {
    label: "Culture",
    links: [
      {
        label: "Cuisines",
        href: "/",
      },
      {
        label: "Traditional Dresses",
        href: "/",
      },
      {
        label: "Festivals",
        href: "/",
      },
      {
        label: "Tools & Crafts",
        href: "/",
      },
      {
        label: "Lifestyle & Habits",
        href: "/",
      },
    ],
  },
  {
    label: "History",
    links: [
      {
        label: "History",
        href: "/",
      },
      {
        label: "Ancestors Genealogy",
        href: "/",
      },
      {
        label: "Social Structure",
        href: "/",
      },
    ],
  },
  {
    label: "Language",
    links: [
      {
        label: "Dictionary",
        href: "/",
      },
      {
        label: "Calendar",
        href: "/",
      },
      {
        label: "Translator",
        href: "/",
      },
    ],
  },
  {
    label: "Shop",
  },
  {
    label: "Blog",
  },
];

const NavigationBar = ({ isScrolled }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((navItem, navIndex) => (
          <NavigationMenuItem
            key={navIndex}
            className={`relative font-semibold text-[14px] tracking-[1.5px] uppercase ${
        isScrolled ? "text-[#595959]" : "text-white"
      }`}
          >
            {navItem.links ? (
              <>
                <NavigationMenuTrigger className="uppercase tracking-[1.5px] py-[10px] px-[20px]">
                  {navItem.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute top-full transform -left-3.5 min-w-55 p-0">
                  <ul className=" bg-white p-2 flex flex-col gap-1 rounded-[8px] mt-2">
                    {navItem.links.map((navLinkItem, navLinkIndex) => (
                      <li
                        key={navLinkIndex}
                        className=" hover:bg-[#efefef] text-[#838383] hover:text-[#242424] rounded-[8px]"
                      >
                        {/* <NavigationMenuLink asChild> */}
                        <Link
                          href={navLinkItem.href}
                          className="py-2.5 px-4 inline-block font-medium tracking-[1px] capitalize"
                        >
                          {navLinkItem.label}
                        </Link>
                        {/* </NavigationMenuLink> */}
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href="NavigationMenuLink">{navItem.label}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
