import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AArrowUp, Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="p-6 md:py-12 w-full shadow border-t backdrop-blur">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <AArrowUp className="h-6 w-6" />
          <span className="text-lg font-semibold">Aadil's Portfolio</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              Home
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              {/* <Link href="" className="text-sm hover:underline" prefetch={false}>
                Contact
              </Link> */}
              <Button variant="ghost">
                Contact
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
          <ModeToggle/>
        </nav>
        <p className="text-sm text-muted-foreground text-center">
          &copy; Made by <Link className="hover:text-secondary" href="https://github.com/Aadil1505">Aadil</Link> 2024
        </p>
      </div>
    </footer>
  );
}
