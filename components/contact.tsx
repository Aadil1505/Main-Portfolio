"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => clearTimeout(timer.current ?? undefined), []);

  async function copyEmail() {
    try {
      await navigator.clipboard?.writeText(site.email);
      setCopied(true);
      clearTimeout(timer.current ?? undefined);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context / denied): the mailto button
      // is the unmistakable fallback path, so fail quietly.
    }
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center sm:py-28 lg:py-32">
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          // contact
        </p>
        <h2 className="mt-4 max-w-[16ch] text-balance font-pixel text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl md:text-6xl">
          Got something to <span className="text-primary">break?</span>
        </h2>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          Or build. Let me know. Thanks.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 gap-2 px-5 font-pixel text-[0.95rem] tracking-tight"
          >
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 gap-2 px-5 font-pixel text-[0.95rem] tracking-tight"
          >
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </Button>

          <Button
            type="button"
            size="lg"
            onClick={copyEmail}
            aria-label={
              copied
                ? "Email address copied to clipboard"
                : `Copy email address, ${site.email}`
            }
            className="h-11 gap-2 px-5 font-pixel text-[0.95rem] tracking-tight"
          >
            {copied ? (
              <Check className="size-4" />
            ) : (
              <Copy className="size-4" />
            )}
            {copied ? "Copied" : "Copy email"}
          </Button>
        </div>

        <span aria-live="polite" className="sr-only">
          {copied ? "Email address copied to clipboard" : ""}
        </span>

        <Image
          src="/daffy-duck-burning-money.webp"
          alt="Daffy Duck cackling as he gleefully burns a stack of money"
          width={675}
          height={500}
          unoptimized
          className="mt-14 w-full max-w-2xl rounded-lg border border-border shadow-sm sm:mt-16"
        />
      </div>
    </section>
  );
}
