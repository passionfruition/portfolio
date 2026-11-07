import { useReveal } from "@/lib/useReveal"
import { Badge } from "@/components/ui/badge"

const skills = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "UI/UX Design"
]

export function About() {
  const { ref, inView } = useReveal<HTMLDivElement>()

  return (
    <section
      id="about"
      className="flex h-svh snap-start snap-always items-center justify-center px-4 sm:px-6"
    >
      <div
        ref={ref}
        className={`reveal mx-auto grid max-w-4xl gap-10 sm:grid-cols-[1fr_auto] sm:items-start ${inView ? "in-view" : ""}`}
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-semibold text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground">
          I'm a frontend-focused software engineer passionate about building thoughtful, 
          intuitive digital experiences. I enjoy working at the intersection of design 
          and technology, turning complex problems into clean, functional solutions.
          </p>
          <p className="text-muted-foreground">
          Originally drawn to maps, now drawn to making things for the web. Outside of 
          engineering, I'm usually exploring the outdoors, chasing live music, or planning
          my next trip across the world.
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="size-32 shrink-0 rounded-2xl border border-border bg-muted sm:size-40"
        />
      </div>
    </section>
  )
}
