"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeSwitcher } from "./theme-switcher";
import { useState } from "react";

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/about",
      text: "About",
    },
    {
      path: "/work",
      text: "Work",
    },
  ];

  return (
    <div className="fixed top-5 left-0 z-50 w-full">
      <div className="ml-8 top-2 right-4 absolute flex items-center justify-start gap-2">
        <ThemeSwitcher />
      </div>
      {/* Hamburger menu for small screens */}
      <div className="sm:hidden absolute top-2 left-4">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 rounded-base border-2 border-border bg-main focus:outline-none"
          aria-label="Open navigation menu"
        >
          <svg
            className="w-6 h-6 text-main-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile menu */}
        {open && (
          <div className="absolute left-0 mt-2 w-40 rounded-base border-2 border-border bg-main shadow-shadow flex flex-col z-50">
            {links.map((link) => (
              <Link
                key={link.path}
                className={clsx(
                  "hover:border-border  border-t-2 border-b-2  px-4 py-2 transition-colors",
                  path === link.path ? "border-border " : "border-transparent",
                )}
                href={link.path}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Desktop nav */}
      <nav className="hidden sm:flex text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto w-max border-2 p-1.5 pl-2 pr-3 text-sm sm:text-base">
        <div className="flex gap-5">
          {links.map((link) => {
            return (
              <Link
                key={link.path}
                className={clsx(
                  "hover:border-border rounded-base border-2 px-2 py-2 transition-colors",
                  path === link.path ? "border-border" : "border-transparent",
                )}
                href={link.path}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
