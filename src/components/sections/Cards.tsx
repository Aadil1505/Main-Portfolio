"use client"

import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { Link } from "next-view-transitions";

export default function MagicCardDemo() {
  const { theme } = useTheme();

  return (
    <>
        <div className="flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
            <Link href="/hofstra" className="flex h-[500px] w-full lg:h-[250px] hover:-translate-y-5 ease-in-out duration-300">
                <MagicCard 
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl lg:text-4xl italic"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >       
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-20" src="https://cs.hofstra.edu/docs/images/shield_lockup_cs.png" alt="Hofstra logo"/>
                        <h1 className="font-semibold mt-4">CS Technician</h1>
                    </div>
                </MagicCard>
            </Link>
            <Link href="/hofstra" className="flex h-[500px] w-full lg:h-[250px] hover:-translate-y-5 ease-in-out duration-300">
                <MagicCard 
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl lg:text-4xl italic"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >       
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-20" src="https://static.vecteezy.com/system/resources/previews/013/743/747/original/illustration-of-basketball-icon-png.png" alt="Hofstra logo"/>
                        <h1 className="font-semibold mt-4">Basketball</h1>
                    </div>
                </MagicCard>
            </Link>
            <Link href="/hofstra" className="flex h-[500px] w-full lg:h-[250px] hover:-translate-y-5 ease-in-out duration-300">
                <MagicCard 
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl lg:text-4xl italic"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >       
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-20" src="https://i.imgur.com/2EHshoi.png" alt="Hofstra logo"/>
                        <h1 className="font-semibold mt-4">Villaumite</h1>
                    </div>
                </MagicCard>
            </Link>
        </div>

        <div className="mt-4 flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row">
            <Link href="/hofstra" className="flex h-[500px] w-full lg:h-[250px] hover:-translate-y-5 ease-in-out duration-300">
                <MagicCard 
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl lg:text-4xl italic"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >       
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-20" src="https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png" alt="Hofstra logo"/>
                        <h1 className="font-semibold mt-4">Makerspace</h1>
                    </div>
                </MagicCard>
            </Link>
            <Link href="/hofstra" className="flex h-[500px] w-full lg:h-[250px] hover:-translate-y-5 ease-in-out duration-300">
                <MagicCard 
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl lg:text-4xl italic"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >       
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-20" src="https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png" alt="Hofstra logo"/>
                        <h1 className="font-semibold mt-4">Hofstra</h1>
                    </div>
                </MagicCard>
            </Link>
            <Link href="/hofstra" className="flex h-[500px] w-full lg:h-[250px] hover:-translate-y-5 ease-in-out duration-300">
                <MagicCard 
                    className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-2xl lg:text-4xl italic"
                    gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >       
                    <div className="flex flex-col items-center justify-center">
                        <img className="w-20" src="https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png" alt="Hofstra logo"/>
                        <h1 className="font-semibold mt-4">Hofstra</h1>
                    </div>
                </MagicCard>
            </Link>
        </div>
    </>
  );
}
