import Carousel from "@/components/sections/Carousel";
import { Badge } from "@/components/ui/badge";
import { Cog } from "lucide-react";

export default function Page() {
  const images = [
    { src: "makerspace/makerspace-1.png", alt: "Makerspace 1" },
    { src: "makerspace/makerspace-2.png", alt: "Makerspace 2" },
    { src: "makerspace/makerspace-3.png", alt: "Makerspace 3" },
  ]
  return (
    <>

      {/* Hero */}
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-2xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
              Makerspace Developer
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-xl text-muted-foreground">
              Creating systems for the makerspace.
            </p>
          </div>
          <div className="mt-6 sm:mt-10 relative max-w-3xl mx-auto">
            <Carousel images={images}/>
          </div>
        </div>
      </div>
      {/* End Hero */}


      {/* Icon Blocks */}
      <div className="container px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl">Makerspace developer</h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
                As a developer for the makerspace, I am resposible for the creation and continued development
                of different web tools that will be used throughout the lifetime of the space. The first project
                being built currently is the Makerspace Management Portal. There will also be an API implemented
                to allow the Makerspace director to track certain statiostics of students, and analyze the data
                regarding the students involved with the space.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Cog className="flex-shrink-0 mt-1 sm:mt-2 h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
                <div className="ms-4 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Makerspace Management Portal
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                    The Makerspace Management Portal is being built for Hofstra University&apos;s Science and Innovation Center.
                    This web application will serve as an employee and student management system allowing directors and employees
                    to track and manage training statuses of students, manage student information, and will later handle machine
                    status monitoring.
                  </p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-x-4">
                    <Badge variant="outline" className="text-xs sm:text-sm">Nextjs</Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">NextAuth</Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">PostgreSQL</Badge>
                  </div>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
