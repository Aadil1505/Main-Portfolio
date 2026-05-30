import Image from "next/image";

type Role = {
  org: string;
  location: string;
  title: string;
  dates: string;
  logo: { src: string; width: number; height: number };
  bullets: string[];
};

const roles: Role[] = [
  {
    org: "Disko",
    location: "Remote",
    title: "Software Engineering Intern",
    dates: "Mar 2025 – Present",
    logo: { src: "/logos/disko.png", width: 200, height: 200 },
    bullets: [
      "Led the full codebase migration from Angular to Next.js, reducing build complexity and accelerating deployment cycles for a production application.",
      "Built a reusable UI component library with Next.js, shadcn, and Tailwind CSS, cutting redundant styling work across the codebase and ensuring consistent cross-device rendering.",
      "Designed and maintained a REST API integration layer between the React front-end and Node.js backend, handling state synchronization and structured error handling.",
      "Replaced the legacy auth flow with session-based authentication via Auth.js, closing security gaps on both client and server-side actions.",
    ],
  },
  {
    org: "Hofstra University MakerSpace",
    location: "Hempstead, NY",
    title: "Software Developer",
    dates: "Jun 2024 – Present",
    logo: { src: "/logos/hofstra.png", width: 260, height: 260 },
    bullets: [
      "Architected and deployed a containerized student and staff management platform for the department's daily operations, self-hosted on a VPS with Docker, Traefik, Next.js, BetterAuth, and PostgreSQL.",
      "Developed a REST API for real-time machine usage tracking, delivering data-driven reports that directly informed department resource allocation.",
      "Led a 4-person team using Agile/Scrum, owning sprint planning, issue triage, and end-to-end feature delivery.",
    ],
  },
  {
    org: "Hofstra University",
    location: "Hempstead, NY",
    title: "Computer Science Technician",
    dates: "Oct 2022 – Present",
    logo: { src: "/logos/hofstra.png", width: 260, height: 260 },
    bullets: [
      "Rebuilt and hardened the department mail infrastructure post-breach using Postfix, ClamAV, RFC standards, SSH guard, and firewalls deployed to an AWS EC2 instance.",
      "Implemented multi-factor authentication for lab-environment SSH access, eliminating thousands of daily brute-force probing attempts.",
      "Automated VM provisioning with n8n workflows orchestrating Ansible playbooks, handling dynamic IP and resource allocation and reducing manual provisioning time for new VMs.",
      "Provisioned IBM Storage Scale and HPE PFSS high-performance storage for an NVIDIA GPU compute cluster via Ansible, enabling researchers to use the full cluster without manual storage configuration.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          // experience
        </p>
        <h2 className="mt-4 font-pixel text-2xl leading-tight tracking-tight uppercase sm:text-3xl md:text-4xl">
          Where I&rsquo;ve <span className="text-primary">worked</span>.
        </h2>

        <ol className="mt-12 divide-y divide-border border-y border-border">
          {roles.map((role) => (
            <li key={`${role.org}-${role.title}`} className="py-8 sm:py-10">
              <div className="flex items-center gap-4">
                <Image
                  src={role.logo.src}
                  alt=""
                  width={role.logo.width}
                  height={role.logo.height}
                  className="size-12 shrink-0 rounded-md object-contain"
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {role.org}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm">
                      {role.location}
                    </span>
                  </div>
                  <div className="mt-0.5 flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="font-mono text-sm text-muted-foreground">
                      {role.title}
                    </p>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm">
                      {role.dates}
                    </span>
                  </div>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-base leading-relaxed text-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-[1px] bg-primary"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
