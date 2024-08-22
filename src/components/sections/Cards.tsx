"use client"

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { Link } from "next-view-transitions";

export default function MagicCardDemo() {
  const { theme } = useTheme();

  const cardData = [
    { href: "/hofstra", imgSrc: "https://cs.hofstra.edu/docs/images/shield_lockup_cs.png", title: "CS Technician" },
    { href: "/hofstra", imgSrc: "https://static.vecteezy.com/system/resources/previews/013/743/747/original/illustration-of-basketball-icon-png.png", title: "Basketball" },
    { href: "/hofstra", imgSrc: "https://i.imgur.com/2EHshoi.png", title: "Villaumite" },
    { href: "/hofstra", imgSrc: "https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png", title: "Makerspace" },
    { href: "/hofstra", imgSrc: "https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png", title: "Hofstra" },
    { href: "/hofstra", imgSrc: "https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png", title: "Hofstra" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cardData.map((card, index) => (
        <Link key={index} href={card.href} className="flex hover:-translate-y-2 ease-in-out duration-300">
          <MagicCard 
            className="w-full h-full cursor-pointer flex flex-col items-center justify-center shadow-2xl p-4"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >       
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-20 h-20">
                <img
                  src={card.imgSrc}
                  alt={`${card.title} logo`}
                  className="object-contain"
                />
              </div>
              <h1 className="font-semibold text-lg sm:text-xl lg:text-2xl text-center">{card.title}</h1>
            </div>
          </MagicCard>
        </Link>
      ))}
    </div>
  );
}