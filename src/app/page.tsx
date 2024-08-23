import BoxReveal from "@/components/magicui/box-reveal";
import TextReveal from "@/components/magicui/text-reveal";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurIn from "@/components/magicui/blur-in";
import WordRotate from "@/components/magicui/word-rotate";
import Cards from "@/components/sections/Cards";
import { OrbitingCirclesDemo } from "@/components/global/Orbit";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine } from 'lucide-react';



export default function Home() {
  return (
    <>

      {/* LANDING HERO */}
      <div className="relative overflow-hidden py-24 lg:py-32 h-screen">
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">Hi! I am</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <div className="flex justify-center items-center">
                <BoxReveal boxColor={"lightblue"} duration={0.5}>
                  <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
                  Aadil Alli
                  </h1>
                </BoxReveal>
                </div>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
              <div className="flex justify-center items-center">
                <BoxReveal boxColor={"lightblue"} duration={0.5}>
                <p className="text-xl text-muted-foreground">
                  This is a simple portfolio site explaining me, my work, and passion.
                </p>
                </BoxReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OrbitingCirclesDemo/>
      </div>


      {/* ABOUT ME SECTION */}
      <div id="About" className="z-10 flex min-h-[16rem] items-center justify-center text-center">
        <TextReveal text="About me"/>
      </div>

      <div className="h-screen flex justify-center items-center">
        <div className="container py-24 lg:py-32">
          <div className="max-w-2xl mx-auto">
            {/* Grid */}
            <div className="grid gap-12">
              <div>
                <h2 className="text-3xl font-bold lg:text-4xl">Aadil...</h2>
                <p className="mt-3 text-muted-foreground indent-10 text-justify">
                My love for coding started years ago when I became obsessed with PC building. 
                I slowly realized that building these high-power computers became the only activity 
                that satisfied my desire to create. Years later that passion for building and creating 
                transitioned into coding as I became more familiar with computers. Watching my wildest 
                ideas come to life on a screen in front of me consistently gives my mind a spark of 
                inspiration and excitement. I got my introduction to programming in just the 10th grade, 
                when I created my very first app. Using Javascript and a New York Stock Exchange database, 
                I built an app that informed its user how much potential profit they could have made on a Stock 
                or ETF, had they invested at any user-specified time period. This project sent me spiraling down 
                a rabbit hole of ideas and projects that inspired me to learn more about coding and how I could use 
                it to create. Today I am a Computer Science Technician at Hofstra University where I build, fix, 
                and optimize the department&apos;s software and hardware, collaborate with peers and coworkers on projects 
                to ensure a functional tech ecosystem, research systems and products that could increase workflow, 
                and document code for necessary products being implemented. I am also actively pursuing a B.S. 
                in Computer Science at Hofstra University.
                </p>
              </div>
            </div>
            {/* End Grid */}
          </div>
        </div>
      </div>


      {/* WORK SECTION */}
      <div id="Work" className="h-screen flex items-center justify-center text-center">
        <div className="text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">Some of my<span><WordRotate words={["Work", "Experience", "Projects"]}/></span></div>
      </div>
      
      {/* CARDS */}
      <div className="flex justify-center items-center">
        <div className="container py-24 lg:py-32">
          <div className="max-w-6xl mx-auto">
            <Cards/>
          </div>
        </div>
      </div>


      {/* RESUME SECTION */}
      <div id="Resume" className="h-screen flex items-center justify-center text-center">
        <div className="text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">Resume</div>
      </div>
      
      {/* RESUME */}
      <div className="flex flex-col items-center">
        <div className="container py-12 lg:py-16">
          <div className="max-w-lg mx-auto shadow-2xl">
            <img src="/Resume.jpg" alt="Resume" className="w-full h-auto" />
          </div>
          <div className="mt-6 text-center">
            <Button asChild>
              <Link href='/Aadil-Resume.pdf' download>
                Download PDF <ArrowDownToLine className="w-4 ml-2"/>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}







