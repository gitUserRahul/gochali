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
    label: "History & Heritage",
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
    label: "Gallery",
  },
  {
    label: "Blog",
  },
  {
    label: "About",
  },
  {
    label: "Contact",
  },
];

const NavigationBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6.5">
        {navItems.map((navItem, navIndex) => (
          <NavigationMenuItem key={navIndex}>
            {navItem.link ? (
              <>
                <NavigationMenuTrigger
                //   onPointerEnter={(e) => e.preventDefault()}
                //   onPointerMove={(e) => e.preventDefault()}
                >
                  {navItem.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul>
                    {navItem.links.map((navLinkItem, navLinkIndex) => (
                      <li key={navLinkIndex}>
                        <NavigationMenuLink>
                          <Link href={navLinkItem.href}>
                            {navLinkItem.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink className="hover:bg-color-none ">
                <Link
                  href="NavigationMenuLink"
                  className="font-bold text-[14px] tracking-[1.5px] uppercase text-white"
                >
                  {navItem.label}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
