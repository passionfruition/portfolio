import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-svh snap-start snap-always flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute left-1/2 top-1/3 -z-10 size-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl sm:size-96"
      />

      <div className="animate-fade-in-up flex flex-col items-center gap-4">
        <p className="text-sm font-medium text-muted-foreground">Hi, I'm</p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          <strong>made</strong>leine
        </h1>
        <p className="text-xl">(មរកត)</p>
        <p className="max-w-md text-balance text-base text-muted-foreground sm:text-lg">
          I build things for the web.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<a href="#projects">View Projects</a>} />
          <Button size="lg" variant="outline" render={<a href="#contact">Get in Touch</a>} />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="animate-bounce-soft absolute bottom-8 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5" />
      </a>
    </section>
  )
}
