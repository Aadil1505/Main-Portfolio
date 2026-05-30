"use client";

import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HeroDitheringRoot,
  HeroDitheringContainer,
  HeroDitheringContent,
  HeroDitheringHeading,
  HeroDitheringDescription,
  HeroDitheringActions,
  HeroDitheringVisual,
} from "@/components/ui/hero-dithering";
import { site } from "@/lib/site";

// System colors as hex for the WebGL shader (CSS vars can't reach it):
// azure = --primary, dark grey = our dark surface.
const shaderFront = "#006bf1";
// const shaderBack = "#000";
const shaderBack = "#262624";

export function Hero() {
  return (
    <HeroDitheringRoot
      className="flex min-h-[calc(100svh-4rem)] items-center"
      srTitle="Aadil Alli, full-stack engineer and infrastructure builder"
      showBadges={false}
      desktopShaderProps={{
        colorFront: shaderFront,
        colorBack: shaderBack,
        shape: "swirl",
        type: "4x4",
        size: 2,
        speed: 0.85,
        scale: 0.7,
      }}
    >
      <HeroDitheringContainer className="mx-auto max-w-6xl px-6">
        <HeroDitheringContent>
          <p className="text-center font-mono text-xs text-muted-foreground sm:text-sm lg:text-left">
            // based in {site.location.toLowerCase()} · full-stack &amp;
            infrastructure
          </p>

          <HeroDitheringHeading
            className="pt-2 sm:pt-2 lg:pt-0"
            title="AADIL"
            subtitle={<span className="text-primary">ALLI</span>}
            headingClassName="text-6xl leading-[0.92] tracking-[-0.02em] sm:text-7xl md:text-8xl lg:tracking-[-0.02em] xl:text-8xl 2xl:text-[8.5rem]"
          />

          <HeroDitheringDescription
            descriptionClassName="font-sans text-base leading-relaxed text-foreground sm:text-lg lg:text-xl"
            description={
              <>
                I build full-stack products end to end, host them myself, and
                break things on purpose. Recently: first at an Amazon-sponsored
                CTF.
              </>
            }
          />

          <HeroDitheringActions>
            <div className="flex flex-row flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-11 gap-2 px-5 font-pixel text-[0.95rem] tracking-tight"
              >
                <a href="#work">
                  View work
                  <ArrowDown className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 gap-2 px-5 font-pixel text-[0.95rem] tracking-tight"
              >
                <a href={`mailto:${site.email}`}>Get in touch</a>
              </Button>
            </div>
          </HeroDitheringActions>
        </HeroDitheringContent>

        {/* One contained orb at every breakpoint: centered square on mobile,
            full right-column on desktop. */}
        <HeroDitheringVisual className="mx-auto block aspect-square h-auto w-[min(78vw,340px)] lg:mx-0 lg:aspect-auto lg:h-[400px] lg:w-full xl:h-[500px]" />
      </HeroDitheringContainer>
    </HeroDitheringRoot>
  );
}
