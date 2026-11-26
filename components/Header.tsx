"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="xs:mx-auto relative flex max-w-100 items-center justify-between px-4 py-6 md:max-w-300 md:px-6">
      <div className="flex items-center gap-x-2.5 md:gap-x-3.5">
        <Image
          src="/logo.svg"
          alt="IGYB"
          width={43}
          height={30}
          className="size-6.75"
        />

        <span className="text-base font-semibold text-emerald-300 md:text-lg">
          I GOT YOU BRO
        </span>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-x-4 text-base md:gap-x-10">
          <li>
            <Link href="#">Features</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="#">Sign</Link>
          </li>
        </ul>
      </nav>

      <Button
        variant="ghost"
        size="icon"
        className="cursor-pointer hover:bg-transparent sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-controls="mobile-navigation"
      >
        <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-1.5">
          <span
            className={`h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </span>
      </Button>

      <nav
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`absolute top-[85%] left-0 z-50 w-full transition-all duration-200 sm:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="px-4">
          <div className="bg-navy-850 rounded-lg border border-white/10 p-4">
            <ul className="flex flex-col gap-4 text-[0.9375rem]">
              <li>
                <Link href="#" onClick={closeMenu}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" onClick={closeMenu}>
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" onClick={closeMenu}>
                  Sign
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
