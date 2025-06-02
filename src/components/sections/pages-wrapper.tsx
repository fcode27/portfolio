"use client";
import { ThemeProvider } from "next-themes";
import Nav from "../nav";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function PagesWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <body
      className={clsx(
        `${montserrat.className}`,
        "min-h-screen",
        pathName === "/work"
          ? null
          : "bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px]",
      )}
    >
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <Nav />
        <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28">
          {children}
          <footer
            className={`self-end  self-end w-full z-30  border-border px-5 py-5 text-center sm:text-base text-sm`}
          >
            © {new Date().getFullYear()} Remote Portfolio. Built with Next.js
            &amp; Tailwind CSS.{" "}
            <a target="_blank" href="https://github.com/fcode27/portfolio" className="underline font-heading ">
              Github
            </a>
            .
          </footer>
        </div>
      </ThemeProvider>
    </body>
  );
}
