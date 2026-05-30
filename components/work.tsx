"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { BlurFade } from "@/components/ui/blur-fade";

type ProjectLink = { label: string; href: string };

type Project = {
  name: string;
  logo: string;
  shot: string;
  blurb: string;
  stack: string[];
  metric?: string;
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    name: "Lucide React Motion",
    logo: "/lucide-react-motion.png",
    shot: "/shots/lucide-react-motion.png",
    blurb:
      "A drop-in replacement for lucide-react with hover-to-draw motion across every icon, full prop parity, and an escape hatch for custom variants.",
    stack: ["React", "Motion", "Open source"],
    metric: "1,711 icons",
    links: [
      { label: "site", href: "https://lucide-react-motion-site.vercel.app/" },
      { label: "code", href: "https://github.com/Aadil1505/Lucide-React-Motion" },
    ],
  },
  {
    name: "MotionDesk",
    logo: "/motiondesk.png",
    shot: "/shots/motiondesk.png",
    blurb:
      "A premium-feel macOS desktop: GPU-accelerated live wallpapers and custom icons, rendered with Apple Metal, plus the platform that licenses and ships it.",
    stack: ["Swift", "Metal", "SwiftUI", "Next.js"],
    metric: "1,850+ users",
    links: [{ label: "site", href: "https://motiondesk.app/" }],
  },
  {
    name: "Authlink",
    logo: "/authlink.png",
    shot: "/shots/authlink.png",
    blurb:
      "Tap-to-verify product authentication: NTAG 424 NFC tags backed by tamper-proof records on the Solana blockchain, verified in under a second.",
    stack: ["Next.js", "Rust", "Solana", "NFC"],
    links: [{ label: "site", href: "https://authlink.app/" }],
  },
];

export function Work() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = projects[active];

  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <BlurFade inView delay={0}>
          <p className="font-mono text-xs text-muted-foreground sm:text-sm">
            // selected work
          </p>
        </BlurFade>
        <BlurFade inView delay={0.1} className="mt-4">
          <h2 className="font-pixel text-2xl leading-tight tracking-tight uppercase sm:text-3xl md:text-4xl">
            Things I&rsquo;ve <span className="text-primary">shipped</span>.
          </h2>
        </BlurFade>

        <BlurFade
          inView
          delay={0.2}
          className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-2 lg:gap-16"
        >
          {/* Accordion index */}
          <Accordion
            type="single"
            value={String(active)}
            onValueChange={(value) => value && setActive(Number(value))}
            className="order-2 w-full border-y border-border md:order-1"
          >
            {projects.map((project, i) => (
              <AccordionItem
                key={project.name}
                value={String(i)}
                className="border-border"
              >
                <AccordionTrigger className="py-5 hover:no-underline">
                  <span className="flex items-center gap-3">
                    <Image
                      src={project.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="size-7 shrink-0 object-contain"
                    />
                    <span
                      className={cn(
                        "font-pixel text-lg uppercase tracking-tight transition-colors sm:text-xl",
                        i === active && "text-primary",
                      )}
                    >
                      {project.name}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-10">
                  <p className="text-base leading-relaxed text-foreground">
                    {project.blurb}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-muted-foreground">
                    {project.metric ? (
                      <>
                        <span className="text-primary">{project.metric}</span>
                        <span aria-hidden="true">·</span>
                      </>
                    ) : null}
                    {project.stack.map((tech, j) => (
                      <span key={tech} className="flex items-center gap-2.5">
                        {j > 0 ? <span aria-hidden="true">·</span> : null}
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-sm text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Live preview */}
          <a
            href={current.links[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${current.name}`}
            className="group relative order-1 block aspect-[16/10] overflow-hidden rounded-xl border border-border shadow-sm outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:order-2 md:sticky md:top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
                animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: reduce ? 0 : 0.2, ease: "easeOut" }}
                className="size-full"
              >
                <Image
                  src={current.shot}
                  alt={`${current.name} website`}
                  width={1600}
                  height={1000}
                  priority
                  className="size-full object-cover object-left-top"
                />
              </motion.div>
            </AnimatePresence>
          </a>
        </BlurFade>

        <BlurFade inView delay={0.3} className="mt-16">
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            More on GitHub
            <ArrowUpRight className="size-3.5" />
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
