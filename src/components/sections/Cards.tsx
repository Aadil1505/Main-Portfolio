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
      desc: "Working and contributing to complex infrastructure and development projects as a technician.",
      
      path: "/hofstra",
    },
    {
      icon: (
        // <img
        //   src="https://static.vecteezy.com/system/resources/previews/013/743/747/original/illustration-of-basketball-icon-png.png"
        //   alt="Basketball"
        //   className="w-20 h-20 object-contain"
        // />
        <Cog className="w-20 h-20 object-contain"/>
      ),
      title: "Makerspace",
      desc: "Developing an employee and student managemnt system for the newly founded makerspace.",
      path: "/hofstra",
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
      desc: "Founding and laucnhing a complete clothing brand with a unique line and identity from scratch.",
      path: "/villaumite",
    },
    {
      icon: (
        <img
          src="/ripe-new.png"
          alt="Ripe"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "CSC-190 / Software Engineering",
      desc: "Introduction to development and a complete software lifecycle through project-based learning.",
      path: "/csc-190",
    },
    {
      icon: (
        <img
          src="https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png"
          alt="Hofstra"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "Hofstra",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      path: "/hofstra",
    },
    {
      icon: (
        <img
          src="https://seeklogo.com/images/H/hofstra-athletics-h-logo-8BBA464D73-seeklogo.com.png"
          alt="Hofstra"
          className="w-20 h-20 object-contain"
        />
      ),
      title: "Hofstra",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
      path: "/hofstra",
    },
  ];

  return (
    <section className="py-14 relative">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <Link key={idx} href={item.path} className="hover:backdrop-blur hover:-translate-y-2 ease-in-out duration-300">              
                <li className="bg-transparent transform-gpu space-y-3 p-4 border rounded-xl shadow-xl">
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
