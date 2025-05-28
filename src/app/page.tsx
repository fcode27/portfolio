import Links from "@/components/links";
import { Button } from "@/components/ui/button";
import { SendIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">
        Freddy F. Romero Plaz
      </h1>
      <p className="mt-2 text-lg sm:text-xl">Software engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hello! I'm Freddy Romero, a Software engineer from Caracas, VE
        </p>
        <br />
        <p>
          Here’s a glimpse of my work as a Software engineer. Click the{" "}
          <a
            className="font-heading underline"
            href="/about"
          >
            link
          </a>{" "}
          to explore further!
        </p>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <Button>
            Contact me <SendIcon />
          </Button>
          <a className="flex" href="https://calendly.com/freddyrp/30min" target="_blank">
            <Button>
              Schedule a meeting <SendIcon />
            </Button>
          </a>
        </div>
      </div>

      <Links />
    </div>
  );
}
