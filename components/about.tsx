import Image from "next/image";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-mono text-xs text-muted-foreground sm:text-sm">
              // about me
            </p>
            <h2 className="mt-4 font-pixel text-2xl leading-tight tracking-tight uppercase sm:text-3xl md:text-4xl">
              How It{" "}
              <span className="text-primary">Started</span>.
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                My love for coding started years ago when I became obsessed with
                building PCs. Although it was an incredibly expensive hobby, it
                fulfilled my desire to create.
              </p>
              <p>
                Years later that passion for building and creating transitioned
                into coding as I became more familiar with computers and
                development. Watching a random idea come to life on a screen in
                front of me continues to serve as inspiration and excitement to
                always complete a project.
              </p>
            </div>
            <p className="mt-8 font-mono text-xs text-muted-foreground">
              Hofstra CS, B.S. &rsquo;26 · New York · currently @ Disko
            </p>
          </div>

          <div className="relative">
            <Image
              src="/aadil.png"
              alt="Aadil Alli, photographed outdoors in a garden"
              width={2168}
              height={1220}
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="w-full rounded-lg border border-border shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
