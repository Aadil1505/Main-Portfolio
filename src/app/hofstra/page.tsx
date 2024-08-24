import Slider from "@/components/sections/Slider";
import { Lock, Mail, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export default function Page() {
  const images = [
    { src: "https://aadil-alli.vercel.app/assets/mailServer-jYf_Ldcx.png", alt: "Description of image 1" },
    { src: "https://placehold.co/1920x1080", alt: "Description of image 2" },
    { src: "https://placehold.co/1920x1080", alt: "Description of image 3" },
  ]
  return (
    <>

      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Computer Science Technician
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Nano-computing breaks barriers, unlocking new tech horizons.
            </p>
          </div>
          <div className="mt-10 relative max-w-3xl mx-auto">
            <Slider images={images} autoplay={true} aspectRatio={16/9}/>
          </div>
        </div>
      </div>
      {/* End Hero */}


      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">CS Technician</h2>
              <p className="mt-3 text-muted-foreground">
                As a Computer Science Technician, I have worked and even lead tons of projects 
                that were required or needed by Hofstra&apos;s Computer Science Department. However, 
                below are some of the most complex projects that are/will soon be in production 
                that took months of work including learning to navigate linux and the terminal, 
                reading open source software documentation, and intricate web development tasks.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Mail className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Enterprise Grade Email Server
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  The Computer Science department at Hofstra unfortunately had 
                  a breech in its email server, allowing the infiltrator to send 
                  thousands of phishing emails in a matter of seconds to both the 
                  department's faculty and staff. After shutting it down to prevent 
                  any further attacks, I was tasked with implementing a complex 
                  server that would protect the department from a future attacker. 
                  After researching packages and solutions to secure the new server,
                  I documented and executed a build guide and had it reviewed for 
                  approval. The mail server build consists of a security-hardened 
                  configuration of email internet and industry standard protocols and 
                  packages including Postfix, SSHGuard, and many other necessary components, 
                  with TLS encryption, DKIM signing, DMARC verification, SPF verification, 
                  stricter relay controls, antivirus scanning, spam filters, realtime 
                  blacklist checks, rate limiting, additional client restrictions, 
                  authentication requirements, and added logging. The mail server is 
                  currently in a production environment deployed on AWS.
                  </p>
                  <div className="mt-4 flex gap-x-4">
                    <Badge variant="outline">Rocky Linux</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">Postfix</Badge>
                  </div>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Lock className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Multifactor Authentication for SSH
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                  <div className="mt-4 flex gap-x-4">
                    <Badge variant="outline">Rocky Linux</Badge>
                    <Badge variant="outline">SSH</Badge>
                    <Badge variant="outline">PrivacyIdea</Badge>
                  </div>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <UsersRound className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    GPU Cluster Account Management System
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We worry about the details so that our residents don&apos;t
                    have to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                  <div className="mt-4 flex gap-x-4">
                    <Badge variant="outline">Nodejs</Badge>
                    <Badge variant="outline">Ejs</Badge>
                    <Badge variant="outline">Github</Badge>
                  </div>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
