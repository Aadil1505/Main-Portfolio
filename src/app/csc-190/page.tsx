import Slider from "@/components/sections/Slider";
import { Badge } from "@/components/ui/badge";
import { Github, Leaf } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Page() {
  const images = [
    { src: "https://aadil-alli.vercel.app/assets/mailServer-jYf_Ldcx.png", alt: "Description of image 1" },
    { src: "https://placehold.co/1920x1080", alt: "Description of image 2" },
    { src: "https://placehold.co/1920x1080", alt: "Description of image 3" },
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
          <div className="mt-10 relative max-w-3xl mx-auto">
            <Slider images={images} autoplay={true} aspectRatio={16/9}/>
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
                As a Computer Science Technician, I have worked and even lead tons of projects 
                that were required or needed by Hofstra&apos;s Computer Science Department. However, 
                below are some of the most complex projects that are/will soon be in production 
                that took months of work including learning to navigate linux and the terminal, 
                reading open source software documentation, and intricate web development tasks.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Leaf className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Ripe Shopping
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  A Modern, Useful Grocery Shopping Web App that uses image recognition to make 
                  traditional grocery shopping ten times quicker.
                  </p>
                  <div className="mt-4">
                    <Link className="flex items-center hover:text-secondary" href="https://github.com/Aadil1505/Ripe-Shopping">                          
                      <Github className="flex-shrink-0 h-5 w-5" />
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
