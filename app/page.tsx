import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Experience } from "@/components/experience";
import { About } from "@/components/about";
import { Contributions } from "@/components/contributions";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Work />
        <Experience />
        <About />
        <Contributions />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
