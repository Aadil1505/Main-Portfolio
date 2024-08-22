"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import Meteors from "@/components/magicui/meteors";


export default function ParticlesDemo() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <>
    <div className="fixed inset-0 z-[-1]">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={100}
        color={color}
        refresh
        />
        <div className="opacity-50 -translate-x-3/4">
          <Meteors number={3} />
        </div>
    </div>
      <div className="flex justify-center items-center">

      </div>
      </>
  );
}