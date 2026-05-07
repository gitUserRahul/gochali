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
import { cn } from "@/lib/utils";

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

const NavigationBar = ({ isScrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <NavigationMenu
        className={cn(
          " lg:flex",
          isMenuOpen
            ? "block absolute w-screen h-screen right-0 top-0 bg-white items-start flex-col justify-start "
            : "hidden",
        )}
      >
        {isMenuOpen && (
          <div className="flex justify-between w-full p-4 border-b border-b-[rgb(238, 238, 238)]">
            <span className="text-[16px] text-[rgb(41, 41, 41)] font-semibold">
              Menu
            </span>{" "}
            <button onClick={() => setIsMenuOpen(false)}>X</button>
          </div>
        )}
        <NavigationMenuList
          className={cn(
            isMenuOpen && "flex flex-col w-[500px] items-start p-4 gap-4 ",
          )}
        >
          {navItems.map((navItem, navIndex) => (
            <NavigationMenuItem
              key={navIndex}
              className={cn(
                "relative font-semibold text-[14px] tracking-[1.5px] uppercase ",
                isScrolled ? "text-[#595959]" : "text-white",
                isMenuOpen && "text-[rgb(41,41,41)]",
              )}
            >
              {navItem.links ? (
                <>
                  <NavigationMenuTrigger
                    className={cn(
                      "uppercase tracking-[1.5px]", // Constant styles
                      isMenuOpen ? "p-0" : "py-[10px] px-[20px]", // Mutually exclusive padding
                    )}
                  >
                    {navItem.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute top-full transform -left-3.5 min-w-55 ">
                    <ul className="bg-white py-2 flex flex-col gap-1 rounded-[8px] mt-2">
                      {navItem.links.map((navLinkItem, navLinkIndex) => (
                        <li
                          key={navLinkIndex}
                          className=" hover:bg-[#efefef] text-[#838383] hover:text-secondary-color rounded-[8px] duration-200 border-b-[#eef2f7] border-b last:border-b-0 w-full "
                        >
                          {/* <NavigationMenuLink asChild> */}
                          <Link
                            href={navLinkItem.href}
                            className={cn(
                              isMenuOpen && "p-0",
                              "py-2.5 px-4 inline-block font-medium tracking-[1px] capitalize ",
                            )}
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
                <NavigationMenuLink
                  asChild
                  className={cn(isMenuOpen ? "p-0" : "py-[10px] px-[20px]")}
                >
                  <Link href="NavigationMenuLink">{navItem.label}</Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavigationBar;
