"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavigationBar from "@/components/layouts/Header/NavigationBar";

export function AppSheet({ trigger, sheetTitle, side }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggle menu bar
  //   const toggleMenu = () => {
  //     setIsMenuOpen(() => !isMenuOpen);
  //   };

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild className="block lg:hidden">
        {trigger}
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
        </SheetHeader>
        <NavigationBar isMenuOpen={isMenuOpen} />
      </SheetContent>
    </Sheet>
  );
}
