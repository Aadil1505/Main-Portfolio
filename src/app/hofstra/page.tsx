import Slider from "@/components/sections/Slider";
import { Lock, Mail, UsersRound } from "lucide-react";

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
              Computer Science Technician
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Nano-computing breaks barriers, unlocking new tech horizons.
            </p>
          </div>
          <div className="mt-10 relative max-w-3xl mx-auto">
            {/* <img
              src="https://placehold.co/1024x480"
              className="rounded-xl"
              alt="Image Description"
            /> */}
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
              <h2 className="text-3xl font-bold lg:text-4xl">CS Technician</h2>
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
                <Mail className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Enterprise Grade Email Server
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our fully furnished spaces are designed and purpose-built
                    with Co-Living in mind, featuring high-end finishes and
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Lock className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Multifactor Authentication for SSH
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <UsersRound className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    GPU Cluster Account Management System
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We worry about the details so that our residents don&apos;t
                    have to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
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
