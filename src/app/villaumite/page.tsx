import Carousel from "@/components/sections/Carousel";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const images = [
    { src: "villaumite/villaumite-1.png", alt: "Villaumite 1" },
    { src: "villaumite/villaumite-2.png", alt: "Villaumite 2" },
    { src: "villaumite/villaumite-3.png", alt: "Villaumite 3" },
  ]
  return (
    <>

      {/* Hero */}
      <div className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="container px-4 sm:px-6">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-2xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl">
              Villaumite
            </h1>
            <p className="mt-2 sm:mt-3 text-base sm:text-xl text-muted-foreground">
              Building a clothing brand ground up.
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
              <h2 className="text-2xl sm:text-3xl font-bold lg:text-4xl">Villaumite</h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground">
              The primary objective was to create a comprehensive, engaging, and secure website
              for Villaumite, a prominent streetwear clothing brand, with a special focus on the
              landing password page for their much-anticipated drop day. Inspired by the urban and
              edgy aesthetic of Villaumite, the overall design was crafted to echo the brand&apos;s
              character. The use of bold graphics, dynamic layouts, and a monochrome color scheme
              with accents of the brand&apos;s signature colors created an immersive visual experience
              that resonated with the target audience. Photoshop was also used to created the brand&apos;s
              logos, T-shirt design, and the detailed product mockups used in the manufacturing process
              which can be seen on the product page.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <ShoppingBag className="flex-shrink-0 mt-1 sm:mt-2 h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
                <div className="ms-4 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Clothing Brand
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                  Founding, designing, and building out a complete brand with finished products
                  and custom designs hosted on Shopify
                  </p>
                  <div className="mt-3 sm:mt-4">
                    <Link className="flex items-center hover:text-secondary" href="https://villaumite.com/">
                      <img className="flex-shrink-0 h-4 w-4 sm:h-5 sm:w-5" src="https://i.imgur.com/2EHshoi.png"/>
                        <h3 className="ms-2 sm:ms-3 text-xs sm:text-sm font-semibold">
                          Villaumite
                        </h3>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-x-4">
                    <Badge variant="outline" className="text-xs sm:text-sm">HTML</Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">CSS</Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">Shopify</Badge>
                    <Badge variant="outline" className="text-xs sm:text-sm">Photoshop</Badge>
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
