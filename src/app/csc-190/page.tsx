import Carousel from "@/components/sections/Carousel";
import { Badge } from "@/components/ui/badge";
import { Leaf } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Page() {
  const images = [
    { src: "https://placehold.co/1920x1080.png", alt: "Description of image 1" },
    { src: "https://placehold.co/1920x1080.png", alt: "Description of image 2" },
    { src: "https://placehold.co/1920x1080.png", alt: "Description of image 3" },
  ]
  return (
    <>

      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Software Engineering
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Introduction to software engineering, development, software lifecycles and more.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <Carousel images={images}/>
          </div>
        </div>
      </div>
      {/* End Hero */}


      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Software Engineering</h2>
              <p className="mt-3 text-muted-foreground">
                As a Computer Science Student, my introduction to the work patterns and ideaology used in the 
                field came with my first software engineering class, CSC-190. In this class I learned everything
                including software lifecycles, version control and management, architecture patterns and structures, 
                and especially what it is like to work in a team on a project. I got my first real experience on a
                group development project where we needed to submit requirement documents, project plans, gantt charts,
                status updates and much more besides just the final presentations/demo and completed project. Not only was I 
                able to learn the sufficient skills necessary to complete the project and its requirements, but I also
                learned how to collaborate efficiently as a member of a team and project lead.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Leaf className="flex-shrink-0 mt-2 h-6 w-6 animate-pulse" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Ripe Shopping
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  A Modern, Useful Grocery Shopping Web App that uses image recognition to make 
                  traditional grocery shopping ten times quicker.
                  </p>
                  <div className="mt-4">
                    <Link className="flex items-center hover:text-secondary" href="https://ripe-shopping.vercel.app/">                          
                      <Leaf className="flex-shrink-0 h-5 w-5" />
                        <h3 className="ms-3 text-sm font-semibold">
                          Ripe
                        </h3>
                    </Link>
                  </div>
                  <div className="mt-4 flex gap-x-4">
                    <Badge variant="outline">Nextjs</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">APIs</Badge>
                    <Badge variant="outline">OCR</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}