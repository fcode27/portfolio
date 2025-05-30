"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeSwitcher } from "./theme-switcher";

export default function Nav() {
  const path = usePathname();

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
      <nav className="text-main-foreground border-border shadow-shadow rounded-base bg-main font-base w450:gap-4 mx-auto flex w-max border-2 p-1.5 pl-2 pr-3 text-sm sm:text-base">
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
        <div className="ml-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </div>
  );
}
