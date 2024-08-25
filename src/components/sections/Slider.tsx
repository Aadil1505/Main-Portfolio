'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface ImageSlide {
  src: string;
  alt: string;
}

interface EmblaCarouselProps {
  images: ImageSlide[];
  autoplay: boolean;
  aspectRatio: number;
}

export default function EmblaCarousel({ images, autoplay, aspectRatio }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, autoplay ? [Autoplay({delay: 10000})] : [])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [
    emblaApi,
  ])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, setScrollSnaps, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <>
    <div className='embla mx-auto mt-12 shadow-lg rounded-md border'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container h-full'>
          {images.map((image, index) => (
            <div key={index} className='embla__slide flex items-center justify-center'>
              <AspectRatio ratio={aspectRatio}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='rounded-md'
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

    </div>
      <div className='mt-10 flex justify-center items-center gap-4'>
        <div>
          <Button variant="ghost" size="icon" onClick={scrollPrev}>
            <ArrowLeft />
          </Button>
          <Button variant="ghost" size="icon" onClick={scrollNext}>
            <ArrowRight />
          </Button>
        </div>
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant={index === selectedIndex ? "outline" : "secondary"}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 p-0 rounded-full`}
            />
          ))}
        </div>
      </div>
    </>
    
  )
}