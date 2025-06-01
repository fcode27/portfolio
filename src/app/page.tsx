import Links from "@/components/links";
import { Button } from "@/components/ui/button";

import { SendIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="font-base mt-10">
      <h1 className="text-2xl font-heading sm:text-4xl">Freddy Romero</h1>
      <p className="mt-2 text-lg sm:text-xl">Software engineer</p>
      <div className="mt-8 text-base sm:text-lg pb-10">
        <p>Hello! I’m Freddy Romero, a Software engineer from Caracas, VE</p>
        <br />
        <p>
          Here’s a glimpse of my work as a Software engineer. Click the{" "}
          <a className="font-heading underline" href="/about">
            link
          </a>{" "}
          to explore further!
        </p>

        <div className="mr-auto mt-16 flex flex-col gap-4 sm:flex-row">
          <a
            className="flex self-start"
            href="https://calendly.com/freddyrp/30min"
            target="_blank"
          >
            <Button>
              Schedule a meeting <SendIcon />
            </Button>
          </a>
        </div>
      </div>
      {/* <div
        aria-hidden="true"
        className={cn(
          "w-[340px] absolute top-[70px] pointer-events-none overflow-y-hidden",
          "xl:-left-[130px] md:-left-[200px] lg:block hidden",
        )}
      >
        <Marquee
          direction="up"
          reverse={false}
          className={
            "flex flex-col w-full max-w-full h-full overflow-hidden pr-3 [&>*]:gap-[20px]"
          }
        >
          <Button>
            Schedule a meeting <SendIcon />
          </Button>
        </Marquee>
      </div>
      <div
        aria-hidden="true"
        className={cn(
          " w-[340px] absolute top-[70px] pointer-events-none overflow-y-hidden",
          "xl:-right-[130px] md:-right-[200px] lg:block hidden",
        )}
      >
        <Marquee
          direction="up"
          reverse={true}
          className={
            "flex flex-col w-full max-w-full h-full overflow-hidden pr-3 [&>*]:gap-[20px]"
          }
        >
          <Button>
            Schedule a meeting <SendIcon />
          </Button>
        </Marquee>
      </div> */}

      <Links />
      {/* <div
        className={cn(
          "bottom-[0px] w-[340px] w-full absolute pointer-events-none overflow-y-hidden ",
          "xl:-left-[0px] md:-left-[0px] lg:block hidden",
        )}
      >
        <Marquee
          className="border-t-4 border-border md:[&_.animate-marquee-left]:gap-[50px]! [&_.animate-marquee-left]:gap-[35px]! bg-secondary-background md:py-4 py-3"
          direction="left"
        >
          {Array.from({ length: 7 }).map((_, id) => {
            return (
              <div
                className="flex items-center md:gap-[50px] gap-[35px] xl:[&_span]:text-3xl md:[&_span]:text-2xl sm:[&_span]:text-xl [&_span]:text-base lg:[&_svg]:size-[50px] md:[&_svg]:size-10 [&_svg]:size-[30px]"
                key={id}
              >
                <span>Bootstrap</span>
                <SiBootstrap className="h-8 w-8" title="" />
                <span>CSS3</span>
                <SiCss3 className="h-8 w-8" title="" />
                <span>Docker</span>
                <SiDocker className="h-8 w-8" title="" />
                <span>HTML5</span>
                <SiHtml5 className="h-8 w-8" title="" />
                <span>Javascript</span>
                <SiJavascript className="h-8 w-8" title="" />
                <SiMongodb className="h-8 w-8" title="" />
                <SiMysql className="h-8 w-8" title="" />
                <SiNextdotjs className="h-8 w-8" title="" />
                <SiNginx className="h-8 w-8" title="" />
                <SiNodedotjs className="h-8 w-8" title="" />
                <SiPostgresql className="h-8 w-8" title="" />
                <SiReact className="h-8 w-8" title="" />
                <SiSass className="h-8 w-8" title="" />
                <SiTailwindcss className="h-8 w-8" title="" />
                <SiSwift className="h-8 w-8" title="" />
                <SiAndroid className="h-8 w-8" title="" />
                <SiKotlin className="h-8 w-8" title="" />
                <SiIos className="h-8 w-8" title="" />
              </div>
            );
          })}
        </Marquee>
      </div> */}
    </div>
  );
}
