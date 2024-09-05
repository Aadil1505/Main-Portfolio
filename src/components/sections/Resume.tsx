import React from 'react';
import { ArrowDownToLine, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Resume() {
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
            {/* Icon Block */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-semibold">Hofstra University</h3>
                <span className="text-base sm:text-lg text-muted-foreground">October 2022 - Present</span>
              </div>
              <div className="flex">
              <img className="flex-shrink-0 mt-1 h-5 w-5 text-primary" src='https://www.hofstra.edu/themes/contrib/hofstra/assets/img/logo-shield.png'/>                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Computer Science Technician</h4>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Refactored and enhanced the department&apos;s email server following a security breach, implementing advanced security measures.</li>
                    <li>Implemented multi-factor authentication for SSH access, preventing thousands of SSH attacks.</li>
                    <li>Rebuilt and optimized computer hardware and software for department faculty and students.</li>
                    <li>Assisted students with remote access and troubleshooting computer-related issues.</li>
                    <li>Collaborated with peers to maintain a functional tech ecosystem in the department.</li>
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
                    <li>Exceeded weekly sales targets by providing expert product knowledge.</li>
                    <li>Fulfilled online orders and managed customer transactions.</li>
                    <li>Consistently surpassed company expectations, achieving over $20,000 in weekly sales.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Javascript', 'Typescript', 'Python', 'Linux Administration', 'Network Security', 'Hardware Troubleshooting'].map((skill) => (
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
          <section>
            <h2 className="text-2xl font-bold lg:text-3xl mb-6">Projects</h2>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Developed a student resource management web application using React and Node.js.</li>
              <li>Created a machine learning model for predicting student performance based on historical data.</li>
              <li>Contributed to an open-source project aimed at improving Linux system security.</li>
            </ul>
          </section>
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
