import { Cog } from "lucide-react";
import { Link } from "next-view-transitions";

export default function Cards() {
  const features = [
    {
      icon: (
        <img
          src="https://cs.hofstra.edu/docs/images/shield_lockup_cs.png"
          alt="CS Technician"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "CS Technician",
      desc: "Working and contributing to complex infrastructure and development projects for the CS department.",
      
      path: "/hofstra",
    },
    {
      icon: (
        <Cog className="w-20 h-20 object-contain"/>
      ),
      title: "Makerspace",
      desc: "Developing an employee and student management system for the newly founded makerspace.",
      path: "/makerspace",
    },
    {
      icon: (
        <img
          src="/ripe/logo.png"
          alt="Ripe"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "CSC-190 / SWE",
      desc: "Introduction to software engineering and a complete software lifecycle through project-based learning.",
      path: "/csc-190",
    },
    {
      icon: (
        <img
          src="https://i.imgur.com/2EHshoi.png"
          alt="Villaumite"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "Villaumite",
      desc: "Founding and launching a complete clothing brand with a unique line and identity from scratch.",
      path: "/villaumite",
    },
  ];

  return (
    <section className="py-14 relative">
      <div className="max-w-screen-7xl mx-auto">
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item, idx) => (
              <Link scroll={true} key={idx} href={item.path} className="hover:backdrop-blur hover:-translate-y-2 ease-in-out duration-300 hover:animate-pulse">              
                <li className="bg-transparent transform-gpu space-y-3 p-4 border border-secondary dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-xl shadow-xl">
                  <div className="p-4 transform-gpu w-fit">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-secondary-foreground font-bold tracking-tighter">
                    {item.title}
                  </h4>
                  <p className="text-gray-500">{item.desc}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
