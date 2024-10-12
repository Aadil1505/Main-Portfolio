import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';
import Link from 'next/link';

export default function Resume() {

  const skillsList = ['Javascript', 'Typescript', 'Python', 'Linux Administration', 'Network Security', 'Hardware Troubleshooting']

  return (
    <div className="container py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold lg:text-5xl mb-4">Aadil Alli</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Motivated computer science student with a strong background in technology and problem-solving.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-12">
          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Work Experience</h2>
            {/* Hofstra University - Computer Science Technician */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Hofstra University</h3>
                <span className="text-base sm:text-lg text-muted-foreground">October 2022 - Present</span>
              </div>
              <div className="flex">
              <img className="flex-shrink-0 mt-1 h-5 w-5 text-primary" src='https://www.hofstra.edu/themes/contrib/hofstra/assets/img/logo-shield.png'/>                
              <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Computer Science Technician</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Refactored and enhanced the department&apos;s email server following a security breach, upgraded its capabilities and configured advanced software security measures.</li>
                    <li>Implemented multi factor authentication for SSH access to Linux machines preventing thousands of SSH attacks.</li>
                    <li>Creating and testing IBM Storage Scale and HPE PFSS file system environments for NVIDIA GPU cluster file storage.</li>
                    <li>Added secure email authentication to the GPU cluster account provisioning software.</li>
                    <li>Collaborate with peers and coworkers on projects while tracking issues and documenting in Jira and Confluence.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Hofstra University - Maker Space Software Developer */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Hofstra University</h3>
                <span className="text-base sm:text-lg text-muted-foreground">June 2024 - Present</span>
              </div>
              <div className="flex">
              <img className="flex-shrink-0 mt-1 h-5 w-5 text-primary" src='https://www.hofstra.edu/themes/contrib/hofstra/assets/img/logo-shield.png'/>                
              <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Maker Space Software Developer</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Developed a comprehensive student and employee management system using Next.js, NextAuth, and PostgreSQL, significantly reducing time needed for managing and accessing student trainings and certifications.</li>
                    <li>Creating an API to track student usage data of machines and equipment in the makerspace, providing valuable insights for departmental higher-ups.</li>
                    <li>Automated previously manual tracking processes, enhancing efficiency for the director and employees.</li>
                    <li>Lead and manage a development team to assist in issues and project growth.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Champs Sports */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Champs Sports</h3>
                <span className="text-base sm:text-lg text-muted-foreground">October 2020 - Present</span>
              </div>
              <div className="flex">
                <img className="flex-shrink-0 mt-1 h-5 w-5 text-primary" src='https://i.imgur.com/zGJLfY1.png'/>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Part-Time Sales Associate</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Provide excellent sales service and share expertise of products and trends to exceed the customer&apos;s needs.</li>
                    <li>Fulfill sales by locating products and preparing for shipment or physical transactions on mobile point of sale.</li>
                    <li>Exceed company expectation of at least $20,000 a week in sales.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Amazon Fresh */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Amazon Fresh</h3>
                <span className="text-base sm:text-lg text-muted-foreground">July 2022 - Present</span>
              </div>
              <div className="flex">
                <img className="flex-shrink-0 mt-1 h-5 w-5 text-primary" src='https://freelogopng.com/images/all_img/1687887898amazon-fresh-icon.png'/>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Flex Associate/Customer Service</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Provided excellent customer service and efficiently solved customer problems.</li>
                    <li>Managed customer returns and transactions at the point of sale.</li>
                    <li>Packed groceries and delivered online orders while monitoring inventory.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((skill) => (
                <Badge key={skill} variant="outline"> {skill} </Badge>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Hofstra University</h3>
              <p className="text-muted-foreground">Bachelor of Science in Computer Science</p>
              <p className="text-muted-foreground">Expected Graduation: June 2026</p>
            </div>
          </section>

          {/* Projects or Achievements */}
          {/* <section>
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Projects</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Developed an employee and student management web application using Nextjs.</li>
              <li>Created a machine learning model for predicting student performance based on historical data.</li>
              <li>Contributed to an open-source project aimed at improving Linux system security.</li>
            </ul>
          </section> */}
        </div>
        {/* End Grid */}
        <div className="mt-10 text-center">
            <Button asChild>
              <Link href='/Aadil-Resume.pdf' download>
                Download PDF <ArrowDownToLine className="w-4 ml-2"/>
              </Link>
            </Button>
          </div>
      </div>
    </div>
  );
}