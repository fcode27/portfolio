"use client";

import {
  Moon,
  Sun
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <>
      <Button
        className="bg-background"
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
