import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

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
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          // selected work
        </p>
        <h2 className="mt-4 font-pixel text-2xl leading-tight tracking-tight uppercase sm:text-3xl md:text-4xl">
          Things I&rsquo;ve <span className="text-primary">shipped</span>.
        </h2>

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-24">
          {projects.map((project, i) => {
            const imageRight = i % 2 === 1;
            return (
              <div
                key={project.name}
                className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                {/* Live-site screenshot — links to the live site. */}
                <a
                  href={project.links[0].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className={cn(
                    "block overflow-hidden rounded-lg border border-border shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md",
                    imageRight ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <Image
                    src={project.shot}
                    alt={`${project.name} website`}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1024px) 33rem, 100vw"
                    className="w-full"
                  />
                </a>

                {/* Text */}
                <div className={cn(imageRight ? "lg:order-1" : "lg:order-2")}>
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={project.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="size-10 shrink-0 rounded-md object-contain sm:size-11"
                    />
                    <h3 className="font-pixel text-xl uppercase tracking-tight transition-colors group-hover:text-primary sm:text-2xl">
                      {project.name}
                    </h3>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-foreground sm:text-lg">
                    {project.blurb}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-muted-foreground">
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

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
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
                </div>
              </div>
            );
          })}
        </div>

        <a
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
          className="mt-16 inline-flex items-center gap-1 font-mono text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          More on GitHub
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
