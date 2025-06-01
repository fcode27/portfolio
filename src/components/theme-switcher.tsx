"use client";

import {
  Moon,
  Sun,
  MoonIcon,
  MoonStar,
  MoonStarIcon,
  SunMoon,
} from "lucide-react";
import { useTheme } from "next-themes";

import * as React from "react";
import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        className="bg-trasparent"
        color="--var-primary"
        size={"sm"}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun strokeWidth={3} className="stroke-white  hidden dark:inline" />
        <Moon strokeWidth={3} className="stroke-black inline dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
