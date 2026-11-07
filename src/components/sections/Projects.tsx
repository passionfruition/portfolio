import { ExternalLink } from "lucide-react"
import { useReveal } from "@/lib/useReveal"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { GitHubIcon } from "@/components/icons"

type Project = {
  title: string
  description: string
  tags: string[]
  repoUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: "State Government Agricultural Data Bank Platform",
    description:
      "Led development of a data platform that helps farmers manage agriculturual data and discover grant opportunities.",
    tags: ["React", "TypeScript", "Web API", "Figma Design"],
  },
  {
    title: "AI Data Center Digital Twin Platform",
    description:
      "Developed a digital twin platform for planning, simulating, and optimizing gigawatt-scale AI data centers.",
    tags: ["React", "TypeScript", "Omniverse", "3D Visualization"],
  },
  {
    title: "Data Center Site Selection Platform",
    description:
      "Developed a geospatial site selection platform that integrates multiple data layers, spatial analysis, and reporting.",
    tags: ["React", "TypeScript", "ArcGIS Maps SDK", "AI Analytics"],
  },
  {
    title: "Evoka Map",
    description:
      "A digital map diary for capturing places, memories, photos, music, and moods.",
    tags: ["React", "TypeScript", "Supabase", "Mapbox GL JS"],
    repoUrl: "https://github.com/evokamap/evoka-map",
    liveUrl: "https://www.evokamap.com/",
  },
]

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-auto gap-4 bg-transparent">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-4" />
              Live
            </a>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="flex h-svh snap-start snap-always flex-col items-center justify-center overflow-y-auto px-4 py-20 sm:px-6"
    >
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Projects
        </h2>
        <p className="mt-2 text-muted-foreground">
          A few things I've built.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
