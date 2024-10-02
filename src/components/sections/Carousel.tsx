"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

interface ImageSlide {
    src: string;
    alt: string;
}

export default function CarouselDemo({ images }: { images: ImageSlide[] }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        const selectHandler = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };

        api.on("select", selectHandler);

        return () => {
            api.off("select", selectHandler);
        };
    }, [api]);

    return (
        <div className="relative w-full">
            <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="rounded-lg object-cover"
                                    priority
                                    quality={100}
                                />
                            </AspectRatio>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious variant="ghost" className="absolute left-1 top-1/2 -translate-y-1/2" />
                <CarouselNext variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
            {count > 1 && (
                <div className="mt-2 flex justify-center space-x-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <Button
                            key={index}
                            variant={index + 1 === current ? "outline" : "secondary"}
                            onClick={() => api?.scrollTo(index)}
                            className="h-2 w-2 rounded-full p-0 transition-all duration-300 ease-in-out"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}