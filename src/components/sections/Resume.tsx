import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java', 'C', 'C++'],
    frameworks: ['Next.js', 'React', 'React Native', 'Expo'],
    tools: ['Git', 'Jira', 'Confluence', 'Postman', 'n8n', 'AI SDK/API'],
    databases: ['PostgreSQL', 'NeonDB', 'Supabase']
  }

  return (
    <div className="container px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold lg:text-5xl mb-4">Aadil Alli</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 px-4 sm:px-0">
            Motivated computer science student with a strong background in technology and problem-solving.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 sm:gap-12">
          {/* Work Experience */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl mb-4 sm:mb-6">Work Experience</h2>

            {/* Disko - Software Development Intern */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-semibold">Disko</h3>
                <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">March 2025 - Present</span>
              </div>
              <div className="flex">
                <img className="flex-shrink-0 mt-1 h-4 w-4 sm:h-5 sm:w-5 text-primary" src='https://disko.tv/wp-content/uploads/2023/03/cropped-disko2023-1-1-32x32.jpg' />
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-2">Software Development Intern</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                    <li>Led the migration from a legacy Angular codebase to Next.js, improving developer efficiency and deployment workflows.</li>
                    <li>Built dynamic, responsive UI interfaces using Next.js, Shadcn, and Tailwind CSS, optimized for cross-device performance.</li>
                    <li>Assisted integration of the front-end application with a custom Node.js backend, managing API communication, state synchronization, and error handling.</li>
                    <li>Implemented a simple authentication system using Auth.js, enhancing account management and secure session handling.</li>
                    <li>Collaborated directly with founders to translate product requirements and user feedback into technical solutions in a fast-paced startup environment.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hofstra University - Computer Science Technician */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-semibold">Hofstra University</h3>
                <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">October 2022 - Present</span>
              </div>
              <div className="flex">
                <img className="flex-shrink-0 mt-1 h-4 w-4 sm:h-5 sm:w-5 text-primary" src='https://www.hofstra.edu/themes/contrib/hofstra/assets/img/logo-shield.png' />
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-2">Computer Science Technician</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                    <li>Rebuilt and enhanced the department&apos;s email server following a security breach, upgraded its capabilities and configured advanced measures using Postfix, ClamAV, RFC standards, SSH guard, and firewalls deployed to an AWS EC2 instance.</li>
                    <li>Implemented multi-factor authentication for SSH access to Linux machines preventing thousands of daily SSH attacks and probes in Linux environments.</li>
                    <li>Deployed and tested IBM Storage Scale and HPE PFSS environments for NVIDIA GPU cluster file storage through Ansible scripts and IBM&apos;s administration commands for installations and management.</li>
                    <li>Designed and implemented an automated VM provisioning system using n8n workflows that orchestrates Ansible playbooks for virtual machine deployment and dynamic IP address allocation, streamlining infrastructure management processes.</li>
                    <li>Collaborated with peers and coworkers on projects while tracking issues and documenting in Jira and Confluence.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hofstra University - MakerSpace Software Developer */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-semibold">Hofstra University</h3>
                <span className="text-sm sm:text-base lg:text-lg text-muted-foreground">June 2024 - Present</span>
              </div>
              <div className="flex">
                <img className="flex-shrink-0 mt-1 h-4 w-4 sm:h-5 sm:w-5 text-primary" src='https://www.hofstra.edu/themes/contrib/hofstra/assets/img/logo-shield.png' />
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-2">MakerSpace Software Developer</h4>
                  <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                    <li>Developed and deployed a containerized student and employee management system to an on-premises VPS using Docker and Traefik reverse proxy for HTTPS traffic management. Built with Next.js, BetterAuth, and PostgreSQL, reducing time needed for managing and accessing student info, trainings, and certifications.</li>
                    <li>Created an API to track student usage data of machines and equipment, providing actionable insights that informed resource allocation decisions for department leadership.</li>
                    <li>Automated previously manual tracking processes, enhancing efficiency for the director and employees.</li>
                    <li>Led a 4-person development team using Agile methodology to assist in issue management, scaling, and project growth.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Software Projects */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl mb-4 sm:mb-6">Software Projects</h2>

            {/* SaaStrike */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">SaaStrike</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A comprehensive SaaS platform utilizing OpenAI GPT-4.1 and Reddit API to analyze community discussions and generate validated business opportunities through LLM prompt engineering and RAG-like architecture, serving 60+ users who have generated hundreds of startup ideas. Built with Next.js, NeonDB, PostgreSQL, Better Auth, and Polar for subscription and payment management and automated credit-based usage tracking.
              </p>
            </div>

            {/* Authlink */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Authlink</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Product authentication system leveraging blockchain technology and tamper-proof NFC tags to provide immutable verification for luxury goods. Built with Next.js, Rust/Node.js backends for Solana blockchain interactions, and NTAG 424 chip integration.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl mb-4 sm:mb-6">Skills</h2>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Languages</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Tools</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Databases</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl mb-4 sm:mb-6">Education</h2>
            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-semibold">Hofstra University</h3>
              <p className="text-sm sm:text-base text-muted-foreground">B.S. Computer Science (Dean&apos;s List)</p>
              <p className="text-sm sm:text-base text-muted-foreground">Expected Graduation: May 2026</p>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl mb-4 sm:mb-6">Achievements</h2>
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2 gap-1">
                <h3 className="text-lg sm:text-xl font-semibold">Amazon-Sponsored Capture the Flag Competition</h3>
                <span className="text-sm sm:text-base lg:text-lg text-muted-foreground whitespace-nowrap">November 2025</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Won first place and $6,000 prize in cybersecurity CTF against teams from Hofstra University, NYU, St. John&apos;s, NYIT, and NCC, solving challenges in Web Exploitation, SQL injection, Reverse Engineering (binary analysis, decompilation), PWN (buffer overflows, exploit development), and Cryptography (cipher analysis, hash cracking, JWT exploitation).
              </p>
            </div>
          </section>
        </div>
        {/* End Grid */}
        <div className="mt-10 text-center">
          <Button asChild>
            <Link href='/Aadil-Resume.pdf' download>
              Download PDF <ArrowDownToLine className="w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
