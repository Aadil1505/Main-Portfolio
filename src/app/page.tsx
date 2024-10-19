import { OrbitingCirclesDemo } from "@/components/global/Orbit";
import BoxReveal from "@/components/magicui/box-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TextReveal from "@/components/magicui/text-reveal";
import WordRotate from "@/components/magicui/word-rotate";
import Cards from "@/components/sections/Cards";
import Resume from "@/components/sections/Resume";
import { Building2Icon, CodeXml, Flag, ListStart, SquareChartGantt, ThumbsUpIcon, Users2Icon } from "lucide-react";

export default function Home() {
  return (
    <>

      {/* LANDING HERO */}
      <div className="relative overflow-hidden py-24 lg:py-32 min-h-screen">
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
      <div id="About" className="z-10 flex min-h-screen items-center justify-center text-center">
        <TextReveal text="About me"/>
      </div>

      <div className="min-h-screen flex justify-center items-center">
        <div className="container py-24 lg:py-32">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold lg:text-4xl">Aadil...</h2>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <CodeXml className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    How I started Coding
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    My love for coding started years ago when I became obsessed with building PCs. 
                    Although it was an incredibly expensive hobby, it fulfilled my desire to create.
                    Years later that passion for building and creating transitioned into coding as I 
                    became more familiar with computers and development. Watching a random idea 
                    come to life on a screen in front of me continues to serve as inspiration and excitement
                    to always complete a project.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Flag className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Learning about programming
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    I got my introduction to coding in just the 10th grade in AP Computer Science Principles. 
                    For the exam, I created one of my first full-featured apps using Javascript and a New 
                    York Stock Exchange database I scavenged online. The app would inform its user of the potential 
                    profit they could have earned on a Stock or ETF, if they invested at any user-specified historical 
                    point in time. This project sent me spiraling down a rabbit hole of ideas and projects that inspired me to learn more 
                    about coding and how I could use it to create my ideas and solve problems.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <SquareChartGantt className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Working and coding projects
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Today I am a Computer Science Technician at Hofstra University where I both lead and assist in many 
                    different projects that aim to implement, develop, and secure department needed infrastructure and systems. 
                    Most of these include integrating open source software and solutions to build on the current infrastructure.
                    I am also a Software Developer at the Science and Innovation Center&apos;s Makerspace where I am currently 
                    building out a new employee and student management system to automate training verification and tracking
                    student data. I am also actively pursuing a B.S. in Computer Science at Hofstra University.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
        </div>
      </div>


      {/* WORK SECTION */}
      <div id="Work" className="min-h-screen flex items-center justify-center text-center">
        <div className="text-2xl font-bold md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">Some of my<span><WordRotate words={["Work", "Experience", "Projects", "Side quests"]}/></span></div>
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
      <div id="Resume" className="min-h-screen flex items-center justify-center text-center">
        <VelocityScroll
          text="Resume"
          default_velocity={5}
          className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] transform-gpu"
        />
      </div>
      <Resume/>

    </>
  );
}







