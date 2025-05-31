import { AspectRatio } from "@/components/ui/aspect-ratio";
import PROJECTS from "@/data/projects";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Star20 from "@/components/ui/star20";
import Star6 from "@/components/ui/star6";

export default function Work() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Work</h1>

      <div className="flex flex-col gap-5">
        <Star20
          className="fixed -left-25 top-5 overflow-hidden sm:hidden lg:block hidden -z-10"
          strokeWidth={4}
          color="var(--main)"
          stroke="var(--main-foreground)"
          width={200}
          height={200}
        />
        <Star6
          className="fixed -right-25 bottom-10 overflow-hidden lg:block hidden -z-10"
          strokeWidth={4}
          color="var(--main)"
          stroke="var(--main-foreground)"
          width={200}
          height={200}
        />
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="p-4 sm:p-5"
              // className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
              key={id}
            >
              <AspectRatio
                className={` rounded-none flex flex-col justify-center items-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px] flex justify-center gap-12 md:gap-24 rounded-base -bottom-[2px]! border-border shadow-shadow border-2 overflow-hidden`}
                ratio={3}
              >
                <Sheet key={project.side}>
                  <h2 className="font-heading text-xl sm:text-2xl ">
                    {project.name}
                  </h2>
                  <SheetTrigger asChild>
                    <Button className="capitalize">preview</Button>
                  </SheetTrigger>
                  <SheetContent side={project.side}>
                    <SheetHeader>
                      <SheetTitle color="var(--foreground)">
                        {project.name}
                      </SheetTitle>
                      <div className="flex border-border border-4 rounded-[5px] bg-white p-2.5 gap-2.5 rounded-none bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px] rounded-base -bottom-[2px]! border-border shadow-shadow border-2">
                        {project.previewImages.length >= 1
                          ? project.previewImages.map((image, index) => (
                              <div
                                key={`${project.name} preview ${index + 1}`}
                                className="flex-1 flex justify-center items-center min-w-0"
                                style={{
                                  maxWidth: `${100 / project.previewImages.length}%`,
                                }}
                              >
                                <img
                                  className="object-contain w-full h-60"
                                  src={image}
                                  alt={`${project.name} preview ${index + 1}`}
                                />
                              </div>
                            ))
                          : null}
                      </div>
                      {/* <SheetDescription className="flex border-border border-4 rounded-[5px] bg-white p-2.5 gap-2.5 rounded-none  bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px]  rounded-base -bottom-[2px]! border-border shadow-shadow border-2"></SheetDescription> */}
                    </SheetHeader>
                    <div className="overflow-y-auto px-4 text-sm">
                      <h4 className="mb-4 text-lg leading-none font-medium">
                        Project description
                      </h4>
                      <p className="mb-4 leading-normal">
                        {project.description}
                      </p>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">Continue</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </AspectRatio>

              <div className="text-foreground font-base mt-5">
                {/* {project.previewImages.length >= 1
                  ? project.previewImages.map((image, index) => (
                      <img
                        key={`${project.name} preview ${index + 1}`}
                        className="center rounded-base object-cover h-full"
                        src={`${image}`}
                        alt={`${project.name} preview ${index + 1}`}
                      />
                    ))
                  : null} */}

                {/* <div className="mt-8 grid grid-cols-2 gap-5">
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Visit
                  </a>
                  <a
                    className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                    href={project.repoUrl}
                    target="_blank"
                  >
                    Github
                  </a>
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
