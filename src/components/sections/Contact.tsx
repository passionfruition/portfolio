import { Mail } from "lucide-react"
import { useReveal } from "@/lib/useReveal"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"

const socials = [
  { label: "GitHub", href: "https://github.com/passionfruition", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/madeleine-prak/", icon: LinkedInIcon },
  { label: "X", href: "https://x.com/devmadeleine", icon: XIcon },
  { label: "Email", href: "mailto:madeleineprak@gmail.com", icon: Mail },
]

export function Contact() {
  const { ref, inView } = useReveal<HTMLDivElement>()

  return (
    <section
      id="contact"
      className="relative flex h-svh snap-start snap-always flex-col items-center justify-center px-4 text-center sm:px-6"
    >
      <div
        ref={ref}
        className={`reveal flex flex-col items-center gap-4 ${inView ? "in-view" : ""}`}
      >
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Get in Touch
        </h2>
        <p className="max-w-md text-muted-foreground">
          Feel free to reach out — I'm always open to chatting about new
          projects, ideas, or opportunities.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              variant="outline"
              size="icon-lg"
              aria-label={label}
              render={
                <a href={href} target="_blank" rel="noreferrer">
                  <Icon className="size-4" />
                </a>
              }
            />
          ))}
        </div>
      </div>

      <p className="absolute bottom-6 text-center text-xs text-muted-foreground">
        © 2026 Madeleine Prak
      </p>
    </section>
  )
}
