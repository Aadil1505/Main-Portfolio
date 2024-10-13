"use client"

import { ContactRound, FileText, FolderGit2, Github, HomeIcon, Linkedin, Mail, Smartphone, UserRoundPen } from "lucide-react";
// import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Link } from 'next-view-transitions';
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  contact: (props: IconProps) => <ContactRound {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  github: (props: IconProps) => <Github {...props} />,
};

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#About", icon: UserRoundPen, label: "About me" },
    { href: "/#Work", icon: FolderGit2, label: "Work" },
    { href: "/#Resume", icon: FileText, label: "Resume" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Aadil1505",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aadil-alli/",
        icon: Icons.linkedin,
      },
    },
  },
};

export default function DockDemo() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > 10 && currentScrollY > lastScrollY) {
        setVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    return () => {
      unsubscribe();
    };
  }, [scrollY, lastScrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <Dock direction="middle" className="border-accent-foreground">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full",
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full bg-accent-foreground" />
            <DockIcon>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="size-12 rounded-full" variant="ghost" size="icon">
                    <ContactRound className="size-4"/>
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg max-w-md">
                  <DialogHeader>
                    <DialogTitle>Contact Info</DialogTitle>
                    <DialogDescription>
                      <div className="flex items-center mt-4">
                        <Smartphone className="flex-shrink-0 h-5 w-5" />
                        <h3 className="ms-3 text-sm font-semibold">
                          646-338-4179
                        </h3>
                      </div>
                      <div className="flex items-center mt-4">
                        <Mail className="flex-shrink-0 h-5 w-5" />
                        <h3 className="ms-3 text-sm font-semibold">
                          aadil15alli@gmail.com
                        </h3>
                      </div>
                      <div className="mt-4">
                        <Link className="flex items-center hover:text-secondary-foreground" href="https://github.com/Aadil1505">                          
                          <Github className="flex-shrink-0 h-5 w-5" />
                          <h3 className="ms-3 text-sm font-semibold">
                            Aadil1505
                          </h3>
                        </Link>
                      </div>
                      <div className="mt-4">
                        <Link className="flex items-center hover:text-secondary-foreground" href="https://www.linkedin.com/in/aadil-alli/">                          
                          <Linkedin className="flex-shrink-0 h-5 w-5" />
                          <h3 className="ms-3 text-sm font-semibold">
                            Aadil Alli
                          </h3>
                        </Link>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </DockIcon>
            <Separator orientation="vertical" className="h-full bg-accent-foreground" />
            <DockIcon>
              <ModeToggle />
            </DockIcon>
          </Dock>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
