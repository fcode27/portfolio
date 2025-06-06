import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import PROJECTS from "@/data/projects";
import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Star20 from "@/components/ui/star20";
import Star6 from "@/components/ui/star6";
import Star9 from "@/components/ui/star9";

export default function Work() {
  return (
    <div>
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Projects</h1>

      <div className="font-heading mb-8 text-2xl sm:text-4xl m-0">
        {PROJECTS.map((project, id) => {
          return (
            <div className="py-4 sm:py-5" key={id}>
              <AspectRatio
                className={` rounded-none flex flex-col justify-center items-center bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px] flex justify-center gap-1 xs:gap-5 sm:gap-16 rounded-base -bottom-[2px]! border-border shadow-shadow border-2 overflow-hidden`}
                ratio={3}
              >
                <Sheet key={project.side}>
                  <h2 className="font-heading text-sm xs:text-2xl ">
                    <span className="relative px-2 sm:mr-2 mr-0 bg-main/50 rounded-base border-2 border-border/40 dark:border-border/70">
                      {project.name}

                      <Star9
                        className="absolute sm:block md:-bottom-4 -top-4.5 -right-4.5"
                        strokeWidth={4}
                        color="var(--main)"
                        stroke="var(--main-foreground)"
                        width={40}
                        height={40}
                      />
                    </span>
                  </h2>
                  <SheetTrigger asChild>
                    <Button className="capitalize ">preview</Button>
                  </SheetTrigger>
                  <SheetContent side={project.side} className="overflow-hidden">
                    <SheetHeader className="px-12">
                      <SheetTitle color="var(--foreground)">
                        {project.name}
                      </SheetTitle>
                      <Star6
                        className="absolute sm:block  -top-25 -left-25.5 -z-10"
                        strokeWidth={4}
                        color="var(--main)"
                        stroke="var(--main-foreground)"
                        width={200}
                        height={200}
                      />
                      <Star20
                        className="absolute sm:block  top-42 -right-13 -z-10"
                        strokeWidth={4}
                        color="var(--main)"
                        stroke="var(--main-foreground)"
                        width={200}
                        height={200}
                      />
                      <Star6
                        className="absolute sm:block  -bottom-25 -right-25.5 -z-10"
                        strokeWidth={4}
                        color="var(--main)"
                        stroke="var(--main-foreground)"
                        width={200}
                        height={200}
                      />

                      <div className="flex border-border border-4 rounded-[5px]  p-2.5 gap-2.5 rounded-none bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px] rounded-base -bottom-[2px]! border-border shadow-shadow border-2 bg-secondary-background ">
                        {project.previewImages.length >= 1
                          ? project.previewImages.map((image, index) => (
                              <div
                                key={`${project.name} preview ${index + 1}`}
                                className=" flex-1 flex justify-center items-center min-w-0 "
                                style={{
                                  maxWidth: `${100 / project.previewImages.length}%`,
                                }}
                              >
                                <Image
                                  alt={`${project.name} preview ${index + 1}`}
                                src={image.previewImage}
                                placeholder="blur"
                                  width={240}
                                  height={240}
                                  loading="eager"
                                  priority={true}
                                  blurDataURL={image.blurredImage}
                                />
                              </div>
                            ))
                          : null}
                      </div>
                      {/* <SheetDescription className="flex border-border border-4 rounded-[5px] bg-white p-2.5 gap-2.5 rounded-none  bg-secondary-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:36px_36px]  rounded-base -bottom-[2px]! border-border shadow-shadow border-2"></SheetDescription> */}
                    </SheetHeader>
                    <div className="overflow-y-auto px-12 text-sm">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
