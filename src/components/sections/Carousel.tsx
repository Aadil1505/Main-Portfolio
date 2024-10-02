"use client"

import * as React from "react"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ImageSlide {
    src: string;
    alt: string;
}

export default function CarouselDemo({ images }: {images: ImageSlide[]}) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
          return;
        }
      
        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);
      
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
  
    return (
        <div className="relative w-full">
            <Carousel className="w-full mb-2" opts={{ align: "start", loop: true }} setApi={setApi}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    priority
                                    quality={100}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious variant={"ghost"} className="absolute left-1 top-1/2 -translate-y-1/2"/>
                <CarouselNext variant={"ghost"} className="absolute right-2 top-1/2 -translate-y-1/2"/>
            </Carousel>
            <div className="flex justify-center mt-2 space-x-2">
                {count > 1 && Array.from({ length: count }).map((_, index) => (
                    <Button
                        key={index}
                        variant={index + 1 === current ? "outline" : "secondary"}
                        onClick={() => api && api.scrollTo(index)}
                        className="size-2 p-0 rounded-full ease-in-out duration-300"
                    />
                ))}
            </div>
        </div>
    )
}