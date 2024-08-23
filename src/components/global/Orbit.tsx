import OrbitingCircles from "@/components/magicui/orbiting-circles";
import { Circle, CodeXml, Gamepad2, Github, Laptop } from "lucide-react";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center ">


      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <BasketballIcon className=""/>
      </OrbitingCircles>

      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Gamepad2 className=""/>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Laptop className=""/>
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <CodeXml className=""/>
      </OrbitingCircles>
    </div>
  );
}

        
const BasketballIcon = ({ size = 24, color = "currentColor", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Basketball circle */}
      <Circle/>
      {/* Curved lines */}
      <path d="M5.5,5.5a10,10 0 0,1 13,13a10,10 0 0,0 -13,-13" />
      <path d="M18.5,5.5a10,10 0 0,0 -13,13a10,10 0 0,1 13,-13" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
};